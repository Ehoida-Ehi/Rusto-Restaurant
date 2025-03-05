import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        {/* Location Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">LOCATION</h3>
          <div className="mb-4">
            <img
              src="https://cdn.pixabay.com/photo/2020/11/18/16/57/navigation-5755999_1280.jpg" 
              alt="Location Map"
              className="rounded-lg"
            />
          </div>
          <p>31 St. Thomas Street Level 33 The Shard</p>
          <p>Abuja, SE1 9RY</p>
          <p>020 3011 1257</p>
          <p>rustoreservations@aqua-abuja.com</p>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">OPENING HOURS</h3>
          <div>
            <p className="font-semibold">Brunch</p>
            <p>Saturday & Sunday</p>
            <p>11:30am – 3:30pm</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Lunch</p>
            <p>Monday – Thursday</p>
            <p>12:00pm – 2:30pm</p>
            <p>Friday</p>
            <p>12:00pm – 3:00pm</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Dinner</p>
            <p>Monday – Thursday</p>
            <p>5:30pm – 10:00pm</p>
            <p>Friday</p>
            <p>5:30pm – 10:30pm</p>
            <p>Saturday</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Menu&order</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">LOCATIONS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Abuja</a></li>
            <li><a href="#" className="hover:underline">Lagos</a></li>
            <li><a href="#" className="hover:underline">Benin</a></li>
            <li><a href="#" className="hover:underline">Warri</a></li>
            <li><a href="#" className="hover:underline">All Locations</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
