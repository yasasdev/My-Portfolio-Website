"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const features = [
  "Student Information & Admissions Management",
  "Academic Management - Classes, Exams, Results & Attendance",
  "Accounts & Finance - Billing, Expenses & Cash Flow",
  "Human Resource Management - Payroll, Leave & Recruitment",
  "Inventory & Stock Management with Multi-Branch Transfers",
  "Purchasing & Supplier Management",
  "Front Office Operations - Enquiries, Complaints & Call Logs",
  "Budget Management & Financial Reporting (PDF/Excel)",
  "Multi-Branch Operations with Data Separation",
  "Role-Based Access Control - 7 Distinct User Roles",
  "Internal Communication - Messaging & Announcements",
];

const techStack = [
  { name: "Next.js", color: "bg-black dark:bg-white dark:text-black text-white" },
  { name: "TypeScript", color: "bg-blue-600 text-white" },
  { name: "PostgreSQL", color: "bg-blue-800 text-white" },
  { name: "Prisma ORM", color: "bg-indigo-600 text-white" },
  { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
];

const LatestWork = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Badge */}
      <div className="text-center mb-6">
        <span
          className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase
          bg-gradient-to-r from-lime-400 to-emerald-500 text-black shadow-md"
        >
          Latest Work
        </span>
      </div>

      <h2 className="text-center text-4xl md:text-5xl font-Ovo font-semibold mb-3">
        School Management System
      </h2>
      <p className="text-center text-lg text-gray-500 dark:text-gray-400 font-Ovo mb-2">
        Vertex International School
      </p>

      {/* Status */}
      <div className="flex items-center justify-center gap-2 mt-3 mb-10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-sm font-medium text-green-600 dark:text-green-400">
          Successfully Delivered & Live
        </span>
      </div>

      {/* Two School Photos - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <Image
            src={assets.school_image_1}
            alt="Vertex International School"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            width={600}
            height={400}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <Image
            src={assets.school_image_2}
            alt="Vertex International School Campus"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            width={600}
            height={400}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* News-Style Content Card */}
      <div
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden
        bg-white dark:bg-gray-900/60
        border border-gray-200 dark:border-gray-800
        shadow-lg"
      >
        {/* Card Header */}
        <div className="px-6 md:px-10 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-Ovo text-base md:text-lg">
            I am proud to announce the successful completion and delivery of a
            comprehensive School Management System for{" "}
            <span className="font-semibold text-black dark:text-white">
              Vertex International School
            </span>{" "}
            — a full-scale platform built to digitize and streamline the entire
            school&apos;s operations.
          </p>
        </div>

        {/* Modules */}
        <div className="px-6 md:px-10 py-6">
          <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            System Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lime-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="px-6 md:px-10 py-5 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            Built With
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="px-6 md:px-10 py-6 bg-gray-50 dark:bg-gray-800/40 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">
            &ldquo;Delivering this project has deepened my commitment to building
            technology that solves real-world challenges in the education sector.
            It is truly rewarding to see this system actively powering the
            day-to-day operations of Vertex International School.&rdquo;
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        <span className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
          More Projects
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>
    </div>
  );
};

export default LatestWork;
