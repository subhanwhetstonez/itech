import React from "react";
import Image from "next/image";

export const metadata = {
  title: "ITech| Pages ",
  description: "Notepad app",
};

const page = () => {
  return (
    <div className="relative bg-white">
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="ui/ux review check"
              />
            </div>
            <div className="p-6 text-justify">
              <h4 className="block font-sans text-2xl antialiased font-extrabold leading-snug tracking-normal text-[#7c63fc]">
                ITech{" "}
                <span className="text-sm text-[#6953D3] font-semibold">
                  Tech & Solutions
                </span>
              </h4>
              <h4 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-[#7c63fc]">
                Note Your Everything In One App
              </h4>
              <p className="block mt-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                No Coding required to make customization. the live customizer
                has everything you need. Stay focused and productive with a
                clean clutter-free note space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
