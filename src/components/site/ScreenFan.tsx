import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLanguage } from "@/i18n/context";
import { cn } from "@/lib/utils";

/** `width`/`height` are the image's pixel size, so it is shown whole and reserves its space. */
export type Shot = { src: string; alt: string; width?: number; height?: number };

type Variant = "phone" | "browser";

type Props = {
  shots: Shot[];
  /** "phone" for portrait app screenshots, "browser" for landscape web-app ones. */
  variant: Variant;
  /** Floating card pinned to the bottom corner of the hero, e.g. a notification. */
  badge?: ReactNode;
};

/** How far down the page (px) the fan keeps opening as the visitor scrolls. */
const SCROLL_RANGE = 500;

type Pose = { x: number; y: number; rotate: number };

/** Lift applied to the hovered screen, which also straightens and comes to the front. */
const HOVER_LIFT = 14;
const HOVER_SCALE = 1.05;

/**
 * Geometry per variant. `fan` places screen `i` of `count`, with offsets at the desktop
 * width — `unit` scales them for the compact layout and `dir` mirrors them for RTL.
 * `spread` runs 0 → 1 on load (stacked → fanned) and on up to 1.3 with scroll.
 * `zIndex` decides which screen lies on top. On desktop the fan starts at `anchor` (px
 * from the card's start edge) and is sized by `fitWidth` so no screen is clipped.
 */
type Geometry = {
  desktopWidth: number;
  /** Distance from the top of the card, as a Tailwind class. */
  desktopTop: string;
  top: number;
  anchor: (viewport: number) => number;
  fan: (i: number, count: number, spread: number) => Pose;
  zIndex: (i: number, count: number) => number;
  /** Offset between consecutive screens at full width, used to fit the fan. */
  step: { x: number; y: number };
  /** Largest spread the fit must allow for: phones may bleed once the page scrolls. */
  fitSpread: number;
};

const GEOMETRY: Record<Variant, Geometry> = {
  // Cascades down and to the right, each phone laid over the one before. The slope is
  // shallow because phone screenshots are tall.
  phone: {
    desktopWidth: 230,
    desktopTop: "top-[140px]",
    top: 140,
    anchor: (viewport) => Math.max(0.5 * (viewport - 32), 620),
    fan: (i, _count, spread) => ({ x: i * 150 * spread, y: i * 70 * spread, rotate: -10 + i * 6 * spread }),
    zIndex: (i) => i + 1,
    step: { x: 150, y: 70 },
    fitSpread: 1,
  },
  // The first screen sits in front at the top left; the rest step down and to the right
  // behind it, so the windows read left to right in order.
  browser: {
    desktopWidth: 620,
    desktopTop: "top-[150px]",
    top: 150,
    anchor: (viewport) => Math.max(0.42 * viewport, 600),
    fan: (i, _count, spread) => ({ x: i * 95 * spread, y: i * 125 * spread, rotate: -5 + i * 3.5 * spread }),
    zIndex: (i, count) => count - i,
    step: { x: 95, y: 125 },
    fitSpread: 1.3,
  },
};

/** The desktop hero card is at least this tall (`lg:min-h-[780px]` on the heroes). */
const CARD_MIN_HEIGHT = 780;

/**
 * Largest screen width at which the whole fan — spread and hover scale included — stays
 * inside the hero card, horizontally and (given the screens' aspect ratio) vertically.
 */
const fitWidth = (geometry: Geometry, viewport: number, count: number, aspect: number) => {
  const { desktopWidth: max, step, fitSpread } = geometry;
  // Card inset (16px) plus a margin from its edge.
  const roomX = viewport - 72 - geometry.anchor(viewport);
  const reachX = HOVER_SCALE + ((count - 1) * step.x * fitSpread) / max;
  // Room below the fan's top, keeping a margin above the card's bottom edge.
  const roomY = CARD_MIN_HEIGHT - geometry.top - 48;
  const reachY = HOVER_SCALE * aspect + ((count - 1) * step.y * fitSpread) / max;
  return Math.round(Math.min(max, roomX / reachX, roomY / reachY));
};

/**
 * Browser windows other than the featured one rest at this size, so the featured window
 * — the home page until another is hovered — reads as the main picture.
 */
const RESTING_SCALE = 0.8;

