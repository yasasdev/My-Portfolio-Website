"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  // ✅ Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`w-full sticky top-0 left-0 z-50 shadow-md transition-all duration-300 
        ${isDarkMode ? "bg-darkTheme text-white" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-3 ml-10">
          <Image
            src={isDarkMode ? assets.yasas_logo_dark : assets.yasas_logo}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full cursor-pointer"
          />
        </div>

        {/* Center - Nav Links (Desktop) */}
        <ul
          className={`hidden md:flex items-center space-x-8 font-medium transition-all duration-300 ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative group text-base transition duration-300 cursor-pointer ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? "bg-white" : "bg-black"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Contact Button + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              width={24}
              height={24}
              className="cursor-pointer mr-3"
            />
          </button>
          <a
            href="#contactme"
            className={`px-5 py-2 rounded-full transition duration-300 border ${
              isDarkMode
                ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
                : "bg-black text-white border-black hover:bg-gray-800"
            }`}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition duration-300 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden shadow-lg border-t transition-all duration-300 fixed inset-0 z-40 overflow-y-auto ${
            isDarkMode
              ? "bg-darkTheme text-white border-white/20"
              : "bg-white text-gray-800 border-gray-200"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 mt-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-lg transition duration-300 ${
                    isDarkMode ? "hover:text-gray-300" : "hover:text-black"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex flex-col items-center gap-4 mt-4">
              <button onClick={() => setIsDarkMode((prev) => !prev)}>
                <Image
                  src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                  alt="theme toggle"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </button>
              <a
                href="#contactme"
                className={`px-5 py-2 rounded-full transition duration-300 border ${
                  isDarkMode
                    ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
                    : "bg-black text-white border-black hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;