import React from "react";
import WhyEasyBankProps from "../Props/WhyEasyBankProps";
import image1 from "../Assets/icon-online.svg";
import image2 from "../Assets/icon-budgeting.svg";
import image3 from "../Assets/icon-onboarding.svg";
import image4 from "../Assets/icon-api.svg";

const WhyEasyBank = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="w-10/12 mx-auto flex flex-col items-center gap-10 md:items-center m:w-10/12 lg:w-8/12 md:py-20 lg:items-start">
        <h1 className="font-publicSans text-3xl text-center md:text-left">
          Why choose Easybank?
        </h1>
        <p className="text-slate-400  text-center text-lg font-normal font-publicSans md:w-8/12 md:text-start">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <article className="w-10/12 mx-auto grid gap-12 md:grid-cols-2 md:w-8/12 lg:grid-cols-4">
        <WhyEasyBankProps
          backgroundImage={image1}
          h1="Online Banking"
          p="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <WhyEasyBankProps
          backgroundImage={image2}
          h1="Online Banking"
          p="See exactly where your money goes each month. Get notifications when you're close to your hitting limits."
        />
        <WhyEasyBankProps
          backgroundImage={image3}
          h1="Simple Budgeting"
          p="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <WhyEasyBankProps
          backgroundImage={image4}
          h1="Online Banking"
          p="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
      </article>
    </section>
  );
};

export default WhyEasyBank;
