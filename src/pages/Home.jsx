import darkImage from "../assets/DarkHeroimage.png";
import lightImage from "../assets/lightheroImage.png";
import blackDuck from "../assets/blackDuck.png";
import whiteDuck from "../assets/whiteDuck.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="w-full h-screen text-white lg:pt-20 px-4 flex justify-center items-center relative overflow-hidden">
      {/* Image centered behind text */}
      <img
        className="absolute lg:top-90 md:top-90 top-100 left-1/2 lg:w-[30%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none  z-10"
        src={`${theme === "dark" ? darkImage : lightImage}`}
        alt="background"
      />

      {/* ✅ ADD THIS
      <img
        className="absolute top-[27%] left-[10%] w-[12%] z-20"
        src={theme === "dark" ? whiteDuck : blackDuck}
        alt="duck"
      /> */}

      <div className="w-[80%] h-full flex flex-col items-center justify-center relative">
        <h1
          className={`text-[120px] lg:text-[40vh] md:text-[30vh] font-[cloud1] uppercase ${
            theme === "dark" ? "text-white" : "text-black"
          } leading-none`}
        >
          Aman
        </h1>
        <h1
          className={`lg:text-[50vh] md:text-[35vh] text-9xl font-[cloud1] uppercase ${
            theme === "dark" ? "text-white" : "text-black"
          } leading-none`}
        >
          Sheikh
        </h1>
      </div>
    </section>
  );
};

export default Home;