/** Minimal browser chrome, so a landscape screenshot reads as the web app. */
const BrowserBar = ({ unit }: { unit: number }) => (
  <div
    className="flex items-center gap-2 border-b border-line bg-[#fafaf9] px-3"
    style={{ height: Math.max(20, 30 * unit) }}
    aria-hidden
  >
    <span className="flex gap-1">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="h-[7px] w-[7px] rounded-full bg-line-strong" />
      ))}
    </span>
    <span
      className="mx-auto rounded-full bg-white px-3 py-px font-mono text-ink-faint"
      style={{ fontSize: Math.max(7, 10 * unit) }}
      dir="ltr"
    >
      app.getserumo.com
    </span>
  </div>
);

/**
 * The hero's fanned stack of screenshots. On desktop it is absolutely positioned beside
 * the copy and bleeds off the card's edge; below `lg` it sits in flow underneath.
 * Must be rendered inside a `relative overflow-hidden` card.
 */
const ScreenFan = ({ shots, variant, badge }: Props) => {
  const { isRtl } = useLanguage();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  // The screen being looked at: hovered on desktop, tapped on touch screens.
  const [active, setActive] = useState<number | null>(null);
  // Once the visitor starts pointing at screens, motion should answer quickly.
  const [interacted, setInteracted] = useState(false);
  const [viewport, setViewport] = useState(() => (typeof window === "undefined" ? 1440 : window.innerWidth));

  useEffect(() => {
    const onResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), reducedMotion ? 0 : 250);
    return () => window.clearTimeout(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE));
        setProgress((prev) => (Math.abs(prev - next) > 0.01 || next === 0 || next === 1 ? next : prev));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  // Below `lg` a fan leaves the back screens as unreadable slivers, so phones get a deck
  // that deals through the screens as the page scrolls — or, with reduced motion, a
  // plain swipeable row.
  if (!desktop) {
    return reducedMotion ? (
      <ScreenCarousel shots={shots} variant={variant} badge={badge} />
    ) : (
      <ScreenDeck shots={shots} variant={variant} badge={badge} />
    );
  }

  const geometry = GEOMETRY[variant];
  const isBrowser = variant === "browser";
  // Height over width of the screenshots, so the fit knows how tall each screen is.
  const aspect = shots[0]?.width && shots[0]?.height ? shots[0].height / shots[0].width : 1716 / 876;
  const width = fitWidth(geometry, viewport, shots.length, aspect);
  const unit = width / geometry.desktopWidth;
  const spread = loaded ? 1 + (reducedMotion ? 0 : 0.3 * progress) : 0;
  const dir = isRtl ? -1 : 1;
  // Stagger the opening only; scroll-driven changes must track the scroll immediately.
  const staggered = loaded && progress === 0 && !reducedMotion;
  const isPhone = variant === "phone";

  const look = (i: number | null) => {
    setInteracted(true);
    setActive(i);
  };

  // The browser fan always features one window at full size: the hovered one, or the
  // first (the home page) while nothing is hovered. Phones are all shown at full size.
  const featured = isBrowser ? (active ?? 0) : active;

  const screens = shots.map((shot, i) => {
    const pose = geometry.fan(i, shots.length, spread);
    const isActive = active === i;
    const isFeatured = featured === i;
    const restingScale = isBrowser && !isFeatured ? ` scale(${RESTING_SCALE})` : "";
    const transform = isActive
      ? `translate(${dir * pose.x * unit}px, ${(pose.y - HOVER_LIFT) * unit}px) scale(${HOVER_SCALE})`
      : `translate(${dir * pose.x * unit}px, ${pose.y * unit}px) rotate(${dir * pose.rotate}deg)${restingScale}`;

    return (
      <figure
        key={shot.src}
        onMouseEnter={() => look(i)}
        onClick={() => look(isActive ? null : i)}
        className="absolute start-0 top-0 m-0 cursor-zoom-in overflow-hidden bg-white will-change-transform"
        style={{
          width,
          borderRadius: (isPhone ? 34 : 14) * unit,
          zIndex: isFeatured ? shots.length + 1 : geometry.zIndex(i, shots.length),
          transform,
          // A resting window shrinks toward its far bottom corner, so it stays peeking out
          // from behind the featured one instead of sliding under it.
          transformOrigin: isBrowser ? (isRtl ? "0% 100%" : "100% 100%") : undefined,
          // One shorthand, delay included: React warns when it is mixed with transitionDelay.
          transition: reducedMotion
            ? "none"
            : `transform ${interacted ? 450 : 1100}ms cubic-bezier(.2,.8,.2,1) ${
                staggered && !interacted ? i * 90 : 0
              }ms, box-shadow 450ms`,
          boxShadow: isActive
            ? "0 60px 110px -30px rgba(20,20,20,.45), 0 16px 36px -12px rgba(20,20,20,.22)"
            : "0 50px 90px -30px rgba(20,20,20,.35), 0 12px 30px -12px rgba(20,20,20,.18)",
        }}
      >
        {!isPhone && <BrowserBar unit={unit} />}
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          // Every screenshot keeps its own proportions: a shared frame would crop its edges.
          className="block h-auto w-full bg-mist"
          decoding="async"
          loading={i === 0 ? "eager" : "lazy"}
          draggable={false}
        />
      </figure>
    );
  });

  return (
    <>
      {/* Leaving is tracked on the group, not on each screen, so moving between two
          screens doesn't briefly fall back to the default one. */}
      <div
        className={`absolute z-[5] ${geometry.desktopTop}`}
        style={{ insetInlineStart: geometry.anchor(viewport) }}
        onMouseLeave={() => look(null)}
      >
        {screens}
      </div>
      {badge && <div className="absolute bottom-16 end-14 z-[15]">{badge}</div>}
    </>
  );
};

