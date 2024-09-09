import React from "react";
import Image from "next/image";
import Logocomp from "../content/logo";

const page = () => {
  return (
    <div className="relative z-10">
      <div className="grid grid-cols-3 grid-rows-4 object-contain">
        <img src="gal1.jpg" alt="" className="col-start-1 row-start-1" />
        <img src="gal2.jpg" alt="" className="col-start-2 row-start-1" />
        <img src="gal8.jpg" alt="" className="col-start-3 row-span-2" />
        <img src="gal4.jpg" alt="" className="col-start-1 row-start-2" />
        <div className="bg-[#6953D3] grid col-start-2 row-start-2 row-span-2">
          <img src="itechwhite.png" alt="" className="place-self-center" />
        </div>
        <img src="gal5.jpg" alt="" />
        <img src="gal7.jpg" alt="" />
        <img
          src="gal6.jpg"
          alt=""
          className="col-start-1 row-start-3 row-span-2"
        />
        <img src="gal3.jpg" alt="" />
      </div>
    </div>
  );
};

export default page;
