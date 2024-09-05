import React from "react";

const sectwo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative z-10 bg-white items-center">
        <div className="p-6 lg:col-start-2">
          <div className="flex flex-col text-xs gap-6 py-12  ">
            <p className=" bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
              Better Note Management
            </p>
            <p className=" text-4xl font-bold">
              Your Notes{" "}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                {" "}
                Security{" "}
              </span>{" "}
            </p>
            <p className="text-[#44444499] leading-8  text-sm">
              Automatically syncs across all your devices. You can also access
              and write notes without internet connection.
            </p>

            <div>
              <button className="bg-[#E7E5E5] py-2 px-6 rounded-full  text-sm flex items-center gap-2">
                <span>
                  <img src="chrome.png" alt="Chrome" width={50} />
                </span>
                <hr className="h-8 w-[2px] bg-[#44444480]" />
                <span className="text-left text-xs">
                  <p>Available In The</p>
                  <p className="font-bold">Chrome Web Store</p>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className=" col-span-2">
          <img src="section2.png" />
        </div>
      </div>
    </div>
  );
};

export default sectwo;
