import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="mt-20 w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      {/* Profile Image */}
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile image"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      {/* Greeting */}
      <h3 className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Yasas Lekamge{" "}
        <Image src={assets.hand_icon} alt="Hand image" className="w-8 h-8" />
      </h3>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-6xl lg:text-[40px] font-Ovo mb-6">
        Full Stack Developer based in Sri Lanka
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto font-Ovo text-gray-700 leading-relaxed">
        | NIBM | Undergraduate | BSc (Hons) Software Engineering | Full-stack developer | <br />
        | Intern Software Engineer @ Innova Global Lanka | Volunteer | <br /> Fail • Learn • Repeat 💻
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="Contact me arrow icon"
            className="w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
