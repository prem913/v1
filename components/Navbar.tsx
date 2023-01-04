import React, { useRef, useEffect } from "react";
import anime from "animejs";
type Props = {};

const Navbar = (props: Props) => {
  const navbarRef = useRef<HTMLUListElement>(null);
  const navLinks = ["About", "Projects", "Contact"];
  useEffect(() => {
    if (navbarRef.current) {
      anime({
        targets: navbarRef.current.childNodes,
        translateY: ["-200%", "0"],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 100 }),
        duration:300,
        easing:'cubicBezier(.5, .05, .1, .3)'
      });
    }
  }, []);
  return (
    <section className=" z-50 flex justify-between items-center overflow-hidden py-2 bg-gradient-to-b from-black via-black sticky top-0 text-textDark">
      <img className="h-16 w-16 scale-125" src="/images/icon.png" alt="icon" />
      <ul ref={navbarRef} className="items-center pr-4 hidden md:flex">
        {navLinks.map((link, i) => (
          <a className="opacity-0" key={i}>
            <li className="cursor-pointer hover:text-textBlue transition-colors duration-150 group px-4">
              <text className="font-bold text-textBlue font-mono group-hover:text-textDark duration-150 transition-colors">
                0{i + 1}.
              </text>
              <text>{link}</text>
            </li>
          </a>
        ))}
        <li className="opacity-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1QesAw0MQ0Te84yuPx1ohSSCTm4SjBehV/view"
          >
            <button className=" py-2 px-3 border-2 border-textBlue text-textBlue font-bold rounded-md hover:text-textWhite transition-colors duration-300 hover:bg-textBlue">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
