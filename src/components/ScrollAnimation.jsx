import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const cards = [
  {
    id: "01",
    tag: "Expertise",
    title: "Strategy",
    description:
      "Inzichten die impact maken. We duiken in de cijfers om te snappen wat écht werkt.",
    color: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    id: "02",
    tag: "Expertise",
    title: "Branding",
    description:
      "Wij bouwen merken die blijven plakken. Van logo tot complete visuele identiteit.",
    color: "bg-zinc-900",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800",
  },
  {
    id: "03",
    tag: "Expertise",
    title: "Content",
    description:
      "Verhalen die converteren. Wij creëren content waar jouw doelgroep niet omheen kan.",
    color: "bg-indigo-700",
    image:
      "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=800",
  },
  {
    id: "04",
    tag: "Expertise",
    title: "Data",
    description:
      "Inzichten die impact maken. We duiken in de cijfers om te snappen wat écht werkt en sturen jouw content scherp bij.",
    color: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800",
  },
];

export default function ScrollAnimation() {
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
    <div className=" py-20">
      <Container>
        <div ref={containerRef} className="h-[500vh] lg:h-[800vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-[500px] lg:h-[650px] perspective-[1200px]">
              {cards.map((card, i) => {
                const offset = i - activeIndex;

                let translateY = 0;
                let scale = 1;
                let opacity = 1;

                if (offset > 0) {
                  translateY = offset * 110;
                } else {
                  scale = 1 - Math.abs(offset) * 0.08;
                  translateY = offset * 15;
                  opacity = 1 - Math.abs(offset) * 0.4;
                }

                return (
                  <div
                    key={card.id}
                    className={`absolute inset-0 rounded-[40px] p-8 lg:p-16 text-white flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 ${card.color}`}
                    style={{
                      transform: `translateY(${translateY}%) scale(${scale})`,
                      opacity: opacity < 0 ? 0 : opacity,
                      zIndex: i,
                      transition:
                        "transform 0.1s ease-out, opacity 0.1s ease-out",
                      willChange: "transform",
                    }}
                  >
                    <div className="absolute top-0 right-10 text-[5rem] lg:text-[8rem] font-bold opacity-10 pointer-events-none select-none leading-none">
                      {card.id}
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <span className="bg-white text-black px-2 lg:px-3 py-1 rounded-md text-xs lg:text-sm font-bold  tracking-wider inline-block mb-6 lg:mb-10">
                          {card.tag}
                        </span>
                        <h2 className="text-3xl lg:text-7xl font-bold tracking-tighter leading-[0.85] mb-4">
                          {card.title}
                        </h2>
                      </div>

                      {/* Bottom content */}
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="max-w-md">
                          <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                            Inzichten die impact maken.
                          </h3>
                          <p className="text-sm lg:text-[16px] opacity-80  mb-6 lg:mb-8">
                            {card.description}
                          </p>

                          <button className="hidden md:flex items-center gap-3 text-[14px] font-semibold rounded-[12px] px-4 py-2 bg-white text-black transition-all duration-300 hover:-rotate-6 scale-95">
                            Meer over {card.title.toLowerCase()}
                            <div className="bg-black text-white rounded-[8px] p-1 group-hover:translate-x-1 transition-transform">
                              <ArrowRight size={18} strokeWidth={3} />
                            </div>
                          </button>
                        </div>

                        {/* Image section */}
                        <div className="relative w-48 h-56 lg:w-80 lg:h-[400px] flex-shrink-0 self-center lg:self-auto">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover rounded-[32px] border-[8px] lg:border-[12px] border-white/20 shadow-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
