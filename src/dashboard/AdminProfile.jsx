import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AdminProfile() {

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          {/* Avatar Section */}
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/19/14/50/portrait-6950046_1280.jpg"
              alt="Admin Avatar"
              className="w-24 h-24 rounded-full border-2 border-slate-950 object-cover"
            />
           <Link to='/dashboard/editadmin-pro'>
           <button className="absolute bottom-1 right-1 bg-slate-950 text-white p-1 rounded-full shadow-md hover:bg-orange-600">
              <FaEdit size={16} />
            </button>
           </Link>
          </div>

          {/* Profile Details */}
          <h1 className="text-xl font-semibold mt-4 text-gray-700">Admin Profile</h1>

          <div className="w-full mt-6">
            <div className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">First Name:</span>
                <span className="text-gray-800 font-medium">Obinna</span>
              </div>

              {/* Last Name */}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Last Name:</span>
                <span className="text-gray-800 font-medium">Doe</span>
              </div>

              {/* Phone */}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Phone:</span>
                <span className="text-gray-800 font-medium">+1 234 567 890</span>
              </div>

              {/* Email */}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Email:</span>
                <span className="text-gray-800 font-medium">obinna.doe@example.com</span>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Link to='/dashboard/editadmin-pro'>
          <button className="mt-6 bg-slate-950 text-white py-2 px-4 rounded-md hover:bg-slate-600 transition">
            Edit Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;