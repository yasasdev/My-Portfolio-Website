import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </h4>
      <h2
        className="text-center text-4xl font-Ovo"
      >
        My Latest Work
      </h2>

      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my portfolio! Explore my latest web development projects
        showcasing my skills in creating dynamic, user-friendly, and visually
        appealing applications.
      </p>

      <div className="my-10 space-y-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-6 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 relative group cursor-pointer">
              <div
                className="aspect-video bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden shadow-lg
                transform transition-transform"
                style={{ backgroundImage: `url(${project.bgImage.src})` }}
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-semibold font-Ovo">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black
                  px-6 py-3 rounded-full hover:bg-lime-300 hover:text-black transition-all duration-300
                  shadow-md hover:shadow-lg"
                >
                  View Project
                  <Image src={assets.send_icon} alt="Send Icon" className="w-4 invert dark:invert-0" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;