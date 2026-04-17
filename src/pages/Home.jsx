import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";

const Home = () => {
  return (
    <div className="bg-[#faf4ec]">
      <Navbar className="sticky" />
      <Hero />
    </div>
  );
};

export default Home;
