import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#roseBox", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#roseBox", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#roseBox", {
      x: 550,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      border: "6px solid red",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className=" w-full h-screen flex  flex-col items-start justify-center bg-gray-800">
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
        className="p-3 font-bold bg-amber-300 rounded-xl"
      >
        Play/Pause
      </button>

      <div
        id="roseBox"
        className=" w-50 h-50 bg-rose-300 rounded-2xl mt-10"
      ></div>
    </div>
  );
};

export default GsapTimeline;
