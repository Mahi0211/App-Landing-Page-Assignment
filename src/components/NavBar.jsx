import { useState } from "react";
import icons from "../icons";
import { navLinks } from "../constants";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mx-[175px] mt-[40px] flex items-center justify-between">
      <div className="flex items-center justify-center gap-[40px]">
        <a href="/" className="flex items-end justify-center gap-[2px]">
          <img src={icons.frame} alt="" className="h-[34px] w-[34px]" />
          <div className="flex">
            <img
              src={icons.vector}
              alt=""
              className="h-[29.26px] w-[65.78px]"
            />
            <h6 className="mt-[5.5px] font-clashDisplayBold text-[4.15px]">
              TM
            </h6>
          </div>
        </a>
        <ul
          className={`flex items-center justify-center gap-[24px] max-lg:hidden ${menuOpen ? "flex" : ""}`}
        >
          {navLinks.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-clashDisplayMedium text-[20px] leading-[26px] ${index === 0 ? "text-[#FF5555]" : "text-black"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger Button */}
      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <button className="h-[60px] w-[180px] rounded-[4px] bg-black font-clashDisplayMedium text-[18px] leading-[28px] text-white">
        Download
      </button>
    </nav>
  );
};

export default NavBar;
