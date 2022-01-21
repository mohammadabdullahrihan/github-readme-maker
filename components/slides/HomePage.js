import React, { useState } from "react";
import AnimatedText from "../elements/AnimatedText";
import Socials from "./Socials";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? (
        <Socials />
      ) : (
        <div className="w-full flex flex-col md:flex-row py-16 md:py-28">
          <div className="flex flex-col w-full md:w-6/12 relative">
            <p className="text-6xl md:text-7xl 2xl:text-8xl">
              Best Profile Generator
            </p>
            {/* Text Input */}
            <div className="flex mt-8 md:my-16 items-center">
              <input
                type="text"
                name=""
                id=""
                className="border-b-2 border-green-200 bg-transparent w-11/12 md:w-10/12 lg:w-8/12 sm:text-sm md:text-lg lg:text-xl 2xl:text-3xl outline-none focus:border-green-300 focus:border-b-4 inline"
                placeholder="Enter Your GitHub Username"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-12 cursor-pointer transition-all hover:ml-1 duration-200 ease-linear"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setIsVisible(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="">
              <AnimatedText />
            </div>
          </div>
          <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6/12 text-green-300"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
