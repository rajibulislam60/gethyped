import React from "react";
import Container from "./Container";

const cards = [
  {
    id: 1,
    title: "10M+",
    subtitle: "Organische views",
    desc: "Groei door slimme content",
    bg: "bg-blue-500",
    rotate: "-rotate-6",
  },
  {
    id: 2,
    image: "/card1.jpg",
    rotate: "rotate-3",
  },
  {
    id: 3,
    title: "30+",
    subtitle: "Merken geholpen",
    desc: "Van start-up tot multinational",
    bg: "bg-green-400",
    rotate: "-rotate-3",
  },
  {
    id: 4,
    image: "/card2.jpg",
    rotate: "rotate-6",
  },
];

const HoverCard = () => {
  return (
    <section className="bg-[#d9d2c7] py-20 overflow-hidden">
      <Container>
        <div className="flex justify-center items-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                group relative w-[260px] h-[360px] rounded-3xl overflow-hidden
                ${card.rotate}
                ${index !== 0 ? "-ml-28" : ""}
                transition-all duration-500 ease-in-out
                transform-gpu origin-center
                hover:rotate-0 hover:scale-110 hover:z-50 hover:-translate-y-4
                shadow-xl hover:shadow-2xl cursor-pointer
              `}
            >
              {/* Image Card */}
              {card.image ? (
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full ${card.bg} p-6 flex flex-col justify-between`}
                >
                  <h2 className="text-[40px] font-bold text-black">
                    {card.title}
                  </h2>

                  <div>
                    <p className="text-[16px] font-semibold underline">
                      {card.subtitle}
                    </p>
                    <p className="text-[13px] mt-1">{card.desc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HoverCard;
