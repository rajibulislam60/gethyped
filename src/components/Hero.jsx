import React from "react";
import Container from "./Container";
import { ArrowRight, ArrowDown } from "lucide-react";
import HeroImage from "../assets/anniek.webp";

const Hero = () => {
  return (
    <section className="bg-[#faf4ec] py-20">
      <Container>
        <div className="max-w-[1100px]">
          {/* Main Heading */}
          <h1 className="text-[68px] md:text-[72px] font-bold leading-[1.1] tracking-tight text-black">
            Get Hyped. Get <br /> Noticed. Get Results.
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-[18px] font-semibold max-w-[250px]">
            Klaar met gokken op content die niets oplevert?
          </p>

          {/* Description */}
          <div className="mt-10">
            <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.3] text-black max-w-[800px]">
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en
              energiek.
            </h2>
          </div>
        </div>
        <div>
          <section className="py-20">
            <div className="flex items-center justify-between gap-16">
              {/* Left Image */}
              <div className="w-[260px] h-[320px] rounded-2xl overflow-hidden">
                <img
                  src={HeroImage}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 max-w-[650px]">
                <h2 className="text-[24px] md:text-[26px] font-semibold leading-[1.5] text-black">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken
                  het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                  meer content zonder strategie. Nooit meer content zonder
                  resultaat.
                </h2>

                {/* Button */}
                <div className="mt-8">
                  <button className="flex items-center gap-3 border border-black rounded-xl px-5 py-3 group">
                    <span className="text-[14px] font-medium">
                      Leer ons kennen
                    </span>

                    <span className="bg-black text-white p-2 rounded-md group-hover:translate-x-1 transition">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Bottom Arrow */}
              <div className="self-end">
                <div className="border border-black rounded-xl p-3">
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
