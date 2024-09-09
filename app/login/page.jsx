import React from "react";
import Custominput from "../content/Custominput";
import CustomFormbutton from "../content/CustomFormButton";

const page = () => {
  return (
    <div className="relative z-20 bg-white">
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
              <Custominput
                label={"Enter Your Email"}
                placeholder={"Your Registered Email"}
                required={true}
              />

              <Custominput
                label={"Enter Your Password"}
                placeholder={"Your Registered Password"}
                required={true}
              />

              <CustomFormbutton buttonText={"Login"} />
            </form>
            <div className="mt-2">
              <p>
                Haven't registered yet? Go{" "}
                <a href="/register" className="text-[#6f58e2]">
                  REGISTER HERE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
