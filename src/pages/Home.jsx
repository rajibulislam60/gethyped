import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import ScrollAnimation from "../components/ScrollAnimation";
import HypedSection from "./../components/HypedSection";
import Footer from "../components/Footer";
import AdArea from "../components/AdArea";

const Home = () => {
  return (
    <div className="bg-[#faf4ec]">
      <Navbar className="sticky" />
      <Hero />
      <ScrollAnimation />
      <HypedSection />
      <AdArea />
      <Footer />
    </div>
  );
};

export default Home;
