import React from "react";

const sectwo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 bg-white items-center">
        <div className="p-3 text-justify lg:col-start-2">
          <div className="flex flex-col text-xs gap-6 py-12  ">
            <p className=" bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
              Better Note Management
            </p>
            <p className=" text-4xl font-bold">
              Your Notes
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                Security
              </span>
            </p>
            <p className="text-[#44444499] leading-8  text-sm">
              Automatically syncs across all your devices. You can also access
              and write notes without internet connection.
            </p>

            <div className="grid gap-4">
              <div className="grid gap-2 bg-[#6953D326] p-3 rounded-lg">
                <div className="flex gap-2 justify-between">
                  <p className="text-[#4B2FD2] font-semibold">
                    Create And Save Your Notes With Multi-Media
                  </p>
                  <img src="arrowup.png" alt="" className="w-[16px] h-[16px]" />
                </div>
                <p className="text-[#44444499]">
                  Images, videos, PDFs and audio files are supported. Create
                  math expressions and diagrams directly from the app. Take
                  photos with the mobile app and save them to a note.
                </p>
              </div>
              <div className="flex justify-between px-3">
                <p className="font-semibold">Web Clipper Extension</p>
                <img src="arrow.png" className="w-[16px] h-[16px]" />
              </div>
              <div className="flex justify-between px-3">
                <p className="font-semibold">Protect Your Note With Lock</p>
                <img src="arrow.png" className="w-[16px] h-[16px]" />
              </div>
            </div>

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

        <div className=" lg:col-span-2">
          <img src="section2.png" />
        </div>
      </div>
    </div>
  );
};

export default sectwo;
