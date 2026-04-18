import { Container } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cards = [
  { id: 1, color: "bg-blue-500" },
  { id: 2, color: "bg-purple-500" },
  { id: 3, color: "bg-pink-500" },
  { id: 4, color: "bg-orange-500" },
  { id: 5, color: "bg-teal-500" },
  { id: 6, color: "bg-red-500" },
];

export default function GetHypedScroll() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      const scrollProgress = Math.min(
        Math.max(currentScroll / totalScrollable, 0),
        1,
      );

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = progress * (cards.length - 1);

  return (
    <div>
      <div ref={containerRef} className="h-[700vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-[550px] perspective-[1000px]">
            {cards.map((card, i) => {
              const offset = i - activeIndex;

              let translateY = 0;
              let scale = 1;
              let opacity = 1;

              if (offset > 0) {
                translateY = offset * 100;
              } else {
                scale = 1 - Math.abs(offset) * 0.1;
                translateY = offset * 20;
                opacity = 1 - Math.abs(offset) * 0.4;
              }

              return (
                <div
                  key={card.id}
                  className={`absolute inset-0 flex items-center justify-center text-white text-3xl font-bold rounded-3xl shadow-2xl ${card.color}`}
                  style={{
                    transform: `translateY(${translateY}%) scale(${scale})`,
                    opacity: opacity < 0 ? 0 : opacity,
                    zIndex: cards.length + i,
                    transition:
                      "transform 0.1s ease-out, opacity 0.1s ease-out",
                  }}
                >
                  Card {card.id}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
