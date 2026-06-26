import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-full px-[12%] min-h-screen flex items-center pt-24 pb-16">
      <div className="flex flex-col xl:flex-row items-center xl:items-center gap-12 xl:gap-20 w-full">

        {/* Profile Image — first on mobile, right on xl */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 xl:order-2"
        >
          <Image
            src={assets.yasas_profile_img}
            alt="Yasas Lekamge"
            width={280}
            height={280}
            className="w-44 h-44 xl:w-72 xl:h-72 object-cover rounded-xl"
          />
        </motion.div>

        {/* Text — below image on mobile, left on xl */}
        <div className="flex-1 xl:order-1 flex flex-col items-center xl:items-start text-center xl:text-left">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.1em] uppercase text-accent mb-8"
          >
            Fail · Learn · Repeat
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-6xl sm:text-7xl lg:text-[5.5rem] uppercase font-bold leading-[1.05] dark:text-white"
          >
            Yasas<br />
            Lekamge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mt-6"
          >
            Full-Stack Engineer · X4 DigitalLabs · NIBM
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-md text-gray-600 dark:text-white/70 leading-relaxed mt-6 mb-10"
          >
            I build web apps, management systems, and mobile products — from idea to
            deployment. Studying Software Engineering while shipping real software at work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center xl:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black text-sm
              border border-black dark:border-white
              hover:bg-accent hover:border-accent dark:hover:bg-accent dark:hover:text-black
              transition-all duration-300"
            >
              Get in touch
            </a>
            <a
              href="/Yasas-Lekamge-CV.pdf"
              download
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-sm
              hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
            >
              Resume
              <Image src={assets.download_icon} alt="Download" className="w-3.5" />
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Header;
