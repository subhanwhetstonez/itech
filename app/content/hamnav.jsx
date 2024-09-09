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
      <div className="grid grid-flow-col grid-cols-2 p-8 items-center">
        {/* Logo component */}
        <Logocomp />

        {/* Hamburger Menu */}
        <div className="flex justify-end">
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
              href="#"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg font-bold text-gray-800 hover:text-purple-600 hover:border-b-2 hover:border-[#6953d3]"
            >
              Services
            </a>
            <a
              href="#"
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
