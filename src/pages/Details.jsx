import { useState } from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {
  const { id } = useParams(); // Extract product ID from URL

  const products = [
    {
      id: 1,
      title: "Chinese Spring Roll Starter",
      price: "25,000",
      reviews: 711,
      rating: 4.3,
      image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg", // Default image
      hoverImage: "https://cdn.pixabay.com/photo/2024/02/19/09/22/ai-generated-8582953_1280.png", // Hover image
      description: "The perfect delicous starter for any meal.",
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
      description: "You can't go wrong with a classic BBQ steak and burger.",
    },
    {
      id: 3,
      title: "French Cheese Cake",
      price: "25,000",
      reviews: 4073,
      rating: 4.7,
      image: "https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/04/03/08/21/cheese-cake-7896245_1280.jpg",
      description: "indulge in the rich flavors of French cheese cake.",
    },
    {
      id: 4,
      title: "Fresh Fruit Drink",
      price: "40,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2024/05/10/16/20/summer-drink-8753320_1280.jpg",
      description: "The refreshing taste of a fresh fruit drink.",
    },

    {
      id: 5,
      title: "Table d'Hote Menu",
      price: "100,000",
      reviews: 1025,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
      description: "The perfect meal package including starter, main course and dessert.",
    },
    {
      id: 6,
      title: "Bacon & Egg Toppings",
      price: "20,000",
      reviews: 2000,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2023/06/08/23/51/ai-generated-8050594_1280.jpg",
      hoverImage: " https://cdn.pixabay.com/photo/2024/07/07/05/12/ai-generated-8878254_1280.jpg",
    },


    {
      id: 7,
      title: "Cheese Toppings",
      price: "20,000",
      reviews: 105,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2023/08/26/20/56/ai-generated-8215782_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/08/26/20/56/ai-generated-8215781_1280.jpg",
    },

    {
      id: 8,
      title: "Mushroom Toppings",
      price: "20,000",
      reviews: 102,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2017/12/02/22/55/mushroom-2993925_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/04/30/21/34/pizza-7961609_1280.jpg",
    },

    {
      id: 9,
      title: "Onious Toppings",
      price: "20,000",
      reviews: 1225,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2014/10/04/14/03/eat-473384_1280.jpg",
      hoverImage: " https://cdn.pixabay.com/photo/2020/03/11/22/58/tomatoes-4923491_1280.jpg ",
    },

    {
      id: 10,
      title: "Mixed Fruits Toppings",
      price: "20,000",
      reviews: 925,
      rating: 4.4,
      image: "https://cdn.pixabay.com/photo/2015/10/09/21/40/fruit-980014_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2023/11/24/19/40/fruit-basket-8410566_1280.png",
    },
  ];

  const [size, setSize] = useState("Medium");
  const [instructions, setInstructions] = useState("");
  const [quantity, setQuantity] = useState(1);


  const product = products.find((product) => product.id === parseInt(id));
  const [hovered, setHovered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

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

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className=" bg-slate-950 mt-16 ">
      <div className=" pl-4 p-1">
        <nav className="text-sm text-white semi-bold mb-4">
          <ol className="list-reset flex">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gifts voucher
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Food & Drink
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-200">Meals</li>
          </ol>
        </nav>
      </div>

      <div className="relative h-auto max-w-7xl mx-auto py-4 px-4">
        {/* Outer Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Left Grid: Hover Image */}
          <div className="flex flex-col gap-6 h-full overflow-hidden">
            <div
              className="w-full h-80 sm:h-96 md:h-full bg-cover bg-center transition-all duration-300"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundImage = `url(${product.hoverImage})`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundImage = `url(${product.image})`;
              }}
            ></div>
          </div>

          {/* Right Grid: Fixed Text Details */}
          <div className="sticky top-0 self-start px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">{product.title}</h2>
            <p className="text-gray-200 mb-4 text-sm sm:text-base">Product Code: #{product.id}</p>

            {/* Star Reviews */}
            <div className="flex items-center mb-4">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-200 underline text-sm sm:text-base">{product.reviews} reviews</span>
            </div>

            {/* Price */}
            <p className="text-lg sm:text-2xl text-red-600 font-semibold mb-2">&#8358;{product.price}</p>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Choose Size:</label>
              <div className="flex text-white gap-4">
                {["Small", "Medium", "Large"].map((option) => (
                  <label key={option} className="flex items-center text-sm sm:text-base">
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      checked={size === option}
                      onChange={() => setSize(option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-4 text-white">
              <label className="block font-semibold mb-2 text-sm sm:text-base">Special Instructions:</label>
              <textarea
                placeholder="Any specific preferences? Example no pepper, sugar or salt please"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full border rounded p-2 text-sm sm:text-base"
              />
            </div>

            {/* Quantity */}
            <div className="mb-4 text-white">
              <label className="block font-semibold mb-2 text-sm sm:text-base">Quantity:</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-3 py-1 border text-sm sm:text-base"
                >
                  -
                </button>
                <span className="px-4 text-sm sm:text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border text-sm sm:text-base"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Bag Button */}
            <button className="bg-orange-500 font-medium hover:bg-orange-800 w-full text-white py-2 px-6 mb-6 text-sm sm:text-base transition-all">
              Order
            </button>

            {/* Product Description */}
            <div className="mb-4 text-white text-sm sm:text-base">
              <p>{product.description}</p>
            </div>

            {/* Product Details Accordion */}
            <div className="accordion">
              <h3
                className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300 text-sm sm:text-base"
                onClick={() => toggleAccordion(1)}
              >
                Product Details
                <span
                  className={`float-right transition-transform ${activeAccordion === 1 ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </h3>
              {activeAccordion === 1 && (
                <div className="p-4 border text-white border-gray-300 text-sm sm:text-base">
                  <p>Details about the product.</p>
                </div>
              )}
            </div>

            {/* Delivery Accordion */}
            <div className="accordion">
              <h3
                className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300 text-sm sm:text-base"
                onClick={() => toggleAccordion(2)}
              >
                Delivery
                <span
                  className={`float-right transition-transform ${activeAccordion === 2 ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </h3>
              {activeAccordion === 2 && (
                <div className="p-4 border text-white border-gray-300 text-sm sm:text-base">
                  <p>Information about delivery options.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* REVIEW PART */}

      <div className='bg-slate-950 p-4 mx-auto mt-10 w-full max-w-[90%] min-h-screen'>
        <div className="p-6 bg-black">
          {/* Reviews Heading */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl sm:text-3xl text-white font-bold">Reviews (1273)</h1>
          </div>


          {/* Grid container to place rating section and quality rating side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Rating Section */}
            <div className="flex flex-col bg-white justify-between items-center  mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mt-4 font-semibold">4.4</span>
                <div className="ml-2 mt-4 flex">
                  {/* Black Stars for Rating */}
                  <span className="text-black text-2xl">★</span>
                  <span className="text-black text-2xl">★</span>
                  <span className="text-black text-2xl">★</span>
                  <span className="text-black text-2xl">★</span>
                  <span className="text-black text-2xl">★</span>
                </div>
              </div>
              <span className="text-gray-600 mb-4">66% Recommended this product</span>

              {/* Write Review Button */}
              <button
                className="bg-transparent text-black font-semibold px-4 py-2 mb-4 rounded-md"
                onClick={() => setIsModalOpen(true)}
              >
                Write a Review
              </button>


            </div>

            {/* Quality Rating */}
            <div className="flex flex-col bg-white justify-between">
              <div className="mb-6">
                <div className="flex justify-around mt-10 p-6 items-center">
                  <span className="text-gray-600">Quality</span>
                  <div className="w-3/4 bg-gray-200 rounded-full ">
                    <div className="bg-gray-500 h-2 rounded-full "></div>
                  </div>
                  <span className="ml-2 text-gray-600">Excellent</span>
                </div>
              </div>
            </div>
          </div>



          {/* Mention Tags */}
          <h2 className="font-semibold mt-4">Mentions</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {['satisfaction', 'purchase', 'freshness', 'quality', 'for gift'].map((mention, i) => (
              <span key={i} className="bg-white text-gray-800 px-3 py-1 text-sm">
                {mention}
              </span>
            ))}
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <select className="border p-2 w-full sm:w-60 text-gray-700">
              <option>All ratings</option>
              <option>5 stars</option>
              <option>4 stars</option>
            </select>

            <select className="border p-2 w-full sm:w-60 text-gray-700">
              <option>Most Recent</option>
              <option>Most Helpful</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4 mt-6">

          {/* Left Section */}
          <div className="mt-10 px-4 sm:pl-10">
            <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
            <p className="font-bold text-lg mb-2">Eye28</p>
            <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
          </div>

          {/* Right Section */}
          <div className="col-span-1 sm:col-span-2 mb-10">
            {/* Reviewer Ratings */}
            <div className="text-left sm:text-right mt-10 px-4 sm:pr-10">
              <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
              <p className="text-sm font-semibold mb-2">Quality Excellent</p>
              <p className="text-sm text-gray-700">
                Value for Money <span className="font-bold"></span>
              </p>
            </div>

            {/* Review Section */}
            <div className="px-4">
              {/* Star Ratings */}
              <div className="flex items-center space-x-1 mt-[-65px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
                    <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>

              {/* Recommendation */}
              <div className="flex items-center mt-2">
                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
                </svg>
                <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
              </div>
              <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>

              {/* Read More */}
              <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
            </div>

            {/* Helpful Section */}
            <div className="flex flex-wrap items-center mt-4 px-4">
              <p className="text-gray-500">Helpful?</p>
              <button className="ml-2 flex items-center text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
                </svg>
                <span className="ml-1">0</span>
              </button>
              <button className="ml-2 flex items-center text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
                </svg>
                <span className="ml-1">0</span>
              </button>
              <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
            </div>
          </div>

        </div>




        <div className='h-52'></div>

      </div>

    </div>

  );
};

export default Details;

