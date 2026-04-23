import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ae14b35c-c104-4eee-aa75-3cf8209c6323");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 
    bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Have a question or feedback? Just fill out the form below - I'd love to
        hear from you!
      </motion.p>

      {/* WhatsApp Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 
        dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 
        dark:border-green-800/50 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.01 1.01 4.33L2 22l6.34-1.67C10.26 21.48 11.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.85 0-1.65-.2-2.37-.54l-.17-.09-1.76.46.47-1.71-.1-.18C4.5 15.6 4 13.86 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-12.55c-.24-.12-1.43-.71-1.65-.79-.22-.09-.38-.13-.54.13-.16.26-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.19.86 2.33 1 2.49.14.16 1.99 3.05 4.82 4.28.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.68-.69 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.23-.19-.47-.31z" />
          </svg>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 font-Ovo">
            Need a quick reply?
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 font-Ovo">
          Chat with me on WhatsApp for a faster response!
        </p>
        <a
          href="https://wa.me/+94701941387?text=Hi%2C%20I%E2%80%99d%20like%20to%20connect%20and%20discuss%20how%20I%20can%20assist%20you.%20Please%20let%20me%20know%20if%20you%E2%80%99re%20available."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 
          text-white rounded-full transition-all duration-300 font-medium font-Ovo
          dark:bg-green-500 dark:hover:bg-green-600"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.01 1.01 4.33L2 22l6.34-1.67C10.26 21.48 11.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.85 0-1.65-.2-2.37-.54l-.17-.09-1.76.46.47-1.71-.1-.18C4.5 15.6 4 13.86 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-12.55c-.24-.12-1.43-.71-1.65-.79-.22-.09-.38-.13-.54.13-.16.26-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.19.86 2.33 1 2.49.14.16 1.99 3.05 4.82 4.28.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.68-.69 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.23-.19-.47-.31z" />
          </svg>
          Chat on WhatsApp
        </a>
      </motion.div>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
            dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
            dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          name="message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 
          dark:bg-darkHover/30 dark:border-white/90"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
          text-white rounded-full mx-auto hover:bg-black duration-500 
          dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4"
          />
        </button>
        <p className="mt-4 text-center text-gray-500 font-Ovo">{result}</p>
      </form>
    </motion.div>
  );
};

export default Contact;
