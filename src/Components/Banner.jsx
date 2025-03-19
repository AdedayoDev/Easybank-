import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Early access to the Apaay platform",
  "Zero fees on your first 5 international transfers",
  "Dedicated onboarding support",
];

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-lime-900 to-cyan-400 text-white py-12 px-6 text-center">
      <div className="w-10/12 md:w-8/12 mx-auto">
        <h2 className="text-3xl font-bold mb-4 leading-tight">
          Be Among the First to Experience Borderless Banking
        </h2>
        <p className="text-lg mb-6">
          Join our exclusive launch list and receive:
        </p>

        {/* Improved List Layout */}
        <ul className="text-md mb-6 space-y-4 text-left md:text-center">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center justify-center gap-3">
              <FaCheckCircle className="text-white text-lg flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <button className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
};

export default Banner;
