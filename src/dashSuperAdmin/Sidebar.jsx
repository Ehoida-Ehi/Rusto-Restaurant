import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaListAlt, FaSignOutAlt } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import { BsCardHeading } from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai'; 
import { GiMoneyStack } from "react-icons/gi";

function Sidebar() {
  return (
    <div className='flex pl-10 flex-col gap-6'>
      {/* Rusto Restaurant Heading and Profile Image */}
      <div className="text-center">
        <h3 className="text-2xl mt-2 font-bold text-white mb-2 text-center">
          <span className="text-orange-500">Rusto</span> Restaurant 
        </h3>
        <div className="relative w-20 h-20 mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2019/03/05/05/45/man-4035612_1280.jpg"
            alt="SuperAdmin"
            className="w-20 h-20 rounded-full object-cover"
          />
          <Link to="#">
            <AiOutlineEye
              size={20}
              className="absolute bottom-1 right-1 bg-orange-500 p-1 rounded-full text-black shadow-lg cursor-pointer hover:text-gray-800"
            />
          </Link>
        </div>
        <p className="mt-2 text-lg text-white font-medium">Hello, Boss</p>
      </div>

      <Link to=''>
        <button className='bg-orange-500 text-black py-1 px-2 hover:bg-white flex items-center rounded-md'>
          <FaTachometerAlt size={22} className="inline mr-2" /> Super Admin Dash
        </button>
      </Link>

      <Link to='/dashSuperAdmin/view-all'>
        <button className='bg-orange-500 w-40 text-black py-1 px-2 hover:bg-white flex items-center rounded-md'>
        <IoIosPeople  size={22} className="inline mr-2" /> View All Admins
        </button>
      </Link>

      <Link to='/dashSuperAdmin/view-branch'>
        <button className='bg-orange-500 w-40 text-black py-1 px-2 hover:bg-white flex items-center rounded-md'>
          <BsCardHeading size={22} className="inline mr-2" /> View Branches
        </button>
      </Link>

      <Link to='/dashSuperAdmin/branch-revenue'>
        <button className='bg-orange-500 w-40 text-black py-1 px-2 hover:bg-white flex items-center rounded-md'>
          <GiMoneyStack size={22} className="inline mr-2" /> Branch Revenue
        </button>
      </Link>

      <button className="w-40 bg-orange-500 text-black py-1 px-2 hover:bg-white flex items-center rounded-md">
        <FaSignOutAlt size={22} className="inline mr-2" /> Log Out
      </button>
    </div>
  );
}

export default Sidebar;