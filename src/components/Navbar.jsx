import { useState } from "react";
import { texts } from "../data";
import sakaraIcon from "../assets/Sakara.svg";
import { Link, animateScroll } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import LanguageSwitch from "./LanguageSwitch";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { selectedLanguage } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <nav className="navbar">
      <img src={sakaraIcon} alt="sk" id="sk" />
      <button className="navbar-toggle" onClick={toggleNav}>
        <HiMenu />
      </button>

      <div className={`navbar-list ${showNav ? "show" : ""}`}>
        {texts[selectedLanguage].links.map((link) => (
          <Link
            key={link.id}
            className={`navbar-link ${showNav ? "show" : ""}`}
            activeClass="active"
            to={link.url}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNav}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <LanguageSwitch />
    </nav>
  );
};
export default Navbar;
