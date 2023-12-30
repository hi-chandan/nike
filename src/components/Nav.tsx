import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../components/index";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="padding-x bg-pink-200 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className=" flex flex-1 max-lg:hidden justify-center   gap-16 ">
          {navLinks.map((val) => (
            <li key={val.label}>
              <a
                href={val.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {val.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
