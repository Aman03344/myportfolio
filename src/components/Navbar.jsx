import React, { useContext, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    const nav = navRef.current;
    const minWidth = 700;
    const maxWidth = 1000;
    const scrollRange = 300;

    let currentTween = null;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / scrollRange, 1);
      const newWidth = maxWidth - progress * (maxWidth - minWidth);

      if (currentTween) currentTween.kill();
      currentTween = gsap.to(nav, {
        maxWidth: newWidth,
        duration: 0.3,
        ease: "power3.in",
      });

      //  Scroll state update
      if (scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", updateScrollState);
    updateScrollState();

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="w-full fixed top-4 z-50 flex justify-center px-4">
      <nav
        id="idNav"
        ref={navRef}
        className={`w-full max-w-[90vw] h-16 px-6 py-2 rounded-full flex items-center justify-between transition-all duration-300
  ${theme === "dark" ? "bg-[#0A0A0A]/40 border border-gray-900 text-white" : "bg-white/10 text-black"}
  ${
    scrolled
      ? theme === "dark"
        ? " border-[#B5FF6D]/30 shadow-md backdrop-blur-md"
        : " border-white/20 shadow-lg backdrop-blur-md"
      : "border-none shadow-none backdrop-blur-none"
  }
`}
      >
        {/* Logo */}
        <div className="w-[30%]">
          <h1 className="text-2xl font-bold uppercase drop-shadow">as</h1>
        </div>

        {/* Nav Links */}
        <div className="w-[30%] md:block hidden">
          <ul
            className={`flex justify-center items-center gap-10 ${
              theme === "dark" ? "text-white " : "text-[#1C1C1C]"
            } drop-shadow`}
          >
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="w-[30%] flex justify-end">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sun-dim-icon lucide-sun-dim"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 4h.01" />
                  <path d="M20 12h.01" />
                  <path d="M12 20h.01" />
                  <path d="M4 12h.01" />
                  <path d="M17.657 6.343h.01" />
                  <path d="M17.657 17.657h.01" />
                  <path d="M6.343 17.657h.01" />
                  <path d="M6.343 6.343h.01" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon-icon lucide-moon"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