/**
 * Holds each card in front for most of its share of the scroll and swaps quickly in the
 * middle, so the deck spends little time half-way between two cards.
 */
const settle = (t: number) => {
  const whole = Math.floor(t);
  const k = Math.min(1, Math.max(0, (t - whole - 0.3) / 0.4));
  return whole + k * k * (3 - 2 * k);
};

/**
 * Mobile layout: the screenshots float in a stack, the next ones peeking out behind the
 * front card. Scrolling the page deals through them — the front card slides away to the
 * side and the next rises into its place — and scrolling back up restores them.
 */
const ScreenDeck = ({ shots, variant, badge }: Omit<Props, "variant"> & { variant: Variant }) => {
  const { isRtl } = useLanguage();
  const deckRef = useRef<HTMLDivElement>(null);
  // Which card is in front is the sum of three parts, in cards (0 = first, count - 1 =
  // last): how far the page has scrolled through the deck, the net effect of the
  // visitor's swipes and dot taps, and the swipe currently in progress.
  const [scrolled, setScrolled] = useState(0);
  const [offset, setOffset] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const gesture = useRef<{ x: number; y: number; id: number; horizontal: boolean | null } | null>(null);
  const isPhone = variant === "phone";
  const count = shots.length;
  const dir = isRtl ? -1 : 1;
  const clamp = (value: number) => Math.min(count - 1, Math.max(0, value));
  const position = clamp(scrolled + offset + drag);

  /** Brings card `index` to the front from wherever the deck is now. */
  const goTo = (index: number) => setOffset(clamp(index) - scrolled);

  // Swiping: the front card follows the finger, then settles on the next or previous card
  // once released past a quarter of the card's width. Vertical drags are left to the page.
  const onPointerDown = (event: React.PointerEvent) => {
    gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId, horizontal: null };
  };
  const onPointerMove = (event: React.PointerEvent) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    const dx = event.clientX - g.x;
    const dy = event.clientY - g.y;
    if (g.horizontal === null) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      g.horizontal = Math.abs(dx) > Math.abs(dy);
      if (g.horizontal) {
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        setDragging(true);
      }
    }
    if (!g.horizontal) return;
    const width = deckRef.current?.clientWidth || 1;
    // Dragging toward the start edge (left in LTR) brings the next card forward.
    setDrag((-dx * dir) / (width * 0.8));
  };
  const onPointerEnd = () => {
    const g = gesture.current;
    gesture.current = null;
    if (!g?.horizontal) return;
    const from = Math.round(clamp(scrolled + offset));
    const step = drag > 0.25 ? 1 : drag < -0.25 ? -1 : 0;
    setDragging(false);
    setDrag(0);
    goTo(from + step);
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const deck = deckRef.current;
      if (!deck) return;
      // Deal from when the deck's top reaches 55% of the screen until it reaches 5%.
      const start = window.innerHeight * 0.55;
      const end = window.innerHeight * 0.05;
      const top = deck.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
      setScrolled(settle(progress * (count - 1)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  const cardClass = cn(
    "m-0 overflow-hidden bg-white",
    isPhone ? "w-[60%] rounded-[26px]" : "w-[86%] rounded-[12px]",
  );

  const card = (shot: Shot, i: number) => (
    <>
      {!isPhone && <BrowserBar unit={0.5} />}
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        className="block h-auto w-full bg-mist"
        decoding="async"
        loading={i === 0 ? "eager" : "lazy"}
        draggable={false}
      />
    </>
  );

  /** Pose of card `i` given its distance `d` from the front (negative = already dealt). */
  const pose = (i: number) => {
    const d = i - position;
    if (d < 0) {
      // Dealt: slides fully out to the side, turning as it goes. It stays opaque until it
      // is clear of the next card, so two screenshots never blend into each other.
      const e = Math.min(1, -d);
      return {
        transform: `translate(${-dir * e * 120}%, ${e * 30}px) rotate(${-dir * e * 16}deg)`,
        opacity: e < 0.75 ? 1 : (1 - e) / 0.25,
        zIndex: count + 1,
      };
    }
    // In front or waiting behind: each step back sits higher, smaller and tilted, the
    // tilt alternating so the stack looks loosely piled.
    const depth = Math.min(d, 2.5);
    const tilt = (i % 2 === 0 ? -1 : 1) * depth * 3;
    return {
      transform: `translateY(${-depth * 18}px) scale(${1 - depth * 0.07}) rotate(${dir * tilt}deg)`,
      opacity: d > 2.5 ? 0 : 1,
      zIndex: count - Math.round(d),
    };
  };

  const current = Math.round(position);

  return (
    <div className="pb-8 pt-12">
      {/* `touch-action: pan-y` keeps vertical scrolling native while horizontal drags
          come to the swipe handlers. */}
      <div
        ref={deckRef}
        className="relative touch-pan-y select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        {/* An invisible copy of the first card gives the deck its height. */}
        <figure className={cn(cardClass, "invisible mx-auto")} aria-hidden>
          {card(shots[0], 0)}
        </figure>
        {shots.map((shot, i) => (
          <div
            key={shot.src}
            className="absolute inset-x-0 top-0 flex justify-center will-change-transform"
            style={{
              ...pose(i),
              // Track the finger exactly while dragging; glide when settling or scrolling.
              transition: dragging ? "none" : "transform 350ms cubic-bezier(.2,.8,.2,1), opacity 350ms",
            }}
          >
            <figure
              className={cn(
                cardClass,
                "shadow-[0_40px_70px_-30px_rgba(20,20,20,.4),0_12px_28px_-12px_rgba(20,20,20,.18)] motion-safe:animate-float",
              )}
              // Out of phase, so the cards drift independently.
              style={{ animationDelay: `${i * -1.9}s`, animationDuration: `${6 + (i % 3)}s` }}
            >
              {card(shot, i)}
            </figure>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        {shots.map((shot, i) => (
          // The padding gives each dot a finger-sized touch area around the small mark.
          <button
            key={shot.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={shot.alt}
            aria-current={i === current ? "true" : undefined}
            className="p-2"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-5 bg-ink" : "w-1.5 bg-line-strong",
              )}
            />
          </button>
        ))}
      </div>

      {badge && <div className="mt-6 flex justify-center px-5">{badge}</div>}
    </div>
  );
};

/**
 * Reduced-motion mobile layout: one screenshot at a time in a snapping, swipeable row, the next one
 * peeking in at the edge, with dots below and the badge under them rather than on top.
 */
const ScreenCarousel = ({ shots, variant, badge }: Omit<Props, "variant"> & { variant: Variant }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isPhone = variant === "phone";

  // The current slide is whichever sits closest to the middle of the row.
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const box = track.getBoundingClientRect();
    const middle = box.left + box.width / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const r = child.getBoundingClientRect();
      const distance = Math.abs(r.left + r.width / 2 - middle);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setCurrent(nearest);
  };

  const goTo = (i: number) =>
    trackRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

  return (
    <div className="pb-8">
      {/* Bottom padding leaves room for the shadows, which the scroll container clips. */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-12 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot, i) => (
          <figure
            key={shot.src}
            className={cn(
              "m-0 shrink-0 snap-center overflow-hidden bg-white shadow-[0_30px_60px_-30px_rgba(20,20,20,.35),0_10px_24px_-12px_rgba(20,20,20,.15)]",
              isPhone ? "w-[62%] rounded-[26px]" : "w-[88%] rounded-[12px]",
            )}
          >
            {!isPhone && <BrowserBar unit={0.5} />}
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              className="block h-auto w-full bg-mist"
              decoding="async"
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </figure>
        ))}
      </div>

      <div className="-mt-8 flex justify-center">
        {shots.map((shot, i) => (
          // The padding gives each dot a finger-sized touch area around the small mark.
          <button
            key={shot.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={shot.alt}
            aria-current={i === current ? "true" : undefined}
            className="p-2"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-5 bg-ink" : "w-1.5 bg-line-strong",
              )}
            />
          </button>
        ))}
      </div>

      {badge && <div className="mt-6 flex justify-center px-5">{badge}</div>}
    </div>
  );
};

export default ScreenFan;
