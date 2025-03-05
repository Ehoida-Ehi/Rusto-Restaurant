import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    avatar: null, // Avatar will now be a file object
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.phone || !/^\d{11}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 11 digits";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.avatar)
      newErrors.avatar = "Avatar file is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Edit Staff Profile successful!");
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        avatar: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Edit Staff Profile
        </h2>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Input Fields */}
          {[
            { name: "firstname", label: "First Name" },
            { name: "lastname", label: "Last Name" },
            { name: "phone", label: "Phone Number" },
            { name: "email", label: "Email" },
          ].map(({ name, label }) => (
            <div key={name} className="relative">
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${
                  errors[name] ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
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

          {/* Avatar Upload */}
          <div className="relative">
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${
                errors.avatar ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label
              className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Upload Avatar
            </label>
            {formData.avatar && (
              <p className="text-gray-600 text-sm mt-2">
                Selected File: {formData.avatar.name}
              </p>
            )}
            {errors.avatar && (
              <p className="text-red-500 text-xs mt-1">{errors.avatar}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition"
          >
            Save Profile
          </button>
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

export default EditProfile;
