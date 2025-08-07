import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(".para" ,{
        opacity : 0,
        y : 20,

    },{
        opacity : 1,
        y : 0,
        delay : 0.4,
        stagger : 0.1
    })
  }, []);

  return (
    <div className=" w-full h-screen p-5 bg-gray-900 flex flex-col items-center justify-center">
      <h1
        id="text"
        className="translate-y-10 text-6xl font-medium text-white opacity-0"
      >
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like
        <code>gsap.to()</code>, <code>gsap.from()</code>,
        <code>gsap.fromTo()</code> and <code>gsap.timeline()</code> to animate
        text.
      </p>
    </div>
  );
};

export default GsapText;
