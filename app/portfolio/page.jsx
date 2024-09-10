import React from "react";
import Image from "next/image";
import Logocomp from "../content/logo";

const page = () => {
  return (
    <div className="relative z-10 bg-white p-5 md:p-10 lg:px-48">
      <div className="column-1 md:columns-3 gap-5 md:gap-8 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child):mt-8]">
        <img src="gal1.jpg" alt="" />
        <img src="gal2.jpg" alt="" />
        <img src="gal6.jpg" alt="" />
        <img src="gal3.jpg" alt="" />
        <div className="bg-[#6953D3] h-[80vh] mt-4 grid place-content-center">
          <img src="itechwhite.png" alt="" />
        </div>
        <img src="gal5.jpg" alt="" />
        <img src="gal8.jpg" alt="" />
        <img src="gal7.jpg" alt="" />
        <img src="gal4.jpg" alt="" />
      </div>
    </div>
  );
};

export default page;
