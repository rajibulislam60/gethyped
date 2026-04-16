import React from "react";
import LogoImage from "../assets/logo.svg";

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

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Logo */}
      <img src={LogoImage} alt="Logo" className="w-28" />

      {/* Menu */}
      <ul className="flex gap-4">
        {menuItems.map((item, i) => (
          <NavItem key={i} label={item} />
        ))}
      </ul>

      <button
        className="text-[12px] font-semibold rounded-[8px] px-4 py-2 bg-black text-white border-2 border-black transition-all duration-300 ease-in-out hover:-rotate-6 scale-95
        "
      >
        Get Results
      </button>
    </div>
  );
};

export default Navbar;
