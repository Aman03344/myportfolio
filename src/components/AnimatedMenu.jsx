import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const items = ["Home","Our work","Services","About us","Insights","Get in touch"];

export default function AskPhillMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const triggerRef = useRef();

  const toggle = () => {
    const state = Flip.getState([menuRef.current, triggerRef.current]);
    setOpen(o => !o);
    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut"
    });
  };

  return (
    <div>
      <button
        ref={triggerRef}
        onClick={toggle}
        className={`fixed top-6 right-6 z-40 flex items-center justify-center
          ${open ? "bg-black text-red-600" : "bg-red-600 text-white"}
          w-16 h-16 rounded-full shadow-lg`}
      >
        {open ? "×" : "≡"}
      </button>

      <div
        ref={menuRef}
        className={`fixed inset-0 z-30 bg-red-600
          ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {items.map((it,i) => (
            <li key={i}>
              <a
                href="#"
                className={`text-4xl font-bold transition
                  ${i===0
                    ? (open
                        ? "bg-white text-red-600 px-6 py-2 rounded-full"
                        : "")
                    : "text-white hover:text-gray-200"}
                `}
              >
                {it}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
