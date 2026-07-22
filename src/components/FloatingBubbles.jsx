import { useEffect, useRef, useState } from "react";
import "./FloatingBubbles.css";

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateBubbles(count) {
  const rand = seededRandom(42);
  return Array.from({ length: count }, (_, i) => {
    const r = () => rand();
    const size = r() * 6 + 2;
    return {
      id: i,
      size,
      left: r() * 100,
      top: r() * 100,
      duration: r() * 30 + 35,
      delay: r() * -30,
      opacity: r() * 0.4 + 0.2,
      drift: (r() - 0.5) * 80,
      blur: size > 6 ? r() * 2 : 0,
      // alterna entre fuchsia e violet, em vez de variar um único hue
      hue: r() > 0.5 ? "var(--bubble-fuchsia)" : "var(--bubble-violet)",
      x1: (r() - 0.5) * 50,
      y1: (r() - 0.5) * 50,
      x2: (r() - 0.5) * 50,
      y2: (r() - 0.5) * 50,
      x3: (r() - 0.5) * 50,
      y3: (r() - 0.5) * 50,
    };
  });
}

export function FloatingBubbles() {
  const [mounted, setMounted] = useState(false);
  const bubblesRef = useRef([]);
  const containerRef = useRef(null);

  if (bubblesRef.current.length === 0) {
    bubblesRef.current = generateBubbles(40);
  }

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      containerRef.current.style.setProperty("--parallax-x", `${x * 8}px`);
      containerRef.current.style.setProperty("--parallax-y", `${y * 8}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        transform: "translate(var(--parallax-x, 0), var(--parallax-y, 0))",
        transition: "transform 0.6s ease-out",
      }}
    >
      {mounted &&
        bubblesRef.current.map((bubble) => (
          <div
            key={bubble.id}
            className="floating-bubble absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              opacity: bubble.opacity,
              filter: bubble.blur ? `blur(${bubble.blur}px)` : undefined,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              background: bubble.hue,
              "--drift": `${bubble.drift}px`,
            }}
          />
        ))}
    </div>
  );
}

export default FloatingBubbles;
