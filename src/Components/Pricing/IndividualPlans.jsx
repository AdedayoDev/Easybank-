import React from "react";
import { FaUser, FaUserPlus, FaUserTie } from "react-icons/fa";

const plans = [
  { icon: <FaUser className="text-blue-500 text-4xl" />, title: "Basic", price: "Free", description: "Essential features for everyday banking." },
  { icon: <FaUserPlus className="text-green-500 text-4xl" />, title: "Premium", price: "$9.99/month", description: "Enhanced features for regular users." },
  { icon: <FaUserTie className="text-purple-500 text-4xl" />, title: "Exclusive", price: "$29.99/month", description: "Comprehensive features for high-net-worth individuals." },
];

const IndividualPlans = () => {
  return (
    <section className="w-10/12 mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Individual Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 duration-300">
            <div className="mb-4">{plan.icon}</div>
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <p className="text-gray-700 font-bold">{plan.price}</p>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndividualPlans;
