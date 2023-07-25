import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
      <Navbar />
      {/*<Home />*/}
      <About />
      <Kranio />
      <Qualification />
      <PriceList />
      {/*<Contact />*/}
      <ToTop />
      <Footer />
    </>
  );
}

export default App;
