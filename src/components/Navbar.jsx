import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-left">
            <h1 className="text-orange-500 text-lg font-bold">Rusto</h1>
            <p className="text-white text-sm -mt-1">Restaurant</p>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-amber-600 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu-and-order" className="text-white hover:text-amber-600 relative group">
              Menu & Order
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu-and-order" className="text-white hover:text-amber-600 relative group">
              Book Reservation
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about-us" className="text-white hover:text-amber-600 relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" className="text-white hover:text-amber-600 relative group">
              Gallery
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gift-vouchers" className="text-white hover:text-amber-600 relative group">
              Gift Vouchers
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white hover:text-amber-600 relative group">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* Login and Signup */}
          <div className="text-white">
            <Link to="/SignIn" className="hover:text-amber-600">Sign in</Link>
            <span className="mx-2">|</span>
            <Link to="/RegForm" className="hover:text-amber-600">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

