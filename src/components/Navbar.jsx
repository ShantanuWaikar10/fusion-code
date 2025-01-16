import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : ""
        } flex justify-center px-3 bg-black text-white py-3 text-base cursor-pointer hover:underline`}
      >
        <p>
          Enjoy complimentary shipping and a pack of red envelopes with every
          deliver-to-door orders over HKD 900 by entering NY25 at checkout.
          &nbsp; &nbsp; &nbsp; +
        </p>
      </div>
      <nav className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="font-semibold hidden lg:block">
            <a className="mx-2" href="#home">
              New & Notable
            </a>
            <a className="mx-2" href="#home">
              Skin Care
            </a>
            <a className="mx-2" href="#home">
              Hand & Body
            </a>
            <a className="mx-2" href="#home">
              Home
            </a>
            <a className="mx-2" href="#home">
              Hair
            </a>
            <a className="mx-2" href="#home">
              Fragrance
            </a>
            <a className="mx-2" href="#home">
              Kits & Travel
            </a>
            <a className="mx-2" href="#home">
              Gifts
            </a>
            <a className="mx-2" href="#home">
              Read
            </a>
            <a className="mx-2" href="#home">
              Stores
            </a>
            <a className="mx-2" href="#home">
              Facial Appointments
            </a>
          </div>

          {/* Links */}
          <ul
            className={`hidden md:flex space-x-6  ${
              isMobileMenuOpen ? "block" : ""
            }`}
          >
            <li>
              <a className="font-semibold" href="#home">
                Log in
              </a>
            </li>
            <li>
              <a className="font-semibold" href="#home">
                Cabinet
              </a>
            </li>
            <li>
              <a className="font-semibold" href="#home">
                Cart
              </a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="absolute right-4">
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden bg-white mt-5 space-y-4 text-lg p-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a className="block ">New & Notable</a>
          </li>
          <li>
            <a className="block">Skin Care</a>
          </li>
          <li>
            <a className="block">Hand & Body</a>
          </li>
          <li>
            <a className="block">Home</a>
          </li>
          <li>
            <a className="block">Hair</a>
          </li>
          <li>
            <a className="block">Fragrance</a>
          </li>
          <li>
            <a className="block">Kits & Travel</a>
          </li>
          <li>
            <a className="block">Gift</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
