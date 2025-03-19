import React from "react";
import ForIndividuals from "../Components/ProductsAndServices/ForIndividuals";
import ForBusinesses from "../Components/ProductsAndServices/ForBusinesses";
import ForDevelopers from "../Components/ProductsAndServices/ForDevelopers";

const ProductsPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold">Our Products & Services</h1>
        <p className="text-lg mt-4">Discover how Apaay is revolutionizing finance across Africa.</p>
      </header>
      <ForIndividuals />
      <ForBusinesses />
      <ForDevelopers />
    </div>
  );
};

export default ProductsPage;
