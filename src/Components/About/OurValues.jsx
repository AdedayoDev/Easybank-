import React from "react";
import { FaLock, FaLightbulb, FaUserShield, FaEye, FaUsers } from "react-icons/fa";

const values = [
  { icon: <FaUsers className="text-4xl text-blue-500" />, title: "Accessibility", description: "Making financial services available to all" },
  { icon: <FaEye className="text-4xl text-green-500" />, title: "Transparency", description: "Clear fees and processes with no hidden charges" },
  { icon: <FaLock className="text-4xl text-red-500" />, title: "Security", description: "Bank-grade protection for all transactions and data" },
  { icon: <FaLightbulb className="text-4xl text-yellow-500" />, title: "Innovation", description: "Constantly improving our solutions to meet evolving needs" },
  { icon: <FaUserShield className="text-4xl text-purple-500" />, title: "Customer-Centricity", description: "Building products that solve real problems for Africans" },
];

const OurValues = () => {
  return (
    <section className="w-10/12 mx-auto py-16 text-center animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 duration-300"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
