import React from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ReviewPage = () => {
  
  const userReviews = [
    {
      id: "REV001",
      product: "Chinese Spring Roll Starter",
      rating: 4.5,
      review:
        "Delicious and fresh spring roll starter 😁👌! The chicken was perfectly grilled. Will definitely order again.",
      date: "2025-01-14",
      image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg",
    },
    {
      id: "REV002",
      product: "Texas BBQ Burger",
      rating: 5,
      review:
        "The burger was juicy, flavorful, and the BBQ sauce was spot-on. Highly recommended!",
      date: "2025-01-10",
      image: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
    },
    {
      id: "REV003",
      product: "French Cheese Cake",
      rating: 3,
      review:
        "It was okay, but the cake wasn't moist enough. Could be better.",
      date: "2025-01-08",
      image: "https://cdn.pixabay.com/photo/2017/08/08/08/57/cake-2610754_1280.jpg",
    },
  ];

  
  const handleEditReview = (id) => {
    toast.info(`Editing review for ${id}`, { theme: "colored" });
  };

  const handleDeleteReview = (id) => {
    toast.error(`Review ${id} deleted!`, { theme: "colored" });
  };

  return (
    <div className="min-h-screen mt-16 bg-slate-950 py-10">
      <ToastContainer />
      <div className="max-w-6xl mx-auto bg-black shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-6">
          Your <span className="text-orange-600">Reviews</span>
        </h1>
        {userReviews.length > 0 ? (
          <div className="space-y-6">
            {userReviews.map((review) => (
              <div
                key={review.id}
                className="bg-black border border-gray-200 rounded-lg p-4 flex items-start space-x-4"
              >
                <img
                  src={review.image}
                  alt={review.product}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-white">
                    {review.product}
                  </h2>
                  <div className="flex items-center space-x-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(review.rating) ? "" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      {review.rating}/5
                    </span>
                  </div>
                  <p className="text-sm text-white mt-2">{review.review}</p>
                  <p className="text-xs text-gray-400 mt-1">Reviewed on {review.date}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                    onClick={() => handleEditReview(review.id)}
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 flex items-center space-x-1"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>You haven't made any reviews yet.</p>
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              onClick={() => toast.info("Redirecting to products...")}
            >
              Explore Products
            </button>
          </div>
        )}
      </div>
      <div className='h-[100px] bg-slate-950'></div>
    </div>
  );
};

export default ReviewPage;
