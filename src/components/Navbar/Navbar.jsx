import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleNavIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-slate-400 p-3">
      <div className="mx-10">
        {/* Logo or Menu Icon */}
        <button
          onClick={ToggleNavIcon}
          className="text-3xl md:hidden"
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="md:flex md:justify-between items-center md:mx-10">
          {/* Navigation Links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center space-y-3 md:space-y-0 md:mb-0 mb-3 md:space-x-5 md:text-1xl `}
          >
            <li>
              <a href="#home" className="hover:text-slate-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-slate-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-slate-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#teachers" className="hover:text-slate-600">
                Teachers
              </a>
            </li>
          </ul>

          {/* Authentication Links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center transition ease-in-out delay-150 space-y-3 md:space-y-0 md:space-x-5 md:text-1xl`}
          >
            <li>
              <a href="#login" className="hover:text-slate-600">
                Log in
              </a>
            </li>
            <li>
              <a href="#signin" className="hover:text-slate-600">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
