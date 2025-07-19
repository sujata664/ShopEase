import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faCubesStacked, faArrowTrendUp,faBox, faCartShopping, faStar,faRotateLeft ,faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-slate-100 text-black w-20 sm:w-56   h-screen flex flex-col items-center sm:items-center justify-center py-4">
     <div> <img src='/image/logo1.png' /></div>
      {/* Home Link */}
      <NavLink to="/" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Home</span>
      </NavLink>

      <NavLink to="/product" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faBox} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Product</span>
      </NavLink>

      
      <NavLink to="/Stock" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faCubesStacked} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Stock</span>
      </NavLink>

     
      <NavLink to="/Earning" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faArrowTrendUp} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Earning</span>
      </NavLink>

   
      <NavLink to="/order" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faCartShopping} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Orders</span>
      </NavLink>

      {/* Carousal Link */}
      <NavLink to="/review" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faStar} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Review</span>
      </NavLink>

      {/* Contact Info Link */}
      <NavLink to="/contact" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
        <FontAwesomeIcon icon={faAddressBook} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Contact Info</span>
      </NavLink>

      <NavLink to="/return" className="mb-8 sm:mb-4 flex flex-col items-center sm:items-center">
      <FontAwesomeIcon icon={faRotateLeft} size="lg" />
        <span className="sm:block hidden text-sm mt-2">Return</span>
      </NavLink>

    </div>
  );
}

export default Sidebar;
