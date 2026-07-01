"use client";
import { workData } from "@/assets/assets";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

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
      <p className="text-center mb-3 text-xs uppercase tracking-[0.3em] text-accent">My Portfolio</p>
      <h2 className="text-center text-4xl font-Ovo dark:text-white">My Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore my latest web development projects
        showcasing my skills in creating dynamic, user-friendly, and visually
        appealing applications.
      </p>

      <div className="my-10 space-y-8">
        {currentProjects.map((project, index) => {
          const actualIndex = indexOfFirstProject + index;
          return (
            <ProjectCard key={actualIndex} project={project} index={actualIndex} />
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
