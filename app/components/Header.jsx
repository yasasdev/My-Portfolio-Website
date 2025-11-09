import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="mt-20 w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.yasas_profile_img}
          alt="Profile image"
          className="rounded-full w-32 h-32 object-cover -mt-9"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Yasas Lekamge{" "}
        <Image src={assets.hand_icon} alt="Hand image" className="w-8 h-8" />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[40px] font-Ovo mb-6"
      >
        Full Stack Developer based in Sri Lanka
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl mx-auto font-Ovo text-gray-600 dark:text-white leading-relaxed"
      >
        | NIBM | Undergraduate | BSc (Hons) Software Engineering | Full-stack
        developer | <br />
        | Intern Software Engineer @ Innova Global Lanka | Volunteer | <br />{" "}
        Fail • Learn • Repeat 💻
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border -mt-8 border-white rounded-full bg-black text-white 
          flex items-center gap-2 hover:bg-gray-800 transition dark:bg-transparent"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="Contact me arrow icon"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Yasas-Lekamge-CV-v4.1.pdf"
          download
          className="px-10 py-3 mt-1 sm:-mt-8 border rounded-full border-gray-500 flex 
             items-center gap-2 hover:bg-gray-100 transition bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
