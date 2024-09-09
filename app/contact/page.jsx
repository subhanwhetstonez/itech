import React from "react";
import Custominput from "../content/Custominput";
import CustomFormbutton from "../content/CustomFormButton";

const page = () => {
  return (
    <div className="relative bg-white z-20">
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 lg:grid-cols-8 justify-items-center place-items-center">
        <div className="lg:col-start-2 lg:col-span-2">
          <img src="section2.png" alt="" />
        </div>

        <div className="lg:col-start-4 bg-[#edeafa] w-full lg:col-span-2 py-28 mx-2">
          <div>
            <h1 className="font-bold text-3xl text-center text-[#6f58e2] mb-2">
              Welcome To ITech
            </h1>
          </div>
          <form action="POST" className="grid gap-3 px-16">
            <div className="grid gap-3">
              <Custominput
                label={"Enter Your Name"}
                placeholder={"Enter Full Name"}
                required={true}
              />
            </div>
            <div className="grid gap-3">
              <Custominput
                label={"Enter Your Email"}
                placeholder={"Enter Email Here"}
                required={true}
              />
            </div>
            <div className="grid gap-3">
              <label className="font-bold">Your Message</label>
              <textarea name="message" className="p-4 rounded-lg"></textarea>
            </div>
            <CustomFormbutton buttonText={"Submit"} />
          </form>
        </div>

        <div className="lg:col-start-6 lg:col-span-2 md:hidden lg:flex">
          <img src="section3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
