import React from "react";
import { FaWallet, FaCreditCard, FaExchangeAlt, FaReceipt, FaPiggyBank } from "react-icons/fa";

const services = [
  { icon: <FaWallet className="text-blue-500 text-4xl" />, title: "Multi-Currency Accounts", description: "Hold and manage funds in NGN, GHS, KES, USD, EUR and more." },
  { icon: <FaCreditCard className="text-green-500 text-4xl" />, title: "Physical & Virtual Cards", description: "Shop online and offline globally with ease." },
  { icon: <FaExchangeAlt className="text-red-500 text-4xl" />, title: "Cross-Border Transfers", description: "Send money to family and friends across Africa." },
  { icon: <FaReceipt className="text-yellow-500 text-4xl" />, title: "Bill Payments", description: "Pay for utilities and services in multiple countries." },
  { icon: <FaPiggyBank className="text-purple-500 text-4xl" />, title: "Savings", description: "Set aside funds with competitive interest rates." },
];

const ForIndividuals = () => {
  return (
    <section className="w-10/12 mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">For Individuals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 duration-300">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForIndividuals;
