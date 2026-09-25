import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DemoRequestDialog from "@/components/demo/DemoRequestDialog";
import LanguageProvider from "@/i18n/LanguageProvider";

// The access key is read at module load, so it has to be set before the import above
// resolves — vi.stubEnv in a setup position would be too late.
vi.mock("@/lib/constants", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/constants")>()),
  WEB3FORMS_ACCESS_KEY: "test-key",
}));

const fillForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/Nom et prénom/), "Dr. Yasmine Benali");
  await user.type(screen.getByLabelText(/Laboratoire/), "Labo Al Amal");
  await user.type(screen.getByLabelText(/E-mail professionnel/), "y.benali@alamal.ma");
  await user.type(screen.getByLabelText(/Ville/), "Casablanca");
  await user.selectOptions(screen.getByLabelText(/Comptes rendus par jour/), "50 à 200");
};

describe("demo request form", () => {
  beforeEach(() => {
    window.localStorage.clear();
    render(
      <LanguageProvider>
        <DemoRequestDialog open onOpenChange={() => undefined} />
      </LanguageProvider>,
    );
  });

  afterEach(() => vi.unstubAllGlobals());

  it("posts the laboratory's details to Web3Forms and confirms the send", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Envoyer la demande" }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body).toMatchObject({
      access_key: "test-key",
      replyto: "y.benali@alamal.ma",
      Laboratoire: "Labo Al Amal",
      Ville: "Casablanca",
      "Comptes rendus par jour": "50 à 200",
      Langue: "fr",
    });

    expect(await screen.findByText("Demande envoyée")).toBeInTheDocument();
  });

  it("keeps the form and offers the mailto fallback when the send fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const user = userEvent.setup();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Envoyer la demande" }));

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("ahmed@amandevtech.com");
    expect(screen.getByLabelText(/Laboratoire/)).toHaveValue("Labo Al Amal");
  });
});
