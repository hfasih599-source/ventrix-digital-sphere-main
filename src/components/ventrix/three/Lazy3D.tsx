import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { ClientOnly } from "@tanstack/react-router";

const VentrixCore = lazy(() =>
  import("./VentrixCore").then((m) => ({ default: m.VentrixCore })),
);
const AmbientShapesCanvas = lazy(() =>
  import("./AmbientShapes").then((m) => ({ default: m.AmbientShapes })),
);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Renders children only when the wrapper has been near the viewport at least once. */
function WhenVisible({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="absolute inset-0">
      {seen ? children : fallback}
    </div>
  );
}

function RingsFallback() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-[#7A0033] via-[#4A001C] to-black shadow-[0_40px_120px_-20px_rgba(212,0,97,0.6)]" />
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[6%] rounded-full border border-[#D40061]/30" />
    </div>
  );
}

export function VentrixCore3D() {
  const reduced = usePrefersReducedMotion();
  return (
    <ClientOnly fallback={<RingsFallback />}>
      {reduced ? (
        <RingsFallback />
      ) : (
        <Suspense fallback={<RingsFallback />}>
          <VentrixCore />
        </Suspense>
      )}
    </ClientOnly>
  );
}

export function Ambient3D({ side = "right" }: { side?: "left" | "right" }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 h-full w-[55%] max-w-[560px] opacity-60 ${
        side === "right" ? "right-0" : "left-0"
      }`}
    >
      <ClientOnly fallback={null}>
        <WhenVisible fallback={null}>
          <Suspense fallback={null}>
            <AmbientShapesCanvas side={side} />
          </Suspense>
        </WhenVisible>
      </ClientOnly>
    </div>
  );
}