import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AnimatedText() {
  return (
    <div className="text-zinc-500 hidden md:block sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium overflow-y-hidden">
      Create{" "}
      <span className="text-rose-200 underline underline-offset-4 decoration-dashed">
        <Typewriter
          words={["Beautiful", "Modern", "Interactive", "Perfect"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>{" "}
      Profile
    </div>
  );
}
