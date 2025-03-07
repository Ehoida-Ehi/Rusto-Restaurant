import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Handlers to toggle modals
  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const toggleReservationModal = () => setIsReservationModalOpen(!isReservationModalOpen);


  const images = [
    "https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_1280.jpg",
    "https://media.istockphoto.com/id/474418974/vector/vintage-and-art-restaurant-menu-design.jpg?s=1024x1024&w=is&k=20&c=C9z4AVezeo6obx1oQIP5C3sC3HP3E-T0bDprF5iGsFk=",
    "https://cdn.pixabay.com/photo/2018/01/12/16/31/nougat-3078581_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/04/17/45/italian-pasta-7432298_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/01/08/57/cocktails-and-mocktails-7235137_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/11/16/12/40/food-7595910_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856050_1280.jpg",
    " https://cdn.pixabay.com/photo/2023/01/17/07/59/mossel-dish-7724006_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg",
  ];
 

  return (
    <div className="mt-16 ">
      {/* Banner Video Section */}
      <div id="home" className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2015/10/27/1192-143842659_large.mp4"
          type="video/mp4"
          muted
          loop
        />
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>


      {/* Menu & Order and Book Reservation section */}
      <div id="menu-and-order" className="text-center text-white bg-slate-950 py-16 px-4 flex flex-col items-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-orange-500">Rusto</span> Intercontinental
        </h2>
        <h2 className="text-lg md:text-2xl">Cuisine & Bar Nigeria</h2>
        <p className="text-base md:text-lg">Enjoy a variety of International flavors!</p>
        <div id="about-" className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={toggleMenuModal}
          >
            Menu & Order
          </button>
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={toggleReservationModal}
          >
            Book Reservation
          </button>
        </div>
      </div>

      {/* Menu & Order Modal */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-950 rounded-lg w-[90%] max-w-3xl p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              onClick={toggleMenuModal}
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Content */}
            <h3 className="text-xl font-bold mb-6 text-white text-center">View Menu</h3>

            {/* 3-Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Starter */}
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg"
                  alt="Starter"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Starter</h4>
              </div>

              {/* Main Course */}
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg"
                  alt="Main Course"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Main Course</h4>
              </div>

              {/* Desserts */}
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Desserts"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Desserts</h4>
              </div>

              {/* Drinks */}
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/19/18/15/cocktail-drinks-6950673_1280.jpg"
                  alt="Drinks"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Drinks</h4>
              </div>

              {/* Toppings */}
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/18/15/pizza-973075_1280.jpg"
                  alt="Drinks"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Toppings</h4>
              </div>

              {/* Table hote meal package */}
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2021/01/01/21/12/shrimp-5880020_1280.jpg"
                  alt="Drinks"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <h4 className="mt-2 text-lg text-white font-semibold">Table d'Hote Menu</h4>
              </div>
            </div>


            {/* Gallery Section & Sign In */}
            <p className="mb-4 text-center text-white">See gallery section</p>
            <p className="mb-6 text-center text-white">
              To see more menu and to order,{" "}
              <Link to="/SignIn" className="text-orange-500 underline">
                sign in here
              </Link>
            </p>
          </div>
        </div>
      )}


      {/* Book Reservation Modal */}
      {isReservationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-950 rounded-lg w-[90%] max-w-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              onClick={toggleReservationModal}
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">Sign in to Book Your Table</h3>
            <p>
              <Link to="/SignIn" className="text-orange-500 underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* About Us */}
      <div id="about-us" className="grid grid-cols-1 md:grid-cols-2 h-[550px] gap-8 items-center p-8 bg-black">
        {/* Left Grid - Text Section */}
        <div>
          <h2 className="text-4xl text-center font-bold mb-4 text-white">About Us</h2>
          <p className="text-white text-lg leading-loose">
            Located at Lagos, Abuja, Benin, and Warri, we aim to provide you with
            a friendly and authentic intercontinental experience. We offer a
            variety of popular dishes from different parts of the world. Some
            common choices include sushi from Japan, pasta dishes from Italy, burger from the
            United States, and crème brûlée from France. A fusion of flavors and
            culinary traditions that cater to a wide range of tastes.
          </p>
        </div>

        {/* Right Grid - Image Section */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg"
            alt="Intercontinental Cuisine"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Gallery section */}
      <div id="gallery" className="py-8 bg-slate-950 flex justify-center">
        <div className="w-[80%] max-w-[900px] h-[500px]">
          <h2 className="text-4xl text-white font-bold text-center mb-6">Gallery Slider</h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg max-w-[500px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom CSS for Pagination */}
          <style>
            {`
        .swiper-pagination-bullet {
          background-color: white; /* Default white color */
          width: 12px;
          height: 12px;
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316; /* Active orange color */
          opacity: 1;
          transform: scale(1.2);
        }
      `}
          </style>
        </div>
      </div>

      {/* Review Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto bg-black p-6 md:p-12 gap-6">
        {/* Left Grid */}
        <div className="flex flex-col justify-center text-center px-4 md:px-12">
          {/* Quotation Icon */}
          <h1 className="text-6xl font-bold text-white mb-4">“</h1>
          {/* Description */}
          <p className="text-lg text-white mb-6">
            The Table d'Hote Menu is a great option for people who enjoy trying different types of food without having to travel to different countries. Truly a global culinary journey in one dining experience.
          </p>
          {/* Source */}
          <p className="text-orange-500 font-bold text-lg">
            FOODNETWORK MAGAZINE
          </p>
        </div>

        {/* Right Grid */}
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/11/20/12/whisky-8381812_1280.jpg"
            alt="Culinary Journey"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Gift Vouchers section */}
      <div id="gift-vouchers" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-slate-950">
        {/* Left Grid */}
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/11/02/17/22/coupon-1018711_1280.jpg"
            alt="Gift Voucher"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Center Grid */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">GIFT VOUCHERS</h2>
          <p className="text-lg text-white mb-6">
            Monetary gift cards are printed to order and so can be made for any amount you wish.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">Buy Now</button>
        </div>

        {/* Right Grid */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4 text-white">NEWSLETTER SIGNUP</h2>
          <p className="text-lg text-white mb-6">
            We've got plenty of news, be the first to read all about it.
          </p>
          {/* Name Inputs */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-200 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-200 w-[200px]"
            />
          </div>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring focus:ring-orange-200"
          />
          {/* Subscribe Button */}
          <button className="w-full border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Contact us section */}
      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 h-auto bg-black p-6 md:p-12">
        {/* Left Grid */}
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/12/21/13/restaurant-1090136_1280.jpg"
            alt="Culinary Journey"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Grid */}
        <div className="flex flex-col justify-center text-center px-4 md:px-12">
          {/* Quotation Icon */}
          <h1 className="text-5xl font-bold text-white mb-4">📳</h1>
          {/* Description */}
          <p className="text-lg text-white mb-4">
            30% off on our Valentines day menu. Book now and get a complimentary dessert. Don't miss out on this amazing opportunity. Visit any of our locations near you!
          </p>
          {/* Source */}
          <p className="text-orange-500 font-bold text-lg">
            For more infomation call : 080573628950
          </p>
        </div>

      </div>
      <div className="bg-black h-[200px]">

      </div>


    </div>
  );
};

export default Home;




