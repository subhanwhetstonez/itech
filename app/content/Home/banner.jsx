import React from "react";

const banner = () => {
  return (
    <div className="relative bg-white ">
      <div className="flex items-center justify-center mb-[-8rem]">
        <div className="p-10 ">
          <div className="grid gap-4">
            <h1 className="text-[#6953D3] bg-[#6953D31F] p-2 w-max text-sm">
              Notero-Easy Note App
            </h1>

            <h1 className="text-4xl font-medium">
              Note{" "}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                Your Everything
              </span>{" "}
              In One App
            </h1>
            <h1 className="text-sm">
              No Coding required to make customization. the live customizer has
              everything you need.
            </h1>
          </div>

          <div className="grid md:flex gap-8 mt-4">
            <button className="flex gap-1 items-center p-3 rounded-full bg-[#6953D3] hover:bg-[#7c63fc] text-white">
              <img src="./Apple.png" width={24} />{" "}
              <span className="text-white">| Download App </span>
            </button>
            <div className="flex items-center gap-2">
              <div>
                <img src="./play.png" width={36} />
              </div>
              <div>
                <p className="text-sm">View</p>
                <p className="text-sm">Promotion</p>
              </div>
            </div>
          </div>

          <div className="grid md:flex gap-11 items-center mt-8">
            <div className="flex items-center gap-2">
              <img src="./rotate.png" width={36} />
              <p className="text-sm">Free 14 Days Trial</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="./card.png" width={36} />
              <p className="text-sm">One Time Payment</p>
            </div>
          </div>
        </div>
        <div className="md:flex items-center hidden">
          <img src="./banner1.png" />
        </div>
      </div>
    </div>
  );
};

export default banner;
