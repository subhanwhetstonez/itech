import React from "react";

const secwave = () => {
  return (
    <div className="mt-6 md:mt-0">
      <div className="grid gap-12">
        <div className="absolute z-0">
          <img src="wave.png" alt="" />
        </div>
        <div className="grid gap-12 mt-14 p-12 lg:p-36 z-10">
          <div>
            <p className="text-xl font-semibold text-center">
              {" "}
              <span className="text-[#6953D3]">25K+ Installation</span> and
              featured on
            </p>
          </div>
          <div className="grid md:flex gap-6 items-center justify-around">
            <img src="TECHNEWS.png" className="w-36 h-6" />
            <img src="hello world.png" className="w-32 h-18" />
            <img src="IT Blog.png" className="w-20 h-6" />
            <img src="digitek.png" className="w-30 h-7" />
            <img src="teckrown.png" className="w-20 h-8" />
          </div>

          <hr className="flex w-11/12 h-[2px] m-auto bg-[#44444466]" />

          <div className="items-center grid gap-10">
            <div className="text-center grid gap-2">
              <p className="text-[#6953D3] bg-white w-max m-auto p-2 rounded-md">
                Notero-Easy Note App
              </p>
              <p className="text-3xl font-bold">
                Awesome{" "}
                <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                  Features
                </span>
              </p>
            </div>
            <div className="grid md:flex m-auto items-center justify-center gap-6">
              <div className="grid place-items-center items-center p-4">
                <img src="./Ellipse 15.png" width={70} />
                <p className="text-xs text-center font-bold">
                  Notes Powerful <br /> and Security
                </p>
              </div>
              <div className="grid place-items-center items-center p-4">
                <img src="./Ellipse 16.png" width={70} />
                <p className="text-xs text-center font-bold">
                  Easy Sort, Classify <br /> and Search
                </p>
              </div>
              <div className="grid place-items-center items-center p-4">
                <img src="./Ellipse 17.png" width={70} />
                <p className="text-xs text-center font-bold">
                  Collaboration and <br /> Share
                </p>
              </div>
              <div className="grid place-items-center items-center p-4">
                <img src="./Ellipse 18.png" width={70} />
                <p className="text-xs text-center font-bold">
                  Quick Note In <br /> Everywhere
                </p>
              </div>
              <div className="grid place-items-center items-center p-4">
                <img src="./Ellipse 19.png" width={70} />
                <p className="text-xs text-center font-bold">
                  Write and Draw <br /> on Ipad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secwave;
