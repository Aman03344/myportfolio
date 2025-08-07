import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTofromTo = () => {
  useGSAP(() => {
    gsap.to("#to", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });

    gsap.from("#from", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#fromTo",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      }
    );
  }, []);

  return (
    <div className=" w-full h-a bg-gray-800 ">
      <div id="to" className=" w-50 h-50 rounded-3xl bg-red-500"></div>
      <div id="from" c lassName=" w-50 h-50 rounded-3xl bg-green-500"></div>
      <div id="fromTo" className=" w-50 h-50 rounded-3xl bg-blue-500"></div>
    </div>
  );
};

export default GsapTofromTo;
