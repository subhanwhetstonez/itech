"use client";
import React, { useState } from "react";
import Logocomp from "./logo";

const Hamnav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-lg relative z-30">
      <div className="grid grid-flow-col grid-cols-4 p-4 items-center">
        {/* Logo component */}
        <div className="w-fit relative">
          <Logocomp />
        </div>
        {/* Login/Register component */}
        <div className="flex w-full m-auto items-center ml-12 gap-2 relative justify-center col-span-2">
          <div className="">
            <a href="/login">
              <img src="./profile.png" width={40} />
            </a>
          </div>
          <div className="w-4/5">
            <a href="/register">
              <button className="border-[1px] p-2 rounded-full border-black text-xs w-full">
                Join ITech Hub ➔
              </button>
            </a>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="flex items-center w-fit col-start-4 justify-self-end">
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <div className="space-y-2 place-items-center grid ">
              <span className="block hover:w-6 w-8 h-[0.3rem] bg-gray-800"></span>
              <span className="block hover:w-8 w-6 h-[0.2rem] bg-gray-800"></span>
              <span className="block hover:w-6 w-8 h-[0.3rem] bg-gray-800"></span>
            </div>
          </button>

          {/* Menu Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-20 right-0 grid bg-white shadow-md w-full rounded-lg p-6 text-center place-content-center space-y-4 md:block md:static md:bg-transparent md:shadow-none md:p-0 md:space-y-0 md:flex`}
          >
            <a
              href="/"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Home
            </a>
            <a
              href="/pages"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Pages
            </a>
            <a
              href="/portfolio"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamnav;
