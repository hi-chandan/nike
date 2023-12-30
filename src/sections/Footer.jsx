import React from "react";
import { footerLinks, socialMedia } from "../components";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-evenly items-start">
        <img src={footerLogo} alt="footerlog" width={160} height={30} />
        <p className="mt-4 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect in Store. Get Rewards.
        </p>
        <div className="flex gap-6 ">
          {socialMedia.map((social) => (
            <div className="flex justify-center p-2 bg-white items-center rounded-full mt-3">
              <img
                src={social.src}
                alt="socialmedia"
                width={30}
                height={30}
                className=""
              />
            </div>
          ))}
        </div>
        <div className="flex max-sm:grid max-sm:grid-cols-2 flex-1 gap-20 flex-wrap mt-6">
          {footerLinks.map((section) => (
            <div className="">
              <h3 className="mb-2 max-sm:text-2xl text-3xl font-bold">
                {" "}
                {section.title}
              </h3>
              {section.links.map((link) => (
                <div className="mb-1">
                  <ul>
                    <li>
                      <a href="/">{link.name}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
