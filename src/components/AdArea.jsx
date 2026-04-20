import React from "react";
import { motion } from "framer-motion";

// Importing your local assets
import Image1 from "../images/1.svg";
import Image2 from "../images/2.svg";
import Image3 from "../images/3.svg";
import Image4 from "../images/4.svg";
import Image5 from "../images/5.svg";
import Image6 from "../images/6.svg";
import Image7 from "../images/7.svg";
import Image8 from "../images/8.svg";
import Image9 from "../images/9.svg";
import Image10 from "../images/10.svg";
import Image11 from "../images/11.svg";

const sliderImages = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
  { id: 4, image: Image4 },
  { id: 5, image: Image5 },
  { id: 6, image: Image6 },
  { id: 7, image: Image7 },
  { id: 8, image: Image8 },
  { id: 9, image: Image9 },
  { id: 10, image: Image10 },
  { id: 11, image: Image11 },
];

const AdArea = () => {
  // We duplicate the array to create a seamless infinite loop effect
  const duplicatedLogos = [...sliderImages, ...sliderImages];

  return (
    <section className="bg-[#F9F7F2] py-20 overflow-hidden">
      {/* Header Section */}
      <div className="px-6 md:px-16 mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
          These brands <br /> got hyped.
        </h2>
      </div>

      {/* Marquee Slider */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35, // Adjust this number to make it faster or slower
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((item, index) => (
            <div key={`${item.id}-${index}`} className="px-3">
              <div className="w-56 h-64 md:w-64 md:h-80 flex items-center justify-center border border-[#e0ddd5] rounded-[32px] bg-transparent p-8 hover:bg-white transition-colors duration-300">
                <img
                  src={item.image}
                  alt={`Brand Logo ${item.id}`}
                  className="max-w-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdArea;
