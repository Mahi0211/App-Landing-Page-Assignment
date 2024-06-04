import icons from "../icons";
import { navLinks } from "../constants";

const NavBar = () => {
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
        <ul className="flex flex-1 items-center justify-center gap-[24px] max-lg:hidden">
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
      <button className="h-[60px] w-[180px] rounded-[4px] bg-black font-clashDisplayMedium text-[18px] leading-[28px] text-white">
        Download
      </button>
    </nav>
  );
};

export default NavBar;
