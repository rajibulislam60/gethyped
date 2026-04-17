import React from "react";

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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
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
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500",
    rotate: "rotate-6",
  },
];

const ResponsiveHoverCards = () => {
  return (
    <section className="bg-[#d9d2c7] py-20 lg:py-40 overflow-hidden flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center w-full px-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-xl
              transition-all duration-500 ease-in-out transform-gpu cursor-pointer
              
              /* RESPONSIVE VISIBILITY: 
                 Show 2 on 'sm', 3 on 'lg', 4 on 'xl' */
              ${index >= 2 ? "hidden sm:block" : "block"} 
              ${index >= 3 ? "lg:hidden xl:block" : ""}

              w-[160px] h-[240px]
              sm:w-[220px] sm:h-[320px]
              lg:w-[300px] lg:h-[400px] 

              ${card.rotate}
              ${index !== 0 ? "0" : ""}

              hover:!rotate-0 
              hover:z-50 
              hover:-translate-y-6 lg:hover:-translate-y-10 
              hover:scale-105
              hover:mx-6 sm:hover:mx-10 lg:hover:mx-14
            `}
          >
            {card.image ? (
              <img
                src={card.image}
                alt="card"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full ${card.bg} p-4 sm:p-6 lg:p-8 flex flex-col justify-between text-black`}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-none">
                  {card.title}
                </h2>
                <div>
                  <p className="text-[10px] sm:text-xs lg:text-lg font-bold underline underline-offset-4 uppercase">
                    {card.subtitle}
                  </p>
                  <p className="hidden sm:block text-[10px] lg:text-sm mt-2 font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveHoverCards;
