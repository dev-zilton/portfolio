import { useEffect, useRef, useState } from "react";

// Só substitui o cursor nativo quando há rato e o utilizador não pediu menos animação.
const CURSOR_QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";

function useFinePointer() {
  const [enabled, setEnabled] = useState(() => window.matchMedia(CURSOR_QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(CURSOR_QUERY);
    const onChange = () => setEnabled(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

export function CustomCursor() {
  const enabled = useFinePointer();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!enabled || !dot || !ring) return;

    document.body.style.cursor = "none";

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;
    let visible = false;

    const show = () => {
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      show();
    };

    const onLeaveDoc = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        visible = false;
        dot.style.opacity = "0";
        ring.style.opacity = "0";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onLeaveDoc);
    animate();

    return () => {
      document.body.style.cursor = "";
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeaveDoc);
    };
  }, [enabled]);

  if (!enabled) return null;

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    opacity: 0,
    willChange: "transform",
    transition: "opacity 0.2s",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#2DD4BF",
          marginLeft: "-4px",
          marginTop: "-4px",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(45, 212, 191, 0.6)",
          marginLeft: "-18px",
          marginTop: "-18px",
        }}
      />
    </>
  );
}
