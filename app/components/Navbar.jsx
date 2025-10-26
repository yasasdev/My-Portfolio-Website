import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenu = useRef();

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div id="top">
      <nav
        className={`w-full fixed top-0 left-0 px-6 lg:px-12 xl:px-20 py-4 z-50 
          bg-white dark:bg-[#0a0a0a] shadow-sm dark:shadow-white/5
          transition-all duration-500 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="relative z-10 transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={isDarkMode ? assets.yasas_logo_dark : assets.yasas_logo}
              alt="Logo"
              className="w-32 lg:w-36 cursor-pointer"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="font-Ovo px-4 lg:px-5 py-2.5 rounded-full text-sm lg:text-base
                    text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white
                    transition-all duration-300 relative group"
                  href={link.href}
                >
                  {link.name}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-black dark:bg-white
                      transition-all duration-300 w-0 group-hover:w-6"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 
                hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300
                transform hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="theme toggle"
                className="w-5 h-5"
              />
            </button>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2.5 px-6 py-2.5 
                border-2 border-black dark:border-white text-black dark:text-white
                rounded-full font-Ovo text-sm font-medium
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Let's Talk
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="arrow"
                className="w-3.5 h-3.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-300"
              onClick={openMenu}
              aria-label="Open menu"
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
          ${sideMenu.current?.style.transform === "translateX(-16rem)" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <ul
        ref={sideMenu}
        className="flex md:hidden flex-col gap-2 py-20 px-8 fixed -right-64 top-0 bottom-0 
          w-64 z-50 h-screen bg-white dark:bg-[#0a0a0a] 
          shadow-2xl transition-transform duration-500 ease-in-out"
      >
        {/* Close Button */}
        <button
          className="absolute right-6 top-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
            transition-colors duration-300"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5 h-5"
          />
        </button>

        {/* Mobile Navigation Links */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              className="font-Ovo block px-4 py-3 rounded-lg text-base
                text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800
                hover:text-black dark:hover:text-white transition-all duration-300"
              onClick={closeMenu}
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        ))}

        {/* Mobile CTA */}
        <li className="mt-4">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 px-6 py-3 
              border-2 border-black dark:border-white text-black dark:text-white
              rounded-lg font-Ovo text-base font-medium
              hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
              transition-all duration-300"
          >
            Let's Talk
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3.5 h-3.5"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;