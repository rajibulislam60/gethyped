import React, { useState } from "react";
import LogoImage from "../assets/logo.svg";
import Container from "./Container";
import { BsFire } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = ["Expertises", "Work", "About", "Contact"];

const NavItem = ({ label }) => {
  return (
    <li className="relative group overflow-hidden cursor-pointer text-[12px] font-semibold rounded-[8px] px-4 py-2">
      <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"></div>

      <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>

      <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
        {label}
      </span>
    </li>
  );
};

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full top-0 z-50 ${className}`}>
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <img src={LogoImage} alt="Logo" className="w-28" />

          {/* Desktop Menu */}
          <div className="hidden md:block bg-white p-2 rounded-[12px]">
            <ul className="flex gap-1">
              {menuItems.map((item, i) => (
                <NavItem key={i} label={item} />
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Button (hidden on small) */}
            <button className="hidden md:flex items-center gap-3 text-[14px] font-semibold rounded-[12px] px-4 py-2 bg-[#fcb8fa] transition-all duration-300 hover:-rotate-6 scale-95">
              Get Results
              <span className="bg-white rounded-[8px] p-2">
                <BsFire className="text-[16px] text-[#fa5424]" />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden 
          transition-all duration-500 overflow-hidden
          ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <Container>
          <ul className="flex flex-col gap-3 bg-white p-4 rounded-[12px] shadow-md">
            {menuItems.map((item, i) => (
              <li key={i} className="text-sm font-semibold">
                {item}
              </li>
            ))}

            {/* Mobile Button */}
            <button className="flex items-center justify-center gap-2 mt-2 text-sm font-semibold rounded-[10px] px-4 py-2 bg-[#fcb8fa]">
              Get Results
              <BsFire className="text-[16px] text-[#fa5424]" />
            </button>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
