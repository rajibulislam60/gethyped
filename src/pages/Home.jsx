import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import ScrollAnimation from "../components/ScrollAnimation";
import HypedSection from "./../components/HypedSection";

const Home = () => {
  return (
    <div className="bg-[#faf4ec]">
      <Navbar className="sticky" />
      <Hero />
      <ScrollAnimation />
      <HypedSection />
    </div>
  );
};

export default Home;
