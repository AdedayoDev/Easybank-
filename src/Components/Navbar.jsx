import React, { useState } from "react";
import logo from "../Assets/logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow relative z-20">
      <div className="w-10/12 mx-auto py-4 flex justify-between items-center md:py-7 md:w-8/12 md:gap-3 lg:gap-0">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex lg:flex">
          <ul className="flex items-center gap-12 font-publicSans text-slate-500 md:gap-4 lg:gap-12">
            {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
              <li key={item} className="relative group">
                <a href="#" className="hover:text-slate-700">
                  {item}
                </a>
                <div className="absolute left-0 w-0 h-1 bg-gradient-to-r from-lime-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            {/* Hamburger Icon */}
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-slate-500 transform rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <button className="hidden text-center bg-gradient-to-r from-lime-400 to-cyan-400 w-52 rounded-full text-white font-bold py-3 md:block lg:block md:py-2 lg:py-3">
          Request Invite
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 rounded-lg left-0 w-full bg-white shadow-lg p-5">
          <ul className="flex flex-col items-start space-y-4 font-publicSans text-slate-500">
            {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
              <li key={item}>
                <a href="#" className="block w-full hover:text-slate-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
