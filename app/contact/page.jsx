import React from "react";

const page = () => {
  return (
    <div className="relative bg-white z-20">
      <div className="grid grid-flow-col grid-cols-8 justify-items-center place-items-center">
        <div className="col-start-2 col-span-2">
          <img src="section2.png" alt="" />
        </div>

        <div className="col-start-4 bg-[#edeafa] w-full col-span-2 py-28 mx-2">
          <div>
            <h1 className="font-bold text-3xl text-center text-[#6f58e2] mb-2">
              Welcome To ITech
            </h1>
          </div>
          <form action="POST" className="grid gap-3 px-16">
            <div className="grid gap-3">
              <label className="font-bold">Enter Your Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="p-4 rounded-lg"
              />
            </div>
            <div className="grid gap-3">
              <label className="font-bold">Enter Your Email</label>
              <input
                type="text"
                placeholder="Your Email"
                className="p-4 rounded-lg"
              />
            </div>
            <div className="grid gap-3">
              <label className="font-bold">Your Message</label>
              <textarea name="message" className="p-4 rounded-lg"></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6953D3] w-full hover:bg-[#7c63fc] m-auto py-3 px-6 rounded-lg text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-start-6 col-span-2">
          <img src="section3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
