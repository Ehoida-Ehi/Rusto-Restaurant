import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"


const ShopMenu = () => {
  const products = [
    {
      id: 1,
      title: "Chinese Spring Roll Starter",
      price: "25,000",
      reviews: 711,
      rating: 4.3,
      image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg", // Default image
      hoverImage: "https://cdn.pixabay.com/photo/2024/02/19/09/22/ai-generated-8582953_1280.png", // Hover image
    },
    {
      id: 2,
      title: "Texas BBQ Steak & Burger ",
      price: "30,000",
      reviews: 1263,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/04/07/10/05/bbq-8681089_1280.png",
      hoverImage: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
      bestseller: "#5 BESTSELLER in Food And Drink Gifts",
    },
    {
      id: 3,
      title: "French Cheese Cake",
      price: "25,000",
      reviews: 4073,
      rating: 4.7,
      image: "https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/04/03/08/21/cheese-cake-7896245_1280.jpg",
    },
    {
      id: 4,
      title: "Fresh Fruit Drink",
      price: "40,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2024/05/10/16/20/summer-drink-8753320_1280.jpg",
    },

    {
      id: 5,
      title: "Table d'Hote Menu",
      price: "100,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
    },

    {
      id: 6,
      title: "Bacon & Egg Toppings",
      price: "20,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2023/06/08/23/51/ai-generated-8050594_1280.jpg",
      hoverImage: " https://cdn.pixabay.com/photo/2024/07/07/05/12/ai-generated-8878254_1280.jpg",
    },
   
  
    {
      id: 7,
      title: "Cheese Toppings",
      price: "20,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2023/08/26/20/56/ai-generated-8215782_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/08/26/20/56/ai-generated-8215781_1280.jpg",
    },
    
    {
      id: 8,
      title: "Mushroom Toppings",
      price: "20,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2017/12/02/22/55/mushroom-2993925_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/04/30/21/34/pizza-7961609_1280.jpg",
    },

    {
      id: 9,
      title: "Onious Toppings",
      price: "20,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2021/09/18/12/25/japanese-food-6634996_1280.jpg",
      hoverImage: " https://cdn.pixabay.com/photo/2020/03/11/22/58/tomatoes-4923491_1280.jpg ",
    },

    {
      id: 10,
      title: "Mixed Fruit Toppings",
      price: "20,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/09/10/12/38/ai-generated-9037066_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/11/24/19/40/fruit-basket-8410566_1280.png",
    },

  ];

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []); 
  
  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    return (
      <span className="text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStars ? "★" : ""}
        {"☆".repeat(5 - fullStars - halfStars)}
      </span>
    );
  };

  return (
    <div className=" mt-16 ">
        {/* Hero image */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/26/02/06/christmas-wallpaper-2009590_1280.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
        <h1
        className={`text-6xl md:text-6xl font-bold text-white transition-transform duration-700 ease-out transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
      >
        Menu
      </h1>
          <div className="w-24 h-1 mt-2 bg-white"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-[550px] gap-8 p-8 bg-black">
        {/* Left Grid */}
        <div
          className="relative bg-cover bg-center flex items-center justify-center text-white h-full"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/09/19/26/ai-generated-8751683_1280.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center p-6">
            <h1 className="text-2xl md:text-4xl font-bold">
              Free Chardonnay bottle of red wine for orders above <span>&#8358;200,000</span>
            </h1>
          </div>
        </div>

        {/* Right Grid */}
        <div
          className="relative bg-cover bg-center flex items-center justify-center text-white h-full"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/14/09/31/dinner-table-444797_1280.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center p-6">
            <h1 className="text-2xl md:text-4xl font-bold">
              30% off when you book for our private dining Valentine's Day experience
            </h1>
          </div>
        </div>
      </div>



      {/* Title and Description */}
      <div className=" p-8 bg-slate-950 ">
        <h1 className="text-5xl font-semibold text-white text-center mb-2">Our Menu</h1>
        <p className="text-lg text-white leading-loose">
         Discover a weekly lineup of gourmet delights, from savoury classics to exotic creations. Our chefs curate a menu that will tantalize your taste buds and leave you craving for more.
         Discover a weekly lineup of gourmet delights, from savoury classics to exotic creations. Our chefs curate a menu that will tantalize your taste buds and leave you craving for more.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between pb-5 py-6 bg-black">
      <div className="relative flex gap-6 p-4">
        {/* Category Button */}
        <div className="relative">
          <button
            className="flex items-center font-semibold text-white focus:outline-none"
            onClick={toggleCategoryDropdown}
          >
            Category
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* Dropdown Options */}
          {isCategoryDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-slate-950 rounded-md shadow-lg z-10">
              <ul className="py-1 text-white">
                {[
                  'Starter',
                  'Main Course',
                  'Dessert',
                  'Drinks',
                  'Table d\'Hote',
                  'Topping',
                ].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-orange-500 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Price Button */}
        <button className="flex items-center font-semibold text-white focus:outline-none">
          Price
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

      <div className="flex items-center justify-between bg-slate-950 p-4 pb-2">
        <div className="relative flex gap-3">
          <button className="flex items-center text-white focus:outline-none">
            10 Items
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>


          {/* Dropdown options can be added here */}
        </div>

        <div className="relative">
          <button className="flex items-center font-semibold text-white focus:outline-none gap-4">
            Relevance
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* Dropdown options can be added here */}
        </div>
      </div>

      <div className=" py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-slate-950 gap-6 p-4">
        {products.map((product) => (
          <Link to={`/Details/${product.id}`}
            key={product.id}
            className="text-left"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative">
              {/* Image change on hover */}
              <img
                src={hoveredProduct === product.id ? product.hoverImage : product.image}
                alt={product.title}
                className="transition duration-500 ease-in-out"
              />
              {product.bestseller && (
                <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1">
                  {product.bestseller}
                </span>
              )}
            </div>

            <p className="text-lg font-semibold text-red-500 mt-4">&#8358;{product.price}</p>

            {/* Title with underline on hover and left-aligned text */}
            <h3 className="text-md font-medium text-white hover:underline">
              {product.title}
            </h3>

            <div className="flex items-center justify-start mt-2">
              {renderStars(product.rating)}
              <p className="ml-2 text-sm text-gray-100 underline">{product.reviews} reviews</p>
            </div>


          </Link>
        ))}
      </div>
      <div className='h-[300px] bg-slate-950'> </div>
    </div>
  );
};

export default ShopMenu;









