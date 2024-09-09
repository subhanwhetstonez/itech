import "next/babel";
import React from "react";
import Image from "next/image";

const secthree = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 bg-white items-center">
        <div className="lg:col-start-2 lg:col-span-2  col-span-1 ">
          <img src="section3.png" />
        </div>
        <div className="px-10 md:px-4 lg:col-start-4">
          <div className="flex flex-col text-xs gap-6 py-12  ">
            <p className=" bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
              Beautiful Themes
            </p>
            <p className=" text-4xl font-bold">
              Focus More With{" "}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                {" "}
                Dark Theme{" "}
              </span>{" "}
            </p>
            <p className="text-[#44444499] leading-8  text-sm">
              Apply Notero’s elegant themes to your taste. Dark themes work
              excellently for those who prefer distraction-free mode.
            </p>
            <div>
              <li className="text-[#44444499] hover:text-black">
                Filtering notes using matched keywords
              </li>
              <li className="text-[#44444499] hover:text-black">
                8 Beautiful themes for you select
              </li>
              <li className="text-[#44444499] hover:text-black">
                Save energy for your device
              </li>
              <li className="text-[#44444499] hover:text-black">
                Easy to switch between light and dark mode
              </li>
            </div>

            <div>
              <button className="bg-[#6953D3] py-2 px-4 rounded-full text-white text-sm">
                Discovery Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secthree;
