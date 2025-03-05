import React from 'react'
import { Link  } from 'react-router-dom'
import { FaTachometerAlt, FaPlusCircle, FaUsers, FaSignOutAlt } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'; 
import { GrTransaction } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";

function SideBar() {
  
  return (
    <div className='flex pl-10 flex-col gap-6'>
       {/* Rusto Restaurant Heading and Profile Image */}
      <div className="text-center">
              <h3 className="text-2xl mt-2 font-bold text-black mb-2 text-center">
                <span className="text-orange-300">Rusto</span> Restaurant 
              </h3>
              <div className="relative w-20 h-20 mx-auto">
                <img
                  src=" https://cdn.pixabay.com/photo/2022/01/19/14/50/portrait-6950046_1280.jpg"
                  alt="Admin"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <Link to="/dashboard/admin-profile">
                  <AiOutlineEye
                    size={20}
                    className="absolute bottom-1 right-1 bg-slate-950 p-1 rounded-full text-white shadow-lg cursor-pointer hover:text-orange-500"
                  />
                </Link>
              </div>
              <p className="mt-2 text-lg font-medium">Hello, Obinna</p>
            </div> 

      <Link to=''>
        <button className='bg-transparent text-black py-1 px-2 hover:bg-slate-500 flex items-center rounded-md'>
        <FaTachometerAlt size={22} className="inline mr-2" /> Dashboard
        </button>
      </Link>

      <Link to='/dashboard/create-category'>
       <button className='bg-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md'>
       <FaPlusCircle size={22} className="inline mr-2 " /> Create Category
       </button>
      </Link>

      <Link to='/dashboard/add-product'>
       <button className='g-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md'>
       <FaPlusCircle size={22} className="inline mr-2" /> Create Menu 
       </button>
      </Link>

      <Link to='/dashboard/all-menu'>
       <button className='g-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md'>
       <BiSolidFoodMenu size={22} className="inline mr-2" /> View All Menu 
       </button>
      </Link>

      <Link to='/dashboard/all-users'>
       <button className='g-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md'>
       <FaUsers size={22} className="inline mr-2" /> View All Users 
       </button>
      </Link>

      <Link to='/dashboard/transaction-history'>
       <button className='g-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md'>
       <GrTransaction size={22} className="inline mr-2" /> Transactions History
       </button>
      </Link>

      
      <button className="w-40 bg-transparent text-black py-1 px-2  hover:bg-slate-500 flex items-center rounded-md">
          <FaSignOutAlt size={22} className="inline mr-2" /> Log Out
        </button>
    
    </div>
  )
}

export default SideBar
