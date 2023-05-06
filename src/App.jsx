import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import PriceList from "./components/PriceList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import LanguageSwitch from "./components/LanguageSwitch";
import Kranio from "./components/Kranio";

function App() {
  return (
    <>
      <LanguageSwitch />
      <Navbar />
      <Hero />
      <About />
      <Kranio />
      <Qualification />
      <PriceList />
      <Contact />
      <ToTop />
      <Footer />
    </>
  );
}

export default App;
