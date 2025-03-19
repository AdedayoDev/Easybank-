import React from "react";

const OurStory = () => {
  return (
    <section className="w-10/12 mx-auto py-16 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Our Story
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Apaay was founded with a simple mission: to make cross-border financial 
          transactions in Africa as easy as local ones. Our team of financial experts 
          and technology innovators recognized the challenges faced by businesses and 
          individuals when sending money across African borders - high fees, long delays, 
          and complicated processes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Built on robust infrastructure and powered by cutting-edge technology, Apaay 
          offers a comprehensive suite of financial tools designed specifically for the 
          African market. We're committed to financial inclusion and economic empowerment 
          across the continent.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
