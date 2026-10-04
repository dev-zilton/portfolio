import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./reducedMotion";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  // Com movimento reduzido o conteúdo aparece logo, sem esperar pelo scroll.
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}
