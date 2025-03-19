import React from "react";
import { FaBuilding, FaUsers, FaMoneyCheckAlt, FaChartBar, FaExchangeAlt, FaCreditCard } from "react-icons/fa";

const businessServices = [
  { icon: <FaBuilding className="text-blue-500 text-4xl" />, title: "Business Accounts", description: "Dedicated accounts for your business operations." },
  { icon: <FaUsers className="text-green-500 text-4xl" />, title: "Expense Management", description: "Issue cards to employees with spending controls." },
  { icon: <FaMoneyCheckAlt className="text-red-500 text-4xl" />, title: "Bulk Payments", description: "Pay suppliers, partners, and employees across borders." },
  { icon: <FaCreditCard className="text-yellow-500 text-4xl" />, title: "Payment Collection", description: "Accept payments from customers across Africa." },
  { icon: <FaExchangeAlt className="text-purple-500 text-4xl" />, title: "FX Management", description: "Lock in exchange rates to manage currency risk." },
  { icon: <FaChartBar className="text-cyan-500 text-4xl" />, title: "Financial Analytics", description: "Gain insights into your business finances." },
];

const ForBusinesses = () => {
  return (
    <section className="w-10/12 mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">For Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {businessServices.map((service, index) => (
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

export default ForBusinesses;
