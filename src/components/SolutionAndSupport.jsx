import React from "react";
import TypeOfSoftware from "./TypeOfSoftware";

export default function SolutionAndSupport() {
  return (
    <div className="border min-h-screen  flex flex-col justify-evenly">
      <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl ">
        Solutions We Provide &
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Your Questions Answered
        </span>
      </h2>
      <p className="text-center text-[10px] md:text-[15px] lg:text-xl p-4 ">
        We not only develop different types of software for various industries
        but also ensure that our clients get clear answers to their most common
        questions. This way, we deliver complete solutions along with reliable
        support.
      </p>

      <div className=" lg:grid lg:grid-cols-2 gap-6">
        <TypeOfSoftware></TypeOfSoftware>
        <TypeOfSoftware></TypeOfSoftware>
      </div>
    </div>
  );
}
