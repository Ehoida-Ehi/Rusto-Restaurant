import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { CiShoppingBasket } from "react-icons/ci";

const Navigatebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                        <Link to="/" className="text-white hover:text-amber-600 relative group">
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/ShopMenu" className="text-white hover:text-amber-600 relative group">
                            Menu & Order
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/Booking" className="text-white hover:text-amber-600 relative group">
                            Book Reservation
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/Contact" className="text-white hover:text-amber-600 relative group">
                            Contact Us
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Notification and Profile */}
                    <div className="flex items-center space-x-4 text-white relative">
                        {/* Cart Icon */}
                        <div className="relative">
                            <Link to="/Cart">
                                <CiShoppingBasket
                                    size={28}
                                    className="text-gray-400 hover:text-gray-200 cursor-pointer"
                                />
                            </Link>
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-950"></span>
                        </div>


                        {/* Notification Icon */}
                        <div className="relative">
                            <IoNotificationsOutline
                                size={28}
                                className="text-gray-400 hover:text-gray-200 cursor-pointer"
                            />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-950"></span>
                        </div>

                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2022/12/06/23/28/girl-7639878_1280.jpg"
                                alt="Profile"
                                className="w-10 h-9 rounded-full cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            />
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-slate-950 shadow-lg border border-gray-300 rounded-lg w-60 z-50">
                                    <div className="p-4">
                                        <p className="font-bold text-white">Anime</p>
                                        <p className="text-sm text-white">Senpai</p>
                                    </div>
                                    <hr className="my-2 border-gray-300" />
                                    <ul className="flex flex-col space-y-4 px-4">
                                        <li>
                                            <Link
                                                to="OrderHistory"
                                                className="text-white hover:text-orange-500 hover:underline"
                                            >
                                                Order History
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link
                                                to="/WishList"
                                                className="text-white hover:text-orange-500 hover:underline"
                                            >
                                                Wish List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/ReviewPage"
                                                className="text-white hover:text-orange-500 hover:underline"
                                            >
                                                Reviews
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/Booking"
                                                className="text-white hover:text-orange-500 hover:underline"
                                            >
                                                Book Table
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/Contact"
                                                className="text-white hover:text-orange-500 hover:underline"
                                            >
                                                Contact Us 
                                            </Link>
                                        </li>
                                    </ul>
                                    <hr className="my-2 border-gray-300" />
                                    <div className="px-4 pb-4">
                                        <Link
                                            to="/SignIn"
                                            className="text-white hover:text-orange-500 hover:underline"
                                        >
                                            Sign Out
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigatebar;
