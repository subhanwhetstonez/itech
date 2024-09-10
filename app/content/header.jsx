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
        <div className="relative hidden lg:grid z-20 top-[-7.25rem] left-[35.5%] -mt-8">
          <a href="/register">
            <img src="sale.png" alt="" width={560} />
          </a>
        </div>
        <div className="relative grid md:flex gap-4 justify-around items-center bg-white p-10 pt-0 mt-[-4rem] lg:mt-[-8rem] rounded-t-3xl">
          <a href="/">
            <Logocomp />
          </a>
          <div className="menu">
            <ul className="grid md:flex text-center gap-8 font-semibold">
              <a href="/">
                <li className="flex gap-2 active:text-[#6953D3] hover:text-[#6953D3]">
                  Home
                </li>
              </a>

              <div className="m-auto flex items-center justify-center ">
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-between space-x-2 bg-white">
                    <a
                      href="/pages"
                      className="menu-hover text-base font-medium hover:text-[#6953D3] text-black "
                      onClick=""
                    >
                      Pages
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-left pl-2 text-gray-800 shadow-xl group-hover:visible">
                    <a
                      href="/portfolio"
                      className="my-2 block border-b border-gray-100 py-1 font-medium  text-black hover:text-[#6953D3]"
                    >
                      Portfolio
                    </a>

                    <a
                      href="/blog"
                      className="my-2 block border-b border-gray-100 py-1 font-medium text-black hover:text-[#6953D3] "
                    >
                      Blog
                    </a>

                    <a
                      href="/contact"
                      className="my-2 block border-b border-gray-100 py-1 font-medium text-black hover:text-[#6953D3] "
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
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
                <button className="border-[1px] p-2 rounded-full border-black hover:border-[#6953D3] hover:text-[#6953D3] text-xs">
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
