import React from "react";
import Image from "next/image";

const mobilesec = () => {
  return (
    <div className="relative bg-[#F9F4F4]">
      <div className="grid grid-flow-col justify-center gap-6 pt-8">
        <img
          src="screen1.png"
          width={135}
          className="mt-2 shadow-lg rounded-xl"
        />
        <img
          src="screen2.png"
          width={145}
          className="mt-10 shadow-lg rounded-xl"
        />
        <img src="hand.png" width={280} className="mt-10" />
        <img
          src="screen3.png"
          width={145}
          className="mt-5 shadow-lg rounded-xl"
        />
        <img src="screen4.png" width={135} className="shadow-lg rounded-xl" />
      </div>
    </div>
  );
};

export default mobilesec;
