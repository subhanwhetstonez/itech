import React from "react";

const secone = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 bg-white items-center">
        <div className="col-span-1 lg:col-span-2 lg:col-start-2">
          <img src="section1.png" />
        </div>
        <div className="p-10 md:p-4 lg:col-start-4">
          <div className="flex flex-col text-xs gap-6 py-12  ">
            <p className=" bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
              Notero-Easy Note App
            </p>
            <p className=" text-4xl font-bold">
              The Noter For{" "}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                {" "}
                Creative{" "}
              </span>{" "}
            </p>
            <p className="text-[#44444499] leading-8  text-sm">
              Stay focused and productive with a clean clutter-free note space.
              the flexible ways to organize your notes: hashtags , nested
              notebooks , pining notes to the top of the note list, ect.
            </p>
            <div className="flex gap-4 items-center">
              <img src="sec1img1.jpg" width={35} />
              <p className="font-bold text-sm">
                Filtering notes using matched keywords
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src="sec1img2.png" width={35} />
              <p className="font-bold text-sm">
                Filtering notes using matched keywords
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src="sec1img3.jpg" width={35} />
              <p className="font-bold text-sm">
                Filtering notes using matched keywords
              </p>
            </div>

            <div>
              <button className="bg-[#6953D3] py-2 px-4 rounded-full text-white text-sm">
                Free Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secone;
