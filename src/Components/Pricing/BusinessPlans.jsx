import React from "react";
import { FaRocket, FaChartLine, FaBuilding } from "react-icons/fa";

const plans = [
  { icon: <FaRocket className="text-blue-500 text-4xl" />, title: "Startup", price: "coming soon", description: "For small businesses and entrepreneurs." },
  { icon: <FaChartLine className="text-green-500 text-4xl" />, title: "Growth", price: "coming soon", description: "For medium-sized businesses with growing transactions." },
  { icon: <FaBuilding className="text-purple-500 text-4xl" />, title: "Enterprise", price: "coming soon", description: "Custom solutions for large organizations." },
];

const BusinessPlans = () => {
  return (
    <section className="w-10/12 mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Business Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 duration-300">
            <div className="mb-4">{plan.icon}</div>
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <p className="text-gray-700 font-bold">{plan.price}</p>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessPlans;
