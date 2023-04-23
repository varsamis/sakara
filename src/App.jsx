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

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <PriceList />
      <Contact />
      <ToTop />
      <Footer />
    </>
  );
}

export default App;
