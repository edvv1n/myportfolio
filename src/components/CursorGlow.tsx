import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let frame = 0;
    let x = 0;
    let y = 0;
    const hide = () => {
      if (glow.current) glow.current.style.opacity = "0";
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === "touch") return hide();
      x = event.clientX;
      y = event.clientY;
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (!glow.current) return;
          glow.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          glow.current.style.opacity = "1";
        });
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, []);
  return (
    <div ref={glow} className="cursor-glow" aria-hidden="true">
      <span />
    </div>
  );
}
