import React from "react";

const download = () => {
  return (
    <div>
      <div className="h-fit">
        <div className="absolute z-0">
          <img src="wave3.png" alt="" className="" />
        </div>

        <div className="relative grid gap-6 pt-48">
          <div className="bg-[#f7f2f2] mt-[-4rem] md:mt-0 rounded-full w-fit m-auto">
            <div className="grid text-center justify-center justify-items-center gap-4">
              <p className=" text-4xl font-bold">
                Ready To
                <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                  Download
                </span>
              </p>
              <p className="text-sm">
                Discover your new favorite spaces, from Sao Paulo to Seoul.
                Download from App Store or Google Play.
              </p>
            </div>
            <div className="grid md:grid-flow-col gap-6 justify-center w-3/4 m-auto mt-6">
              <button className="flex gap-1 items-center p-3 w-max rounded-full bg-[#6953D3] text-white">
                <img src="./Apple.png" width={24} />{" "}
                <span className="text-white text-sm">
                  | Download App on app store{" "}
                </span>
              </button>
              <button className="flex gap-1 items-center p-3 w-max rounded-full border-[0.12rem] border-[#000000]">
                <img src="./GooglePlay.png" width={24} />{" "}
                <span className="text-sm">| Download App on Google play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default download;
