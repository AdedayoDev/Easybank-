import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import LatestArticles from './Components/LatestArticles';
import Navbar from './Components/Navbar';
import WhyEasyBank from './Components/WhyEasyBank';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyEasyBank />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
