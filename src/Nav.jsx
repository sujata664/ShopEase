import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faTimes,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when a nav link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white font-bold h-14 flex justify-end items-center px-4">
  
  <p >
    ✨Where Style Meets Savings, Every Day.✨
  
</p>

      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-xl h-24" ref={menuRef}>
        <div className="container px-4 py-4  flex justify-between items-center">
          {/* Logo */}
         <NavLink to="/"> <img src="/image/new.png" alt="logo" className="h-18 w-32 cursor-pointer mr-4" /></NavLink>

          {/* Navigation and Hamburger */}
          <div className="flex items-center">
            {/* Navigation Links */}
            <ul
              className={`md:flex md:space-x-4 ${
                isOpen ? "block" : "hidden"
              } absolute md:static bg-white shadow-2xl w-full md:w-auto left-0 top-16 md:top-auto my-24 md:my-0 z-10 md:z-auto pb-5 p-5 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0`}
            >


            <li>
            <div className="flex items-center  border border-transparent hover:border-2 hover:border-blue-900 rounded-lg">
            <select className="w-12 py-2 rounded-md border-none">
                          <option>ALL</option>
                          <option>Clothes</option>
                          <option>Bags</option>
                          <option>Skincare</option>
                          <option>Footwear</option>
                          <option>Acessories</option>
                          <option>Kithchen Items</option>
                        </select>
                <input 
                type="text" 
                id="search" 
                placeholder="Search" 
                className="bg-gray-200 rounded-l-lg p-2  w-11/12 focus:outline-none"
                />
                <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="bg-yellow-500 p-3 rounded-r-md cursor-pointer"
                onClick={closeMenu} />
            </div>
            </li>


              <li>
                <NavLink
                  to="/about"
                  className=" hover:text-blue-900 py-1 lg:mx-3 md:py-0"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li>
              <NavLink
                to="/contactus"
                className="hover:text-blue-900 py-1 lg:mx-3 md:py-0 whitespace-nowrap"
                onClick={closeMenu}
                >
                Contact Us
                </NavLink>
                </li>

                <li>
              <NavLink
                to="/products"
                className="hover:text-blue-900 py-1 lg:mx-3 md:py-0 whitespace-nowrap"
                onClick={closeMenu}
                >
                Products
                </NavLink>
                </li>
                
                <li>
                <NavLink
                  to="/cart"
                  className=" hover:text-blue-900 py-1 lg:mx-3 md:py-0 whitespace-nowrap"
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon={faCartShopping} className="text-xl mx-1 "/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Logsin"
                  className="bg-slate-800 text-white font-bold px-6 py-2 lg:mx-3 rounded-full hover:bg-slate-900 transition duration-300 transform hover:-translate-y-2 md:inline-flex justify-center items-center"
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>
             
            </ul>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-white bg-slate-800 rounded-full px-4 py-3 focus:outline-none text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
