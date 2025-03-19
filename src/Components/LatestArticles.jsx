import React from "react";
import { FaUserCheck, FaWallet, FaPaperPlane, FaChartBar } from "react-icons/fa";
import { FaExchangeAlt, FaCreditCard, FaBuilding} from "react-icons/fa";

const features = [
  {
    icon: <FaExchangeAlt className="text-blue-500 text-4xl" />,
    title: "Cross-Border Payments",
    description: "Fast and affordable transfers between African countries.",
  },
  {
    icon: <FaCreditCard className="text-green-500 text-4xl" />,
    title: "Digital Banking",
    description: "Virtual and physical cards, local bank accounts in multiple countries.",
  },
  {
    icon: <FaBuilding className="text-purple-500 text-4xl" />,
    title: "Business Solutions",
    description: "Expense management, bulk payments, and APIs for seamless integration.",
  },
  {
    icon: <FaWallet className="text-yellow-500 text-4xl" />,
    title: "Multi-Currency Wallets",
    description: "Hold and convert between major African currencies and USD/EUR.",
  },
];

const LatestArticles = () => {
  return (
    <section className="w-10/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;

const steps = [
  {
    icon: <FaUserCheck className="text-white text-2xl" />,
    title: "Sign Up",
    description: "Create your Apaay account in minutes with simple KYC verification.",
  },
  {
    icon: <FaWallet className="text-white text-2xl" />,
    title: "Fund Your Account",
    description: "Add money via bank transfer, card, or mobile money.",
  },
  {
    icon: <FaPaperPlane className="text-white text-2xl" />,
    title: "Send & Receive",
    description: "Transfer funds across borders at competitive rates.",
  },
  {
    icon: <FaChartBar className="text-white text-2xl" />,
    title: "Manage",
    description: "Track expenses, create budgets, and monitor your financial health.",
  },
];

export const HowItWorks = () => {

return (
  <section className="w-10/12 mx-auto my-12">
  <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
  <div className="relative border-l-4 border-gray-300 pl-6">
    {steps.map((step, index) => (
      <div key={index} className="mb-8 flex items-start">
        {/* Timeline Circle */}
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full text-white -ml-[40px]">
          {step.icon}
        </div>
        {/* Text Content */}
        <div className="ml-6">
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
)
} 
