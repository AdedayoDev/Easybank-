import React from "react";
import FB from "../Assets/icon-facebook.svg";
import YT from "../Assets/icon-youtube.svg";
import TW from "../Assets/icon-twitter.svg";
import PT from "../Assets/icon-pinterest.svg";
import IG from "../Assets/icon-instagram.svg";
import logo from "../Assets/logo-white.svg.png";
import { Link } from "react-router-dom";

const Items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/pages/about",
  },
  {
    name: "Products & Services",
    href: "/pages/products-and-services",
  },
  {
    name: "Pricing",
    href: "/pages/pricing",
  },
  {
    name: "Support",
    href: "/pages/support",
  },
];

const Footer = () => {
  return (
    <section className="bg-slate-800 w-full h-auto py-16">
      <div className="w-9/12 mx-auto flex flex-col items-center md:flex-row gap-12 md:w-11/12 lg:w-9/12 md:gap-20 lg:gap-0 md:justify-between md:items-start">
        {/* Footer left side */}
        <div className="flex items-start gap-12 lg:gap-28 flex-col md:flex-row md:w-full lg:w-9/12">
          <div className="flex flex-col items-center md:items-start gap-8 lg:gap-[60px] md:gap-[60px]">
            {/* Logo */}
            <div className="w-44">
              <img src={logo} alt="Easybank Logo" className="w-52" />
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <img src={FB} alt="Facebook" />
              <img src={YT} alt="YouTube" />
              <img src={TW} alt="Twitter" />
              <img src={PT} alt="Pinterest" />
              <img src={IG} alt="Instagram" />
            </div>
          </div>
          {/* About us side */}
          <div className="w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2  text-center md:text-start gap-3 text-xl font-publicSans text-white">
              {
                Items.map((items, index) => (
                  <li key={index} className="relative group">
                <Link to={items.href} className="hover:text-slate-200">
                  {items.name}
                </Link>
                
              </li>
                ))
              }
            </ul>
          </div>
        </div>
        {/* Footer Right side */}
        <div className="flex flex-col items-center gap-5">
          <button className="bg-gradient-to-r  from-cyan-700 to-lime-900 w-52 rounded-full text-white font-bold py-3">
            Request Invite
          </button>
          <p className="text-xl text-gray-200/50 text-center md:text-start
          ">
            &copy; Apaay All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
