import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top">
          <Image
            src={isDarkMode ? assets.yasas_logo_dark : assets.yasas_logo}
            alt="Logo"
            className="w-28 mx-auto mb-2"
          />
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="w-5 mx-auto mt-1"
          />
          yasaslekamge@gmail.com
        </div>
      </div>
      <div
        className="text-center sm:flex items-center justify-between 
        border-t border-gray-400 mx-[10%] mt-6 py-2"
      >
        <p className="text-gray-500">
          © {year} Yasas Lekamge. All rights reserved.
        </p>
        <ul className="flex items-center text-gray-500 gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.github.com/yasasdev">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/yasasdev">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
