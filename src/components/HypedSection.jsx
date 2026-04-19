import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Van nul naar vol, binnen 3 weken",
    client: "Bullit",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
    color: "#FF4D12",
  },
  {
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600",
    color: "#0085FF",
  },
  {
    title: "Content die écht smaakt (en raakt)",
    client: "Loco",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    color: "#28C084",
  },
];

const HypedSection = () => {
  return (
    <section className="bg-[#FAF4EC] px-6 md:px-20 py-20 font-sans">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-10 lg:mb-15">
          <h1 className="text-[70px] md:text-[120px] font-black leading-[0.9] tracking-tight mb-8">
            dat scoort.
          </h1>

          <div className="max-w-md">
            <p className="text-[20px] font-bold leading-snug mb-8">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>

            <button className="group flex items-center gap-3 border-2 border-black px-5 py-2.5 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Bekijk al ons werk
              <span className="p-1.5 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition">
                <ArrowUpRight size={16} strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {/* Card 1 */}
          <div
            className=" relative rounded-[28px] overflow-hidden border-[4px] shadow-md hover:scale-[1.02] transition"
            style={{ borderColor: projects[0].color }}
          >
            <img
              src={projects[0].image}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 w-full">
              <div
                className="h-16"
                style={{
                  background: projects[0].color,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 70%)",
                }}
              />

              <div
                className="px-6 pb-7 pt-2 text-white relative"
                style={{ background: projects[0].color }}
              >
                <div className="absolute -top-10 right-5 bg-white text-black p-2 rounded-full shadow hover:rotate-45 transition">
                  <ArrowUpRight size={18} strokeWidth={3} />
                </div>

                <h3 className="text-[22px] font-extrabold leading-tight mb-5 pr-8">
                  {projects[0].title}
                </h3>

                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded">
                  {projects[0].client}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="md:-translate-y-20 relative rounded-[28px] overflow-hidden border-[4px] shadow-md hover:scale-[1.02] transition"
            style={{ borderColor: projects[1].color }}
          >
            <img
              src={projects[1].image}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 w-full">
              <div
                className="h-16"
                style={{
                  background: projects[1].color,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 70%)",
                }}
              />

              <div
                className="px-6 pb-7 pt-2 text-white relative"
                style={{ background: projects[1].color }}
              >
                <div className="absolute -top-10 right-5 bg-white text-black p-2 rounded-full shadow hover:rotate-45 transition">
                  <ArrowUpRight size={18} strokeWidth={3} />
                </div>

                <h3 className="text-[22px] font-extrabold leading-tight mb-5 pr-8">
                  {projects[1].title}
                </h3>

                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded">
                  {projects[1].client}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="md:-translate-y-40 relative rounded-[28px] overflow-hidden border-[4px] shadow-md hover:scale-[1.02] transition"
            style={{ borderColor: projects[2].color }}
          >
            <img
              src={projects[2].image}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-0 w-full">
              <div
                className="h-16"
                style={{
                  background: projects[2].color,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 70%)",
                }}
              />

              <div
                className="px-6 pb-7 pt-2 text-white relative"
                style={{ background: projects[2].color }}
              >
                <div className="absolute -top-10 right-5 bg-white text-black p-2 rounded-full shadow hover:rotate-45 transition">
                  <ArrowUpRight size={18} strokeWidth={3} />
                </div>

                <h3 className="text-[22px] font-extrabold leading-tight mb-5 pr-8">
                  {projects[2].title}
                </h3>

                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded">
                  {projects[2].client}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HypedSection;
