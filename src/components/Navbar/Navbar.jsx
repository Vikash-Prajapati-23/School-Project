import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleNavIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-slate-300 p-3 sticky top-0 z-10 shadow-md">
      <div className="">
        <button
          onClick={ToggleNavIcon}
          className="text-3xl md:ms-[20%] md:hidden"
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="md:flex md:justify-between items-center md:mx-[30px] mx-[5%] ">
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center space-y-3 md:space-y-0 md:mb-0 mb-3 md:space-x-5 md:text-1xl `}
          >
            <li>
              <a href="/" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                About
              </a>
            </li>
            <li>
              <a href="/Classes" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Classes
              </a>
            </li>
            <li>
              <a href="/Teachers" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Teachers
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/addmission" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Addmission
              </a>
            </li>
          </ul>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center transition ease-in-out delay-150 space-y-3 md:space-y-0 md:space-x-5 md:text-1xl`}
          >
            <li>
              <a href="/login" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Log in
              </a>
            </li>
            <li>
              <a href="/signin" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Sign in
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
