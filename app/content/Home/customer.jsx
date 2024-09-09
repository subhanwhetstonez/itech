import React from "react";
import Image from "next/image";

const customer = () => {
  return (
    <div className="grid md:grid m-auto md:grid-cols-2 lg:grid-cols-5 justify-center justify-items-center items-center">
      <div className="grid p-10 gap-8 lg:col-start-2">
        <div className="grid gap-2">
          <div className="bg-[#6953D31F] w-max p-3 rounded-lg text-sm flex">
            <p className="text-[#6953D3]">Testimonials</p>
          </div>
          <p className="text-3xl font-bold">
            Loved From
            <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
              Customers
            </span>
          </p>
        </div>
        <p className="text-sm text-[#00000099]">
          Notero loved from thoudsands customer worldwide and get trusted from
          big companies.
        </p>
        <div className="flex gap-8">
          <div className="grid gap-4">
            <img src="doc.png" alt="" width={80} />
            <p className="text-[#5038C6] text-3xl font-bold">2.5M+</p>
            <p className="text-sm">
              Downloaded and <br /> Installation
            </p>
          </div>
          <hr className="bg-[#0000002d] h-auto w-[0.1rem]" />
          <div className="grid gap-4">
            <img src="app.png" alt="" width={69} />
            <p className="text-[#5038C6] text-3xl font-bold">4.8/5</p>
            <img src="star.png" alt="" />
            <p className="text-sm">Based on 1,258 reviews</p>
          </div>
        </div>
        <div>
          <div className="grid md:flex gap-6 mt-4">
            <button className=" py-2 px-4 text-sm w-max rounded-full bg-[#6953D3] text-white">
              See Reviews on app store
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
        </div>
      </div>
      <div className="grid justify-self-center float-right lg:col-start-3 lg:col-span-2">
        <img src="globe.png" alt="" />
      </div>
    </div>
  );
};

export default customer;
