import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import PriceList from "./components/PriceList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ToTop />
      <Footer />
    </>
  );
}

export default App;
