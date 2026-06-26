import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      <p className="text-center mb-3 text-xs uppercase tracking-[0.3em] text-accent mt-8">Introduction</p>
      <h2 className="text-center text-4xl font-Ovo dark:text-white">About Me</h2>
      <div className="flex w-full flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-16 my-10">

        {/* Profile Image */}
        <div className="w-56 sm:w-64 xl:w-72 flex-shrink-0">
          <Image
            src={assets.yasas_user_profile_img}
            alt="User Image"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="w-full">
          <p className="mb-8 font-Ovo text-gray-700 dark:text-white/80 leading-relaxed text-center xl:text-left">
            I am an undergraduate software engineer currently working at X4 DigitalLabs as an Associate Software Engineer.
            I have experience in developing web-based management systems and public-facing websites, as well as mobile applications,
            with a strong focus on functionality, performance, and attention to detail. I am eager to apply my technical skills
            and contribute to innovative and impactful technology projects.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-4">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 mt-2"
                />
                <h3 className="mt-3 mb-2 font-semibold text-gray-700 dark:text-white text-sm">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mt-8 mb-4 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex flex-wrap items-center gap-3">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-11 h-11
                border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
