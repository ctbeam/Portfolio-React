import React from "react";
import "../footer/footer.css";

function Footer(props) {
  return (
    <nav className="navbar bottom navbar-dark">
      <a
        className="nav-link"
        href={props.href}
        download="Cameron-Beam2020Resume"
        target="_blank"
      >
        Download Resume
      </a>
    </nav>
  );
}

export default Footer;
