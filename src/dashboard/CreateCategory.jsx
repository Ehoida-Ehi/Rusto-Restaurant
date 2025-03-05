import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCategory = () => {
   const [formData, setFormData] = useState({
         categoryname: "",
         categoryimage: null,
         
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
     
         if (!formData.categoryname) newErrors.categoryname = "Categoryname is required.";
         if (!formData.categoryimage) newErrors.categoryimage = "Categoryimage is required.";
         
         setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
       };
     
       const handleSubmit = (e) => {
         e.preventDefault();
         if (validate()) {
           console.log("Form data submitted:", formData);
            toast.success("Category Creation Successful!");
                 setFormData({
                   categoryname: "",
                   categoryimage: null,
                 });
                 setErrors({});
         }
       }; 

  return (
     <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-xl font-bold mb-4">Create Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
    
          {/* Category Name Field */}
          <div>
            <label htmlFor="categoryname" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type=""
              id="categoryname"
              name="categoryname"
              value={formData.categoryname}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${errors.price ? 'border-red-500' : ''}`}
              placeholder="Enter category name"
            />
            {errors.categoryname && <p className="text-red-500 text-sm mt-1">{errors.categoryname}</p>}
          </div>
    
          {/* Image Field */}
          <div>
            <label htmlFor="categoryimage" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="categoryimage"
              name="categoryimage"
              onChange={handleChange}
              className={`mt-1 block w-full text-gray-700 ${errors.categoryimage ? 'border-red-500' : ''}`}
            />
            {errors.categoryimage && <p className="text-red-500 text-sm mt-1">{errors.categoryimage}</p>}
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Category
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
  )
}

export default CreateCategory
