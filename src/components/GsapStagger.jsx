import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to("#staggerBox", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger : 0.5
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from : "center"
      },
    });
  });

  return (
    <div className=" w-full h-screen flex items-center justify-center gap-4 bg-gray-800">
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-100">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-200">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-300">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-400">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-500">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-600">
        {" "}
      </div>
      <div id="staggerBox" className=" w-12 h-18 rounded-[10px] bg-lime-700">
        {" "}
      </div>
    </div>
  );
};

export default GsapStagger;
