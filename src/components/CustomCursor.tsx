import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

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
      if (!e.relatedTarget && !(e as any).toElement) {
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
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeaveDoc);
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
