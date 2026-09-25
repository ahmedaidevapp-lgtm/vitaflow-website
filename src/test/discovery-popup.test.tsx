import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DiscoveryCallPopup from "@/components/demo/DiscoveryCallPopup";
import { DemoDialogProvider } from "@/components/demo/DemoDialogProvider";
import LanguageProvider from "@/i18n/LanguageProvider";

// A configured key is what makes the CTA open the form rather than a mail client.
vi.mock("@/lib/constants", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/constants")>()),
  WEB3FORMS_ACCESS_KEY: "test-key",
}));

const TITLE = "Envie d'un appel découverte ?";

const renderAt = (path: string) =>
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <DiscoveryCallPopup />
      </MemoryRouter>
    </LanguageProvider>,
  );

/** The popup polls once a second, so time has to pass inside act(). */
const passSeconds = (seconds: number) =>
  act(() => {
    vi.advanceTimersByTime(seconds * 1000);
  });

describe("discovery call popup", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => vi.useRealTimers());

  it("stays hidden until the visitor has spent 20 seconds on a marketing page", () => {
    renderAt("/");

    passSeconds(19);
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();

    passSeconds(1);
    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });

  it("does not count time spent in a background tab", () => {
    const visibility = vi.spyOn(document, "visibilityState", "get").mockReturnValue("hidden");
    renderAt("/");

    passSeconds(45);
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();

    visibility.mockReturnValue("visible");
    passSeconds(20);
    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });

  it("closes on the X and stays closed on the next visit", () => {
    renderAt("/");
    passSeconds(20);

    // fireEvent, not userEvent: user-event's own timer shimming deadlocks against the
    // fake clock this suite needs.
    fireEvent.click(screen.getByRole("button", { name: "Fermer cette invitation" }));
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();

    renderAt("/");
    passSeconds(60);
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();
  });

  it("never interrupts the legal pages", () => {
    renderAt("/privacy");
    passSeconds(60);
    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();
  });

  it("hands the visitor over to the demo form when they accept", () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={["/"]}>
          <DemoDialogProvider>{null}</DemoDialogProvider>
        </MemoryRouter>
      </LanguageProvider>,
    );
    passSeconds(20);

    fireEvent.click(screen.getByRole("button", { name: "Prendre contact" }));

    expect(screen.queryByText(TITLE)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Nom et prénom/)).toBeInTheDocument();
  });
});
