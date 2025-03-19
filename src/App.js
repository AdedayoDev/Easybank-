import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Pages/About";
import ProductAndServices from "./Pages/ProductAndServices";
import Pricing from "./Pages/Pricing";
import Support from "./Pages/Support";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/products-and-services" element={<ProductAndServices />} />
        <Route path="/pages/pricing" element={<Pricing />} />
        <Route path="/pages/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
