import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ScrollReveal from "../TextAnimations/ScrollReveal/ScrollReveal";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import CurvedLoop from "../TextAnimations/CurvedLoop/CurvedLoop";


const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12
        ${
          theme === "dark"
            ? "bg-[#0A0A0A] text-white"
            : "bg-[#f9f9f9] text-black"
        }
      `}
    >
      {/* Title */}
      <div className=" flex  items-center justify-center sm:pt-6 lg:pt-8 w-full font-[Clash] text-center uppercase">
        <ShinyText
          text=" ✦ About Me  ✦"
          disabled={false}
          speed={3}
          className="custom-class text-[clamp(1.8rem,4vw,3rem)]"
        />
      </div>

      {/* Description */}
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={1}
        blurStrength={5}
        textClassName="text-center text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed px-2 sm:px-4"
      >
        Hi, I'm Aman Sheikh Software Developer
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={1}
        blurStrength={5}
        textClassName="text-center w-full text-[clamp(1.5rem,2.5vw,1.25rem)] leading-relaxed px-2 sm:px-4"
      >
        Full-stack developer with 6+ months of expertise in crafting
        high-quality, impactful digital solutions. Passionate about transforming
        ideas into seamless, user-focused products, and trusted by leading
        brands to deliver innovation with precision.
      </ScrollReveal>

      <div className="w-full flex items-center justify-center flex-col max-w-6xl mx-auto font-[Clash]">
        <ShinyText
          text=" ✦ SKILLS  ✦"
          disabled={false}
          speed={3}
          className="custom-class text-center text-[clamp(1.8rem,4vw,3rem)]"
        />

        <CurvedLoop
          marqueeText="html5 ✦ css3 ✦ tailwindcss ✦ javascript ✦ typescript ✦ react ✦ redux ✦ tanstack ✦ reactrouter ✦ docker ✦ node ✦ mongoDB ✦ express ✦ postman ✦"
          speed={1.5}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>
    </div>
  );
};

export default About;
