import React from 'react';

const Error404 = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-peppers-1302126_1280.jpg')", // Change to your preferred image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl font-bold underline mb-4">404: Page Not Found</h1>
        <p className="text-lg font-semibold">Looks like you've stumbled upon a page that doesn't exist.</p>
        <p className="text-lg font-semibold">You can try going back to the homepage</p>
      </div>
    </div>
  );
};

export default Error404;
