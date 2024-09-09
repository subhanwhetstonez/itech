"use client";
import React from "react";
import Custominput from "../content/Custominput";
import CustomFormbutton from "../content/CustomFormButton";

const page = () => {
  return (
    <div className="relative z-20 bg-white">
      <div className="grid md:grid-flow-col md:grid-cols-2 lg:grid-cols-6 justify-items-center w-full">
        <div className="bg-[#edeafa] w-full grid lg:col-start-2 lg:col-span-2 py-40">
          <div className="grid justify-center place-content-center">
            <h1 className="font-bold text-4xl pb-4 text-[#6f58e2] drop-shadow-md">
              Welcome To Itech
            </h1>
            <form className="grid gap-4">
              <Custominput
                label={"Enter Your Name"}
                placeholder={"Enter Full Name"}
                required={true}
              />
              <Custominput
                label={"Enter Your Email"}
                placeholder={"Enter Email Here"}
                required={true}
              />
              <Custominput
                label={"Enter Your Password"}
                placeholder={"Enter a Password"}
                required={true}
              />
              <Custominput
                label={"Re-Type Your Password"}
                placeholder={"Enter Password Again"}
                required={true}
              />

              <CustomFormbutton buttonText={"Register"} />
            </form>
            <div className="mt-2">
              <p>
                Already Registered? No worries{" "}
                <a href="/login" className="text-[#6f58e2]">
                  LOGIN HERE
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:col-start-4 lg:col-span-2 grid place-content-center">
          <img src="section2.png" alt="Calender" />
        </div>
      </div>
    </div>
  );
};

export default page;
