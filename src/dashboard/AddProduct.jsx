import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
      category: "",
      price: "",
      dishName: "",
      ingredients: "",
      image: null,
      availability: "",
      quantity: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    };
  
    const validate = () => {
      const newErrors = {};
  
      if (!formData.category) newErrors.category = "Category is required.";
      if (!formData.price || formData.price <= 0) newErrors.price = "Price must be greater than zero.";
      if (!formData.dishName) newErrors.dishName = "Dish name is required.";
      if (!formData.ingredients) newErrors.ingredients = "Ingredients are required.";
      if (!formData.image) newErrors.image = "Image is required.";
      if (!formData.availability) newErrors.availability = "Availability is required.";
      if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = "Quantity must be greater than zero.";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log("Form data submitted:", formData);
         toast.success("Menu Creation successful!");
              setFormData({
                category: "",
                price: "",
                dishName: "",
                ingredients: "",
                image: null,
                availability: "",
                quantity: "",
              });
              setErrors({});
      }
    }; 
 
  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-md">
    <h2 className="text-xl font-bold mb-4">Create Menu</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Category Dropdown */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.category ? 'border-red-500' : ''}`}
        >
          <option value="">Select a category</option>
          <option value="starter">Starter</option>
          <option value="main course">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="drinks">Drinks</option>
          <option value="meal package">Meal Package</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

      {/* Price Field */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type=""
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.price ? 'border-red-500' : ''}`}
          placeholder="Enter price"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      {/* Dish Name Field */}
      <div>
        <label htmlFor="dishName" className="block text-sm font-medium text-gray-700">
          Dish Name
        </label>
        <input
          type="text"
          id="dishName"
          name="dishName"
          value={formData.dishName}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.dishName ? 'border-red-500' : ''}`}
          placeholder="Enter dish name"
        />
        {errors.dishName && <p className="text-red-500 text-sm mt-1">{errors.dishName}</p>}
      </div>

      {/* Ingredients Field */}
      <div>
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.ingredients ? 'border-red-500' : ''}`}
          placeholder="Enter ingredients"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Image Field */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className={`mt-1 block w-full text-gray-700 ${errors.image ? 'border-red-500' : ''}`}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      {/* Availability Dropdown */}
      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
          Availability
        </label>
        <select
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.availability ? 'border-red-500' : ''}`}
        >
          <option value="">Select availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
      </div>

      {/* Quantity Field */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type=""
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.quantity ? 'border-red-500' : ''}`}
          placeholder="Enter quantity"
        />
        {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Create Menu
        </button>
      </div>
    </form>
    <ToastContainer
      position="top-center"
      transition={Flip}
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      draggable
    />
  </div>
  );
};

export default AddProduct

