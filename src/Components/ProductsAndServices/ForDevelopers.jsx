import React from "react";
import { FaCode, FaServer, FaBell, FaBookOpen } from "react-icons/fa";

const developerServices = [
  { icon: <FaCode className="text-blue-500 text-4xl" />, title: "Payment APIs", description: "Integrate Apaay's payment capabilities into your platform." },
  { icon: <FaServer className="text-green-500 text-4xl" />, title: "Banking APIs", description: "Access account features programmatically." },
  { icon: <FaBell className="text-red-500 text-4xl" />, title: "Webhooks", description: "Real-time notifications for financial events." },
  { icon: <FaBookOpen className="text-yellow-500 text-4xl" />, title: "Developer Resources", description: "Documentation, SDKs, and support." },
];

const ForDevelopers = () => {
  return (
    <section className="w-10/12 mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">API & Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developerServices.map((service, index) => (
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

export default ForDevelopers;
