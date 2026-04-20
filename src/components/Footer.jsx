import React from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Container from "./Container";
import FooterLogo from "../assets/logo.svg";

const menuItems = ["Expertises", "Work", "About", "Contact"];

const NavItem = ({ label }) => {
  return (
    <li className="relative group overflow-hidden cursor-pointer bg-white text-[11px] md:text-[12px] font-semibold rounded-[8px] px-3 md:px-4 py-2">
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

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className="relative w-full pt-16 md:pt-20 overflow-hidden">
          {/* Top Section */}
          <div className="flex flex-col items-center justify-center pb-12 md:pb-20 px-4 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#1a1a1a] mb-6 md:mb-8 tracking-tight">
              Let's Get Hyped!
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="flex items-center justify-center gap-3 text-[13px] md:text-[14px] font-semibold rounded-[12px] px-4 py-2 border transition-all duration-300 hover:-rotate-3">
                Mail ons direct
                <span className="bg-black rounded-[8px] p-2">
                  <IoIosMail className="text-[16px] text-white" />
                </span>
              </button>

              <button className="flex items-center justify-center gap-3 text-[13px] md:text-[14px] font-semibold rounded-[12px] px-4 py-2 bg-[#fcb8fa] transition-all duration-300 hover:-rotate-3">
                Get Results
                <span className="bg-white rounded-[8px] p-2">
                  <BsFire className="text-[16px] text-[#fa5424]" />
                </span>
              </button>
            </div>
          </div>

          {/* Background Section */}
          <div
            className="relative bg-[#e6e2d3] py-10 md:py-16"
            style={{
              clipPath: "polygon(0 55%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="w-full mx-auto flex justify-between gap-10 md:gap-0 items-start md:items-end px-4 md:px-0">
              {/* Logo */}
              <img
                src={FooterLogo}
                alt="Footer Logo"
                className="w-[180px] md:w-[300px] mx-auto md:mx-0"
              />
              <div className="lg:pr-12">
                <div className="flex gap-12 items-center ">
                  {/* Middle Section */}
                  <div className="flex flex-col gap-8  items-center md:items-start">
                    {/* Desktop Menu */}
                    <div className="hidden md:block ">
                      <ul className="flex gap-1">
                        {menuItems.map((item, i) => (
                          <NavItem key={i} label={item} />
                        ))}
                      </ul>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                      <span className="font-bold text-sm">Follow us</span>

                      <div className="flex gap-3">
                        {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map(
                          (Icon, i) => (
                            <a
                              key={i}
                              href="#"
                              className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
                            >
                              <Icon size={18} />
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="text-sm space-y-6 text-center md:text-left">
                    <div>
                      <h4 className="font-bold mb-1">Contact</h4>
                      <p>info@gethyped.nl</p>
                      <p>+31 6 1533 7496</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-1">Adres</h4>
                      <p>Beltrumsestraat 6,</p>
                      <p>7141 AL Groenlo</p>
                    </div>
                  </div>
                </div>
                {/* Bottom Bar */}
                <div className="pt-4 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-widest opacity-60 text-center md:text-left">
                  <p>© 2025 Get Hyped</p>
                  <p>© Design by Dylan</p>
                  <p>Privacyvoorwaarden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute right-6 md:right-20 bottom-[30%] md:bottom-[40%] hidden lg:block">
            <div className="w-20 md:w-24 h-20 md:h-24 bg-[#f8c1ff] rounded-full flex items-center justify-center border-2 border-black rotate-12">
              <span className="font-black text-xl md:text-2xl">GH</span>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
