import { useState } from "react";
import { links } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  const handleLinkClick = (event, url) => {
    event.preventDefault();
    console.log(url);
    window.history.pushState(null, "", `#${url}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <button className="navbar-toggle" onClick={toggleNav}>
        <i className="fa fa-bars"></i>
      </button>
      <div className={`navbar-links ${showNav ? "show" : ""}`}>
        {links.map((link) => (
          <Link key={link.id} className="nav-link" to={`/${link.url}`}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
