import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TbLetterX } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1); // Quantity of the item
  const contactDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
  };

  const [orderingMethod, setOrderingMethod] = useState("");

  return (
    <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-white gap-6 p-4 md:p-8">
    {/* Left section: Cart items (3fr) */}
    <div className="lg:col-span-3">
      <h1 className="text-xl md:text-2xl font-semibold">Your Secure Bag</h1>
      <div className="border-b py-2 md:py-4">
        <span className="text-gray-500 text-sm md:text-base">IN DEMAND</span>
        <span className="ml-2 text-sm md:text-base">Sold 6 times since your last visit 13 hours ago</span>
      </div>
  
      {/* Cart items */}
      {[{
        image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg",
        name: "Chinese Spring Roll Starter",
        price: "25,000"
      }, {
        image: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
        name: "Texas BBQ Steak & Burger",
        price: "30,000"
      }].map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-start py-4 border-b">
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
          <div className="md:ml-4 flex-grow mt-2 md:mt-0">
            <h2 className="text-lg font-medium">{item.name}</h2>
            <p className="mt-2">&#8358;{item.price}</p>
            {/* Quantity */}
            <div className="mb-4 mt-2">
              <label className="block font-semibold mb-2">Quantity:</label>
              <div className="flex items-center">
                <button className="px-3 py-1 border">-</button>
                <span className="px-4">{quantity}</span>
                <button className="px-3 py-1 border">+</button>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-wrap items-center">
              <button className="flex items-center text-black hover:underline">
                <IoMdHeartEmpty className="mr-2 w-5 h-5" />Move to Wish List
              </button>
              <button className="ml-4 flex items-center text-black hover:underline">
                <TbLetterX className="mr-2 w-5 h-5" />Remove
              </button>
            </div>
          </div>
        </div>
      ))}
  
      {/* Add gift message button */}
      <Link to='/ShopMenu'>
      <button className="mt-6 w-full px-4 py-2 border border-gray-400 text-black">
        Back to Menu
      </button>
      </Link>
    </div>
  
    {/* Right section: Summary & Contact Details (2fr) */}
    <div className="lg:col-span-2 border p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold">Summary</h2>
      
      {/* Contact Details Card */}
      <div className="mt-6">
        <h3 className="text-md md:text-lg font-medium mb-4">Contact Address</h3>
        <div className="relative border p-4 rounded shadow-sm">
          {/* Edit Icon */}
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <MdEdit className="w-5 h-5" />
          </button>
          <p className="text-gray-700"><span className="font-semibold">First Name:</span> {contactDetails.firstName}</p>
          <p className="text-gray-700 mt-2"><span className="font-semibold">Last Name:</span> {contactDetails.lastName}</p>
          <p className="text-gray-700 mt-2"><span className="font-semibold">Email:</span> {contactDetails.email}</p>
          <p className="text-gray-700 mt-2"><span className="font-semibold">Phone:</span> {contactDetails.phone}</p>
          <p className="text-gray-700 mt-2"><span className="font-semibold">Address:</span> {contactDetails.address}</p>
        </div>
      </div>
  
      {/* Ordering Method */}
      <div className="mt-6">
        <h3 className="text-md md:text-lg font-medium mb-4">Ordering Method</h3>
        <div className="space-y-2">
          {["Pick-Up", "Delivery"].map((method) => (
            <label key={method} className="flex items-center">
              <input type="radio" name="orderingMethod" value={method} className="mr-2" />
              {method}
            </label>
          ))}
        </div>
      </div>
  
      {/* Total */}
      <div className="mt-4 flex font-semibold justify-between">
        <div className="flex flex-col">
          <p className="mb-2">Total:</p>
          <p className="text-sm text-gray-500">(Excluding delivery)</p>
        </div>
        <p>&#8358;{(55000.00 * quantity).toFixed(2)}</p>
      </div>
  
      {/* Payment Button */}
      <Link to="/BillingReceipt">
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white py-3 flex justify-center items-center">
          <CiLock className="w-6 h-6 mr-2" /> Secure Payment & Receipt
        </button>
      </Link>
    </div>
  </div>
  );
};

export default CartPage;






