import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDown = () => ring.style.transform += " scale(0.8)";
    const onUp = () => {};

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    opacity: 0,
    willChange: "transform",
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
          transition: "border-color 0.2s",
        }}
      />
    </>
  );
}
