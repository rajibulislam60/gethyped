import React from "react";
import Container from "./Container";
import { ArrowRight, ArrowDown } from "lucide-react";
import HeroImage from "../assets/anniek.webp";
import HoverCard from "./HoverCard";

const Hero = () => {
  return (
    <section className="bg-[#faf4ec] py-12 md:py-20 px-4 md:px-0">
      <Container>
        <div className="max-w-[1100px]">
          <h1 className="text-[42px] sm:text-[54px] md:text-[72px] font-bold leading-[1.1] tracking-tight text-black">
            Get Hyped. Get <br className="hidden sm:block" /> Noticed. Get
            Results.
          </h1>

          <p className="mt-6 text-[16px] md:text-[18px] font-semibold max-w-[250px]">
            Klaar met gokken op content die niets oplevert?
          </p>
          <div className="w-full">
            <HoverCard />
          </div>

          <div className="mt-8 md:mt-10">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-semibold leading-[1.3] text-black max-w-[800px]">
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en
              energiek.
            </h2>
          </div>
        </div>

        <div className="mt-12 md:mt-20">
          <section>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
              <div className="w-full sm:w-[320px] lg:w-[260px] h-[350px] lg:h-[320px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={HeroImage}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 max-w-[650px]">
                <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold leading-[1.5] text-black">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken
                  het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                  meer content zonder strategie. Nooit meer content zonder
                  resultaat.
                </h2>

                <div className="mt-6 md:mt-8">
                  <button className="hidden md:flex items-center gap-3 text-[14px] font-semibold rounded-[12px] px-4 py-2 border transition-all duration-300 hover:-rotate-6 scale-95">
                    <span className="text-[14px] font-medium">
                      Leer ons kennen
                    </span>

                    <span className="bg-black text-white p-2 rounded-md group-hover:bg-white group-hover:text-black transition">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </div>

              <div className="hidden lg:block self-end">
                <div className="border border-black rounded-xl p-3 animate-bounce">
                  <ArrowDown size={18} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
