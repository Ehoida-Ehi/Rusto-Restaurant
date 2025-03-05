import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const images = [
    { src: 'https://cdn.pixabay.com/photo/2015/12/12/21/13/restaurant-1090136_1280.jpg', text: 'Abuja : Main Street Building Maitama' },
    { src: 'https://cdn.pixabay.com/photo/2015/09/21/09/54/villa-cortine-palace-949552_1280.jpg', text: 'Lagos : 123 Building, Awolowo Road, Ikoyi' },
    { src: 'https://cdn.pixabay.com/photo/2015/04/25/07/55/restaurant-738788_1280.jpg', text: 'Benin : Hallmark Plaza, Airport Road, GRA' },
    { src: 'https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg', text: 'Warri : Montgomery Hotel, Effurun Road, Uvwie' },
  ];


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);


  return (
    <div className='mt-16'>
      {/* Banner image */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/09/21/09/54/villa-cortine-palace-949552_1280.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1
              className={`text-6xl md:text-6xl font-bold text-white transition-transform duration-700 ease-out transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
          >
            Contact Us
          </h1>
          <p
            className={`mt-4 text-2xl font-semibold text-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            Abuja . Lagos . Benin . Warri 
          </p>
          <div className="w-24 h-1 mt-2 bg-white"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-black">
      {/* Left Grid */}
      <div className="space-y-4 mt-4">
        <h2 className="text-2xl  text-white font-bold">Get in Touch</h2>
        <p className="text-white">We'd love to hear from you! Whether you have a question or feedback, feel free to reach out.</p>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti sapiente vero, libero eveniet hic quo expedita, ex corporis, in numquam. Eligendi, praesentium reiciendis minus est in ratione? Officiis sit tempora corrupti perferendis ullam quo, in veritatis totam eaque repellat.</p>
        <p className='text-white'>Call Abuja : +234 123 456 789, Lagos : +234 987 654 321</p>
        <p className='text-white'>Call Benin : +234 123 456 123,  Warri : +234 987 654 567</p>
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF /> Facebook
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-700">
            <FaTwitter /> X
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <FaInstagram /> Instagram
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaYoutube /> YouTube
          </a>
        </div>
      </div>

      {/* Right Grid */}
      <div className="space-y-4 mt-4">
        <h2 className="text-2xl font-bold text-white">Your Details</h2>
        <p className="text-white">Let us know how to get back to you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded-md" />
          <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded-md" />
        </div>
        <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-2 rounded-md mt-4" />
        <textarea placeholder="Comments/Questions" className="w-full border border-gray-300 p-2 rounded-md mt-4"></textarea>
        <button className="w-full bg-orange-500 text-white p-2 rounded-md mt-4 hover:bg-orange-600">
          Contact Us
        </button>
      </div>
    </div>

    <div className='bg-black h-[100px]'></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-slate-950 h-[350px]  ">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img src={image.src} alt={`image-${index}`} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4  transition-opacity duration-300 rounded-b-lg">
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>

    <div className='bg-slate-950 h-[200px]'></div>

    </div>
  )
}

export default Contact
