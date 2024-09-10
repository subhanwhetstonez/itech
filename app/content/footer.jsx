import React from "react";
import Logocomp from "./logo";

const footer = () => {
  return (
    <div className="relative grid gap-4 bg-[#f7f2f2] py-6 z-10">
      <div className="grid md:flex gap-4 justify-around text-center items-center">
        <Logocomp />
        <div>
          <ul className="grid md:flex gap-4">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/pages">
              <li>Pages</li>
            </a>
            <a href="/portfolio">
              <li>Portfolio</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="flex gap-3">
          <img src="./eng.png" alt="Lang" width={30} />
          <p>English ▼</p>
        </div>
      </div>
      <hr className="h-[2px] w-[94%] m-auto bg-gray-300"></hr>
      <div className="text-center text-slate-400 text-sm">
        <p>
          @ 2023 copyrights by <b className="text-gray-600">ITech</b> . All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;
