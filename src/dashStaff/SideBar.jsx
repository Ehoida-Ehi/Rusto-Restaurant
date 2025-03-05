import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaListAlt, FaSignOutAlt } from 'react-icons/fa';
import { MdTableRestaurant, MdMenuBook } from "react-icons/md";
import { BsCardHeading } from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai'; 
import { GiMoneyStack } from "react-icons/gi";

function SideBar() {
  return (
    <div className='flex pl-10 flex-col gap-6'>
      {/* Rusto Restaurant Heading and Profile Image */}
      <div className="text-center">
        <h3 className="text-2xl mt-2 font-bold text-black mb-2 text-center">
          <span className="text-orange-500">Rusto</span> Restaurant 
        </h3>
        <div className="relative w-20 h-20 mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/02/59/girl-1866959_1280.jpg"
            alt="Staff"
            className="w-20 h-20 rounded-full object-cover"
          />
          <Link to="/dashstaff/view-profile">
            <AiOutlineEye
              size={20}
              className="absolute bottom-1 right-1 bg-orange-500 p-1 rounded-full text-gray-600 shadow-lg cursor-pointer hover:text-gray-800"
            />
          </Link>
        </div>
        <p className="mt-2 text-lg font-medium">Hello Jane</p>
      </div>

      <Link to=''>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <FaTachometerAlt size={22} className="inline mr-2" /> Staff Dashboard
        </button>
      </Link>

      <Link to='/dashstaff/order-dish'>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <MdMenuBook size={22} className="inline mr-2" /> Order Management
        </button>
      </Link>

      <Link to='/dashstaff/table-manger'>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <MdTableRestaurant size={22} className="inline mr-2" /> Table Management
        </button>
      </Link>

      <Link to='/dashstaff/view-menu'>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <FaListAlt size={22} className="inline mr-2" /> View Menu
        </button>
      </Link>

      <Link to='/dashstaff/all-staff'>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <BsCardHeading size={22} className="inline mr-2" /> Booking Card 
        </button>
      </Link>

      <Link to='/dashstaff/restaurant-bill'>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md'>
          <GiMoneyStack size={22} className="inline mr-2" /> Restaurant Bill
        </button>
      </Link>

      <button className="w-40 bg-transparent text-black py-1 px-2 hover:bg-orange-500 flex items-center rounded-md">
        <FaSignOutAlt size={22} className="inline mr-2" /> Log Out
      </button>
    </div>
  );
}

export default SideBar;




