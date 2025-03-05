import React from "react";
import { Link } from 'react-router-dom';
import { FaTrash, FaShareAlt, FaCartPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const WishList = () => {
  const wishListItems = [
    {
      id: "WISH001",
      name: "Rosetto & Potatoes",
      price: 25000,
      image: "https://cdn.pixabay.com/photo/2024/02/15/09/30/schnitzel-8575036_1280.png",
    },
    {
      id: "WISH002",
      name: "Spaghetti Bolognese Combo Deal",
      price: 30000,
      image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
    },
    {
      id: "WISH003",
      name: "Fresh Summer Drink",
      price: 40000,
      image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
    },
  ];

  const handleAddToCart = (id) => {
    toast.success(`Item ${id} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleRemoveFromWishList = (id) => {
    toast.error(`Item ${id} removed from wish list!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleShareItem = (id) => {
    toast.info(`Item ${id} shared!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen mt-16 bg-slate-950 py-10">
      <ToastContainer />
      <div className="max-w-6xl mx-auto bg-black shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-orange-600">Rusto</span> Restaurant Wish List
          </h1>
          <div className="flex space-x-4">
            <Link to="/Cart">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              onClick={() => toast.info("Navigating to cart...", { theme: "colored" })}
            >
              Go to Cart
            </button>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {wishListItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 shadow-md rounded-lg p-4 relative group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-50 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-white">
                {item.name}
              </h2>
              <p className="text-sm text-red-500 mb-2">&#8358;{item.price.toFixed(2)}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition"
                  onClick={() => handleAddToCart(item.id)}
                >
                  <FaCartPlus className="inline-block mr-2" />
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                  <button
                    className="text-white hover:text-red-600 transition"
                    onClick={() => handleRemoveFromWishList(item.id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="text-white hover:text-blue-600 transition"
                    onClick={() => handleShareItem(item.id)}
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[100px] bg-slate-950'></div>
    </div>
  );
};

export default WishList;
