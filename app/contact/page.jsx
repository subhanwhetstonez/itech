import React from "react";

const page = () => {
  return (
    <div className="z-20 bg-white">
      <div className="grid md:grid-flow-col md:grid-cols-2 lg:grid-cols-6 justify-items-center w-full">
        <div className="bg-white lg:col-start-2 lg:col-span-2 grid place-content-center">
          <img src="section3.png" alt="Calender" />
        </div>
        <div className="bg-[#edeafa] w-full grid lg:col-start-4 lg:col-span-2 py-40">
          <div className="grid justify-center place-content-center">
            <h1 className="font-bold text-4xl pb-4 text-[#6f58e2] drop-shadow-md">
              Welcome To Itech
            </h1>
            <form className="grid gap-4">
              <label className="font-bold">Enter Your Email </label>
              <input
                type="text"
                placeholder="Your Registered Email"
                className="p-3 rounded-lg"
                required
              />
              <label className="font-bold">Enter Your Password </label>
              <input
                type="text"
                placeholder="Your Registered Password"
                className="p-3 rounded-lg"
                required
              />
              <div className="grid grid-flow-col justify-between">
                <button className="bg-[#6953D3] hover:bg-[#7c63fc] m-auto py-3 px-6 rounded-lg text-white">
                  Log In
                </button>
                <button className="bg-[#6953D3] hover:bg-[#7c63fc] m-auto py-3 px-6 rounded-lg text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
