"use client";
import { productionWorkData } from "@/assets/assets";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProductionWork = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <p className="text-center mb-3 text-xs uppercase tracking-[0.3em] text-accent">
        Production Work
      </p>
      <h2 className="text-center text-4xl font-Ovo dark:text-white">
        Live &amp; Hosted Projects
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Real client work, delivered and running in production — as opposed to
        the demo and practice projects below.
      </p>

      <div className="my-10 space-y-8">
        {productionWorkData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductionWork;
