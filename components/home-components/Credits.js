import Image from "next/image";
import React from "react";

export default function Credits() {
  const cc = [
    {
      avatar: "/assets/avatars/1.jpg",
      name: "Vishwa Gaurav",
      creditfor: "Visit Count Pro",
    },
 
  ];
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14 text-green-300">
      <p className="text-4xl font-semibold">Credits</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        We believe in giving credit where it&apos;s due. To all the OG creators,
        we see you and #thank you for creating these awesome tools!
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <Image
               width={1500}
               height={1500}
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.creditfor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
