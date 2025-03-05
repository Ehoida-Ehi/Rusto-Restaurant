import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    profilepic: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.phone || !/^\d{11}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 11 digits";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.profilepic || !/^https?:\/\/.+\..+/.test(formData.profilepic))
      newErrors.profilepic = "Valid URL is required for profile picture";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        profilepic: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <form
          className="bg-inherit rounded-xl p-6 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Heading and description */}
          <div className="col-span-1 md:col-span-2 text-start mb-4">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-gray-300">Experience a global culinary journey</p>
          </div>

          {/* Input fields */}
          {[
            { name: "firstname", label: "First Name" },
            { name: "lastname", label: "Last Name" },
            { name: "email", label: "Email" },
            { name: "password", label: "Password", type: "password" },
            { name: "phone", label: "Phone" },
            { name: "address", label: "Address" },
            { name: "profilepic", label: "Profile Picture URL" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${errors[name] ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" " // Placeholder for floating label
              />
              <label
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
              >
                {label}
              </label>
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-amber-600 w-52 text-white py-3 rounded-md hover:bg-amber-900"
          >
            Create Account
          </button>

          {/* Already have an account */}
          <h2 className="mt-4 text-sm text-white text-start">
            Already have an account?{' '}
            <Link to='/SignIn' className="text-amber-600 font-bold hover:underline">
              Log in <span>&rarr;</span>
            </Link>
          </h2>
        </form>
      </div>
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

export default CustomerRegistrationForm;

