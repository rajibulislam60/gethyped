import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import HoverCard from "../components/HoverCard";

const Home = () => {
  return (
    <div className="bg-[#faf4ec]">
      <Navbar className="sticky" />
      <Hero />
      <HoverCard />
    </div>
  );
};

export default Home;
