import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../components/index";
import { hamburger } from "../assets/icons";
const Nav = () => {
  const [usenav, setnav] = useState(false);

  return (
    <header className="fixed padding-x bg-pink-200 py-8  z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className=" flex flex-1 max-lg:hidden justify-center   gap-16 ">
          {navLinks?.map((val, index) => (
            <li key={index}>
              <a
                href={val.href}
                className="font-montserrat leading-normal text-lg text-slate-700 font-bold"
              >
                {val.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setnav(!usenav)}
          />
        </div>
      </nav>
      {usenav ? (
        <div className="flex flex-col gap-2 mt-6">
          {navLinks?.map((val, index) => (
            <li className="list-none" key={index}>
              <a
                href={val.href}
                onClick={() => setnav(!usenav)}
                className="font-montserrat leading-normal text-lg text-slate-800 font-bold"
              >
                <button className=" w-full">{val.label}</button>
              </a>
            </li>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default Nav;
