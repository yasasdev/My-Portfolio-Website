"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project, index }) => {
  const imageUrl =
    typeof project.bgImage === "string" ? project.bgImage : project.bgImage.src;

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 items-center ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2 relative group cursor-pointer">
        <div
          className="aspect-video bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden shadow-lg
          transform transition-transform"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Live badge overlay - only for production/live projects */}
        {project.status === "live" && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-white/90 dark:bg-black/70 backdrop-blur-sm shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-black dark:text-white">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2 space-y-3">
        <h3 className="text-3xl font-semibold font-Ovo">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack chips - only if provided */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-xs font-medium
                bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button
                className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black
                px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300
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
          ) : (
            <span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
              bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 cursor-default"
            >
              Private System
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
