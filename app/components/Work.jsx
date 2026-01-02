"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(workData.length / projectsPerPage);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = workData.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page navigation
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-4xl font-Ovo">My Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore my latest web development projects
        showcasing my skills in creating dynamic, user-friendly, and visually
        appealing applications.
      </p>

      <div className="my-10 space-y-8">
        {currentProjects.map((project, index) => {
          const actualIndex = indexOfFirstProject + index;
          return (
            <div
              key={actualIndex}
              className={`flex flex-col md:flex-row gap-6 items-center ${
                actualIndex % 2 === 1 ? "md:flex-row-reverse" : ""
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
                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black
                      px-6 py-3 rounded-full hover:bg-lime-300 hover:text-black transition-all duration-300
                      shadow-md hover:shadow-lg"
                    >
                      View Project
                      <Image
                        src={assets.send_icon}
                        alt="Send Icon"
                        className="w-4 invert dark:invert-0"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-12">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-Ovo transition-all duration-300 border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500 dark:border-gray-600"
              : "bg-white text-black border-black hover:bg-black hover:text-white dark:bg-darkTheme dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          }`}
        >
          <ChevronLeft size={20} />
          
        </button>

        {/* Page Indicator */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-Ovo">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-Ovo transition-all duration-300 border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500 dark:border-gray-600"
              : "bg-white text-black border-black hover:bg-black hover:text-white dark:bg-darkTheme dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          }`}
        >
          
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Work;
