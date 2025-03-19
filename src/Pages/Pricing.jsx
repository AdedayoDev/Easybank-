import React from "react";
import IndividualPlans from "../Components/Pricing/IndividualPlans";
import BusinessPlans from "../Components/Pricing/BusinessPlans";
import ComingSoon from "../Components/Pricing/ComingSoon";

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-lg mt-4">Choose the best plan that suits your needs.</p>
      </header>
      <IndividualPlans />
      <BusinessPlans />
      <ComingSoon />
    </div>
  );
};

export default Pricing;
