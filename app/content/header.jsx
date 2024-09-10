import React from "react";
import Logocomp from "./logo";

const header = () => {
  return (
    <div>
      <div className="bg-[#4E1C99] m-auto justify-center items-center ">
        <div className="grid grid-flow-col">
          <img src="Ellipse 1.png" />
          <img src="Ellipse 2.png" />
          <img src="Ellipse 3.png" />
          <img src="Ellipse 4.png" />
          <img src="Ellipse 5.png" />
        </div>
        <div className="relative hidden lg:grid z-20 -top-28 left-[35%] -mt-8">
          <a href="/register">
            <img src="sale.png" alt="" width={560} />
          </a>
        </div>
        <div className="relative grid md:flex gap-4 justify-around items-center bg-white p-10 pt-0 mt-[-4rem] lg:mt-[-8rem] rounded-t-3xl">
          <Logocomp />
          <div className="menu">
            <ul className="grid md:flex text-center gap-8 font-semibold">
              <a href="/">
                <li className="flex gap-2 text-[#6953D3] hover:text-[#6953D3]">
                  Home <img src="arrow.png" width={20} />{" "}
                </li>
              </a>
              <a href="/pages">
                <li className="hover:text-[#6953D3] flex gap-2">
                  Pages <img src="arrow.png" width={20} />
                </li>
              </a>
              <a href="/portfolio">
                <li className="hover:text-[#6953D3]">Portfolio</li>
              </a>
              <a href="/blog">
                <li className="hover:text-[#6953D3]">Blog</li>
              </a>
              <a href="/contact">
                <li className="hover:text-[#6953D3]">Contact </li>
              </a>
            </ul>
          </div>
          <div className="profile flex gap-5 justify-center items-center">
            <div>
              <a href="/login">
                <img src="./profile.png" width={30} />
              </a>
            </div>
            <div>
              <a href="/register">
                <button className="border-[1px] p-2 rounded-full border-black text-xs">
                  Join ITech Hub ➔
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
