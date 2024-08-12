import React from "react";
import heroBg from "../Assets/bg-intro-desktop.svg";
import heroImage from "../Assets/image-mockups.png";
import mobileHeroBg from "../Assets/bg-intro-mobile.svg"

const Hero = () => {
  return (
    <section className="bg-gray-100/50 w-full h-[680px] lg:relative">
      <div className="w-10/12 mx-auto flex flex-col-reverse items-center pt-28  lg:flex  lg:w-8/12 lg:items-start lg:mx-auto lg:py-20 md:py-10">
        <div className=" mt-56 flex flex-col items-center  gap-6 md:items-start md:pt-20 md:mt-0 md-w-full lg:w-1/2 md:gap-12">
          <h1 className="text-4xl  text-slate-700 text-center font-publicSans md:w-96 md:text-5xl md:text-start ">
            Next generation digital banking
          </h1>
          <p className="text-slate-400 font-semibold md:w-8/12 lg:w-9/12 font-publicSans md:text-start">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="bg-gradient-to-r from-lime-400 to-cyan-400 w-52 rounded-full text-white font-bold py-3">
            Request Invite
          </button>
        </div>
        <div>
          <img
            src={heroBg}
            className="hidden absolute  h-auto md:-right-[450px] md:-top-64 md:block"
          />
        </div>
        <div>
          <img
            src={mobileHeroBg}
            className="absolute right-0 w-full -top-9 md:hidden"
          />
        </div>
        {/* Phone MockUp */}
        <div className="absolute w-11/12 -top-20 md:absolute md:-top-8 md:w-7/12 lg:absolute lg:-top-32 md:-right-52 lg:-right-28 lg:w-auto">
          <img src={heroImage} alt=""  className=""/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
