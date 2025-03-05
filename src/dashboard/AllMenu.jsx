import React, { useState } from 'react';

const ViewMenu = () => {
  const products = [
    {
      id: 1,
      title: "Chinese Spring Roll Starter",
      price: "£35",
      image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2024/02/19/09/22/ai-generated-8582953_1280.png",
    },
    {
      id: 2,
      title: "Texas BBQ Steak & Burger ",
      price: "£25",
      image: "https://cdn.pixabay.com/photo/2024/04/07/10/05/bbq-8681089_1280.png",
      hoverImage: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
    },
    {
      id: 3,
      title: "French Cheese Cake",
      price: "£20",
      image: "https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2017/08/08/08/57/cake-2610754_1280.jpg",
    },
    {
      id: 4,
      title: "Fresh Fruit Drink",
      price: "£18",
      image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2024/05/10/16/20/summer-drink-8753320_1280.jpg",
    },
    {
      id: 5,
      title: "Table d'Hote Menu",
      price: "£118",
      image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
      hoverImage: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete product with ID: ${id}`);
  };

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="text-left"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="relative">
            <img
              src={hoveredProduct === product.id ? product.hoverImage : product.image}
              alt={product.title}
              className="transition duration-500 ease-in-out"
            />
          </div>
          <p className="text-lg font-semibold text-red-500 mt-4">{product.price}</p>
          <h3 className="text-md font-medium hover:underline">{product.title}</h3>
        
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => handleEdit(product.id)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewMenu;

