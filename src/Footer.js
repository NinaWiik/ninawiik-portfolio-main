import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-blush text-[#21262B] font-bold py-6">
      <div className="container mx-auto text-center">
        <ul className="flex flex-col justify-center lg:flex-row lg:justify-center space-y-2 lg:space-x-6 lg:space-y-0">
          <li>
            <Link to="/" className="text-lg hover:text-teal-dark" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-teal-dark" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-lg hover:text-teal-dark" onClick={scrollToTop}>
              The Photoshoot
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg hover:text-teal-dark" onClick={scrollToTop}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-teal-dark" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-sm mt-4 text-[#21262B]">© {new Date().getFullYear()} Nina Wiik - Orgnr: 933164268</p>
      </div>
    </footer>
  );
};

export default Footer;
