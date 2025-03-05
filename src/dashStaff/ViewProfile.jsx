import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ViewProfile() {

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          {/* Avatar Section */}
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/02/59/girl-1866959_1280.jpg"
              alt="Admin Avatar"
              className="w-24 h-24 rounded-full border-2 border-orange-500 object-cover"
            />
           <Link to='/dashstaff/edit-profile'>
           <button className="absolute bottom-1 right-1 bg-orange-500 text-white p-1 rounded-full shadow-md hover:bg-orange-600">
              <FaEdit size={16} />
            </button>
           </Link>
          </div>

          {/* Profile Details */}
          <h1 className="text-xl font-semibold mt-4 text-gray-700">Staff Profile</h1>

          <div className="w-full mt-6">
            <div className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">First Name:</span>
                <span className="text-gray-800 font-medium">Jane</span>
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
                <span className="text-gray-800 font-medium">jane.doe@example.com</span>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Link to='/dashstaff/edit-profile'>
          <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">
            Edit Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
