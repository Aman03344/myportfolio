import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 250 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "top top",
            end: "top 50%",
            scrub: true,
            markers : true
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <>
      {/* Section above for scroll space */}
      <div className="min-h-[150vh] bg-gray-700 flex flex-col p-4 gap-5">
        <h1 className="text-white text-4xl text-center mt-40">
          Scroll Down to Animate Boxes
        </h1>
      </div>

      {/* ScrollTrigger Target */}
      <div
        ref={scrollRef}
        className="h-[100vh] bg-gray-800 flex flex-col items-start justify-center gap-12"
      >
        <div id="scroll1" className="w-40 h-40 bg-rose-300 rounded-2xl" />
        <div id="scroll2" className="w-40 h-40 bg-rose-500 rounded-2xl" />
      </div>

      <div className="min-h-[150vh] bg-gray-700 flex flex-col p-4 gap-5"></div>
    </>
  );
};

export default GsapScrollTrigger;
