import React from "react";

const hubsec = () => {
  return (
    <div>
      <div>
        <div className="grid text-center justify-center justify-items-center gap-4">
          <p className=" bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
            Notero Community
          </p>
          <p className=" text-4xl font-bold">
            Join Into
            <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
              Our Hub
            </span>
          </p>
        </div>
        <div className="grid md:grid-flow-col gap-6 md:gap-0 items-center justify-items-start justify-center md:justify-around py-12 px-4 m-14 rounded-3xl border-[#00000066] border-[0.1rem]">
          <div className="flex items-center gap-2">
            <img src="github.png" width={80} />
            <div>
              <p className="text-3xl font-bold">GitHub</p>
              <p className="text-sm">Open Source & Commit Code</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="twitter.png" width={60} />
            <div>
              <p className="text-3xl font-bold">Tweeter</p>
              <p className="text-sm">Latest News & Update</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="telegram.png" width={60} />
            <div>
              <p className="text-3xl font-bold">Telegram</p>
              <p className="text-sm">Channel For Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hubsec;
