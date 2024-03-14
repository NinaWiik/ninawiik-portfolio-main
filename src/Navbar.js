import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/NW normal.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsNavOpen(false);
  };

  // Disable scrolling on the body when the mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  return (
    <div className="bg-blush p-4 flex justify-between items-center">
      <a href="/">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="h-24 w-auto mr-2" src={logo} alt="Logo" />
        </div>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {/* Links on the right */}
              <Link to="/" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2" onClick={closeMenu}>
                About
              </Link>
              <Link to="/pricing" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2" onClick={closeMenu}>
                The Photoshoot
              </Link>
              <Link to="/gallery" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2" onClick={closeMenu}>
                Portfolio
              </Link>
              <Link to="/contact" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2" onClick={closeMenu}>
                Contact
              </Link>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {/* Links on the right */}
          <div className={`sm:flex ${isNavOpen ? 'block' : 'hidden'} mt-4 sm:mt-0`}>
            <Link to="/" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline" onClick={closeMenu}>About</Link>
            <Link to="/pricing" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline" onClick={closeMenu}>The Photoshoot</Link>
            <Link to="/gallery" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline" onClick={closeMenu}>Portfolio</Link>
            <Link to="/contact" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline" onClick={closeMenu}>Contact</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
