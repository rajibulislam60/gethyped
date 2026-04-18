import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import ScrollAnimation from "../components/ScrollAnimation";

const Home = () => {
  return (
    <div className="bg-[#faf4ec]">
      <Navbar className="sticky" />
      <Hero />
      <ScrollAnimation />
    </div>
  );
};

export default Home;
