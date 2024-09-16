"use client";
import { useState } from "react";
import Image from "next/image";

const Sectwo = () => {
  // State to track which FAQ item is open
  const [openFaq, setOpenFaq] = useState(null);
  const [bgcolor, setbgcolor] = useState(" ");

  const toggleFaq = (index) => {
    // If the clicked FAQ is already open, close it; otherwise, open it
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 bg-white items-center">
        {/* Left side content */}
        <div className="p-10 md:p-4 text-justify lg:col-start-2">
          <div className="flex flex-col text-xs gap-6 py-12">
            <p className="bg-[#6953D31F] text-[#6953D3] p-3 rounded-lg w-fit">
              Better Note Management
            </p>
            <p className="text-4xl font-bold">
              Your Notes <br />
              <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] via-[#A14EEE] to-[#F98085] text-transparent bg-clip-text p-1">
                Security
              </span>
            </p>
            <p className="text-[#44444499]  text-sm">
              Automatically syncs across all your devices. You can also access
              and write notes without internet connection.
            </p>

            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <div className="w-full mx-auto py-4">
                {/* Question 1 */}

                <div className="w-full bg-[#6953D326] p-4 rounded-2xl">
                  <div
                    id="mainHeading"
                    className="flex justify-between items-center w-full"
                  >
                    <div className="">
                      <p className="flex justify-center items-center font-medium text-sm leading-6 md:leading-4 text-[#4B2FD2]">
                        Create And Save Your Notes With Multi-Media
                      </p>
                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B2FD2]"
                      onClick={() => toggleFaq(1)}
                    >
                      <img
                        className={`transform transition-transform duration-300 ${
                          openFaq === 1 ? "rotate-180" : ""
                        }`}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                        alt="toggler"
                      />
                    </button>
                  </div>
                  <div
                    id="menu"
                    className={`mt-6 w-full ${openFaq === 1 ? "" : "hidden"}`}
                  >
                    <p className="text-sm leading-6 text-[#44444499] font-normal">
                      Images, videos, PDFs and audio files are supported. Create
                      math expressions and diagrams directly from the app. Take
                      photos with the mobile app and save them to a note.
                    </p>
                  </div>
                </div>

                {/* Question 2 (repeat this block for more questions) */}
                <hr className="w-full lg:mt-2 md:mt-2 md:mb-2 my-2" />

                <div className="w-full p-4 text-sm">
                  <div
                    id="mainHeading"
                    className="flex justify-between items-center w-full"
                  >
                    <div className="">
                      <p className="flex justify-center items-center  font-medium text-sm leading-6 md:leading-4 text-gray-800">
                        Web Clipper Extension
                      </p>
                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => toggleFaq(2)}
                    >
                      <img
                        className={`transform transition-transform duration-300 ${
                          openFaq === 2 ? "rotate-180" : ""
                        }`}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                        alt="toggler"
                      />
                    </button>
                  </div>
                  <div
                    id="menu"
                    className={`mt-6 w-full ${openFaq === 2 ? "" : "hidden"}`}
                  >
                    <p className="text-sm leading-6 text-[#44444499] font-normal">
                      Images, videos, PDFs and audio files are supported. Create
                      math expressions and diagrams directly from the app. Take
                      photos with the mobile app and save them to a note.
                    </p>
                  </div>
                </div>

                {/* Question No. 3 */}
                <hr className="w-full lg:mt-2 md:mt-2 md:mb-2 my-2" />

                <div className="w-full p-4">
                  <div
                    id="mainHeading"
                    className="flex justify-between items-center w-full"
                  >
                    <div className="">
                      <p className="flex justify-center items-center  font-medium text-sm leading-6 md:leading-4 text-gray-800">
                        Protect Your Note With Lock
                      </p>
                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => toggleFaq(3)}
                    >
                      <img
                        className={`transform transition-transform duration-300 ${
                          openFaq === 3 ? "rotate-180" : ""
                        }`}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                        alt="toggler"
                      />
                    </button>
                  </div>
                  <div
                    id="menu"
                    className={`mt-6 w-full ${openFaq === 3 ? "" : "hidden"}`}
                  >
                    <p className="text-sm leading-6 text-[#44444499] font-normal">
                      Images, videos, PDFs and audio files are supported. Create
                      math expressions and diagrams directly from the app. Take
                      photos with the mobile app and save them to a note.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-[#E7E5E5] py-2 px-6 rounded-full text-sm flex items-center gap-2">
                  <span>
                    <img src="chrome.png" alt="Chrome" width={50} />
                  </span>
                  <hr className="h-8 w-[2px] bg-[#44444480]" />
                  <span className="text-left text-xs">
                    <p>Available In The</p>
                    <p className="font-bold">Chrome Web Store</p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <img src="section2.png" alt="Section Image" />
        </div>
      </div>
    </div>
  );
};

export default Sectwo;
