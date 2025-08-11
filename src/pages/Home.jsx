import darkImage from "../assets/DarkHeroimage.png";
import lightImage from "../assets/lightheroImage.png";
import blackDuck from "../assets/blackDuck.png";
import whiteDuck from "../assets/whiteDuck.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import hand from "../assets/hand-shake-svgrepo-com.svg";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import shape from "../assets/shape.png";
import { text } from "motion/react-client";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = [
    { icon: Github, link: "https://github.com/Aman03344" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aman-sheikh-5a2b9b328/",
    },
    { icon: Mail, link: "amansheikh03344@gmail.com" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto h-a text-white ">
      <div className="w-full h-[100vh] flex flex-col-reverse md:flex-row md:mt-0 mt-70">
        <div className="md:w-[60%] md:h-full w-full h-a py-4 px-3 flex items-center">
          <div className="w-full">
            <div
              className={`px-4 py-1 ${
                theme === "dark"
                  ? " border border-white/20 bg-white/10 "
                  : " border border-gray-300 bg-[#000]/10"
              }  backdrop-blur-lg w-fit flex items-center gap-2 rounded-full `}
            >
              <img
                className="w-8 mt-1 animate-[wave_1.5s_ease-in-out_infinite] origin-bottom-right"
                src={hand}
                alt="Hand"
              />
              <p
                className={`text-xl font-medium ${
                  theme === "dark" ? "text-white" : "text-[#000]"
                }`}
              >
                Hii I'm
              </p>
            </div>

            <div className=" md:leading-15 leading-10 pt-5 px-2">
              <h1 className=" md:text-[74px] text-5xl font-bold font-[Clash] ">
                <ShinyText text="Aman Sheikh" />
              </h1>
              <span
                className={`md:text-[34px] text-[30px] font-semibold font-[Clash2] transition-colors duration-300 
    ${theme === "dark" ? "text-indigo-300" : "text-indigo-700"}`}
              >
                <DecryptedText
                  text="Full-stack Development Engineer"
                  animateOn="view"
                  revealDirection="start"
                  speed={100}
                />
              </span>

              <p
                className={`leading-7 text-lg  pt-4 transition-colors duration-300 
    ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
              >
                I specialize in creating exceptional digital experiences by
                developing scalable, user-friendly applications with modern web
                technologies. Leveraging extensive full-stack expertise, I
                deliver high-performance solutions that seamlessly blend
                functionality with an outstanding user experience.
              </p>
              <div className="w-full flex items-center justify-start gap-2 pt-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl flex items-center ${
                      theme === "dark"
                        ? "bg-[#121212] hover:bg-[#121212]/10 border border-[#2B2B2B] text-[#989898]"
                        : "bg-[#121212]/10 hover:bg-[#121212]/10 border border-[#727272] text-[#989898]"
                    }  justify-center  `}
                  >
                    <link.icon size={30} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] md:h-full h-auto flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] flex items-center justify-center overflow-visible">
            {/* Bean Shape Background */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full z-0"
            >
              <path
                fill="#A476FF"
                d="M44,-84C58,-78,72,-67,78,-52C84,-37,82,-18,78,-2.5C74,13,68,26,61,39.5C54,53,46,67,34,75.5C22,84,11,87,0,87C-11,87,-22,84,-33,77C-44,70,-55,59,-62,46.5C-69,34,-73,20,-75,6.5C-77,-7,-77,-20,-71,-33C-65,-46,-53,-59,-39,-65.5C-25,-72,-12,-72,2,-75.5C16,-79,32,-86,44,-84Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Image overlapping shape */}
            <img
              src={`${theme === "dark" ? darkImage : lightImage}`}
              alt="Avatar"
              className="relative z-10 w-[280px] -mt-8 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
