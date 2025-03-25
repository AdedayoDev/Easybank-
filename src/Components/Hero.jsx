import React, {useState} from "react";
import heroBg from "../Assets/bg-intro-desktop.svg";
import heroImage from "../Assets/image-mockups.png";
import mobileHeroBg from "../Assets/bg-intro-mobile.svg";
import ContactForm from "./ContactUs/ContactForm";

const Hero = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  return (
    <section className="bg-gray-100/50 w-full h-[680px] lg:relative">
      <div className="w-10/12 mx-auto flex flex-col-reverse items-center pt-28  lg:flex  lg:w-8/12 lg:items-start lg:mx-auto lg:py-20 md:py-10">
        <div className=" mt-56 flex flex-col items-center  gap-6 md:items-start md:pt-20 md:mt-0 md-w-full lg:w-1/2 md:gap-12">
          <h1 className="text-4xl  text-slate-700 text-center font-publicSans md:w-full md:text-5xl md:text-start ">
            Borderless Banking for African Businesses and Individuals 
          </h1>
          <p className="text-slate-400 font-semibold text-center md:w-8/12 lg:w-9/12 font-publicSans md:text-start">
            Send, receive, and manage money across Africa seamlessly with
            Apaay's comprehensive financial solutions.
          </p>
          <button
            onClick={() => setIsPopUp(true)}
            className="hidden md:block lg:block font-bold text-white text-center bg-gradient-to-r from-cyan-700 to-lime-900 w-52 rounded-full py-3 md:py-2 lg:py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:from-lime-900 hover:to-cyan-700 active:scale-95 shadow-md"
          >
            Get Early Access
          </button>

          <ContactForm isOpen={isPopUp} onClose={() => setIsPopUp(false)} />
        </div>
        <div>
          <img
            src={heroBg}
            className="hidden absolute  h-auto md:-right-[450px] md:-top-72 md:block"
          />
        </div>
        <div>
          <img
            src={mobileHeroBg}
            className="absolute right-0 w-full -top-20 md:hidden"
          />
        </div>
        {/* Phone MockUp */}
        <div className="absolute w-11/12 -top-32 md:absolute md:-top-8 md:w-7/12 lg:absolute lg:-top-48 md:-right-52 lg:-right-28 lg:w-auto">
          <img src={heroImage} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
