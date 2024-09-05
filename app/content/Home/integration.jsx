import Image from "next/image";
import React from "react";

const integration = () => {
  return (
    <div>
      <div className="w-full">
        <div className="grid gap-6 text-center m-auto">
          <div className="bg-[#6953D31F] w-max p-3 rounded-lg text-sm flex justify-self-center">
            <p className="text-[#6953D3]">One-Time Payment</p>
          </div>
          <p className="text-3xl font-bold">
            Integration With{" "}
            <span className="bg-gradient-to-r  from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
              Popular Apps
            </span>
          </p>
          <p className="text-sm text-[#00000099]">
            Notero integrate with popular apps. Help you easy to connect and
            collaboration
          </p>
        </div>
        <div className="">
          <img
            src="header_4_bubble.png"
            className="absolute z-0 w-full lg:top-[244rem]"
          />
        </div>
        <div className="relative items-center grid grid-flow-col grid-cols-5 lg:grid-cols-7  grid-rows-2 px-14 z-10 mt-6 mb-5">
          <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-1">
            {" "}
            <img src="intg1.png" width={100} />{" "}
          </div>
          <div className="col-start-5 row-start-1 lg:col-start-6 lg:row-start-1">
            {" "}
            <img src="intg2.png" width={120} />{" "}
          </div>
          <div className="col-start-4 row-start-2 lg:col-start-5 lg:row-start-2">
            {" "}
            <img src="intg3.png" width={140} />{" "}
          </div>
          <div className="col-start-3 row-start-1 lg:col-start-4 lg:row-start-1">
            {" "}
            <img src="intg4.png" width={100} />{" "}
          </div>
          <div className="col-start-2 row-start-2 lg:col-start-3 lg:row-start-2">
            {" "}
            <img src="intg5.png" width={140} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default integration;
