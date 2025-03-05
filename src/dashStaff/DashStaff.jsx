import React, { useState, useEffect, useRef } from 'react';

const DashStaff = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "Welcome to Our Staff Dashboard";
  const paragraphToType = "Serving Delicious Foods and Impeccable Customer Service";
  const [paragraphTypedText, setParagraphTypedText] = useState('');
  const typingSpeed = 50;
  const paragraphTypingSpeed = 40;


  const textIndex = useRef(0)
  const paragraphIndex = useRef(0)

  useEffect(() => {
    if (textIndex.current < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, textIndex.current + 1));
        textIndex.current += 1
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    if (textIndex.current == textToType.length && paragraphIndex.current < paragraphToType.length) {
      const timeout = setTimeout(() => {
        setParagraphTypedText(paragraphToType.substring(0, paragraphIndex.current + 1));
        paragraphIndex.current += 1
      }, paragraphTypingSpeed);
      return () => clearTimeout(timeout);
    }

  }, [typedText, paragraphTypedText]);


  return (
    <div className='p-2 bg-slate-300'>
      <div
        className="relative flex items-center justify-center h-[200px] bg-[url('https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg')] bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-white">
            {typedText}
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            {paragraphTypedText}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">Categories</h2>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {/* Starter */}
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg"
              alt="Starter"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Starter</h4>
          </div>

          {/* Main Course */}
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg"
              alt="Main Course"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Main Course</h4>
          </div>

          {/* Dessert */}
          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dessert"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Dessert</h4>
          </div>

          {/* Drinks */}
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/19/18/15/cocktail-drinks-6950673_1280.jpg"
              alt="Drinks"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Drinks</h4>
          </div>

          {/* Toppings */}
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/09/05/14/00/yogurt-bar-1646622_1280.jpg"
              alt="Toppings"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Toppings</h4>
          </div>

          {/* Table d'Hote Menu */}
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2019/01/25/21/07/food-3955317_1280.jpg"
              alt="Table d'Hote Menu"
              className="w-full h-20 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-sm font-medium">Table d'Hote Menu</h4>
          </div>
        </div>
      </div>
          {/* section two */}
      <div className="mt-4 px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Most Popular Dishes</h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Spring Roll */}
          <div className="relative bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center mt-8">
            {/* Round Image */}
            <div className="absolute -top-10 w-20 h-20 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg"
                alt="Spring Roll"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-white">Spring Roll</h4>
              <div className="flex justify-center items-center mt-2 space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.267L12 18.897l-7.417 4.638L6 15.268 0 9.423l8.332-1.268z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Beef Burger */}
          <div className="relative  bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center mt-8">
            <div className="absolute -top-10 w-20 h-20 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg"
                alt="Beef Burger"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-white">Beef Burger</h4>
              <div className="flex justify-center items-center mt-2 space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.267L12 18.897l-7.417 4.638L6 15.268 0 9.423l8.332-1.268z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Cheese Cake */}
          <div className="relative bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center mt-8">
            <div className="absolute -top-10 w-20 h-20 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img
                src="https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg"
                alt="Cheese Cake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-white">Cheese Cake</h4>
              <div className="flex justify-center items-center mt-2 space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.267L12 18.897l-7.417 4.638L6 15.268 0 9.423l8.332-1.268z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Mix Grill */}
          <div className="relative bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center mt-8">
            <div className="absolute -top-10 w-20 h-20 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img
                src="https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg"
                alt="Mix Grill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-white">Mix Grill</h4>
              <div className="flex justify-center items-center mt-2 space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.267L12 18.897l-7.417 4.638L6 15.268 0 9.423l8.332-1.268z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 for recent orders */}

      <div className="mt-8 px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Recent Orders</h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Order 1 */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg"
              alt="Order 1"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-white">Bruchetta</h4>
            <p className="mt-2 text-sm text-red-500">
                 $200
            </p>
          </div>

          {/* Order 2 */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg"
              alt="Order 2"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-white">Fried Rice</h4>
            <p className="mt-2 text-sm text-red-500">
                 $150
            </p>
          </div>

          {/* Order 3 */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg"
              alt="Order 3"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <h4 className="mt-4 text-lg font-semibold text-white">Mix Grill</h4>
            <p className="mt-2 text-sm text-red-500">
               $123
            </p>
          </div>
        </div>
      </div>






    </div>
  )
}

export default DashStaff