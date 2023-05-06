import { useState } from "react";
import { texts } from "../data";
import { Link, animateScroll } from "react-scroll";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { selectedLanguage } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Sabrina Karavarsami</div>
      <button className="navbar-toggle" onClick={toggleNav}>
        <i className="fa fa-bars"></i>
      </button>
      <div className={`navbar-links ${showNav ? "show" : ""}`}>
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
    </nav>
  );
};
export default Navbar;
