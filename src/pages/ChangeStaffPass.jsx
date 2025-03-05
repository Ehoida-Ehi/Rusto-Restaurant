import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangeStaffPass = () => {
  const [formData, setFormData] = useState({
    oldpass: "",
    newpass: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.oldpass)
      newErrors.oldpass = "Old password is required";
    else if (formData.oldpass.length < 8)
      newErrors.oldpass = "Old password must be at least 8 characters";

    if (!formData.newpass)
      newErrors.newpass = "New password is required";
    else if (formData.newpass.length < 8)
      newErrors.newpass = "New password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Password changed successfully!");
      setFormData({
        oldpass: "",
        newpass: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <form
          className="bg-inherit rounded-lg p-6 w-full max-w-md grid gap-4"
          onSubmit={handleSubmit}
        >
           <h2 className="text-2xl font-bold text-white text-start mb-2">
            Reset Password
          </h2>
          <p className="text-gray-300 text-start mb-4">
            Please enter passwords.
          </p>
          {[
            { name: "oldpass", label: "Old Password", type: "password" },
            { name: "newpass", label: "New Password", type: "password" },
          ].map(({ name, label, type }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${
                  errors[name] ? "border-red-500" : "border-gray-300"
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
                  <h2 className="mt-4 text-sm text-white text-start">
                    Back to {' '}
                    <Link to='/StaffSignIn'>
                      Log in <span>&rarr;</span>
                    </Link>
                  </h2> 
          <button
            type="submit"
            className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-900 w-full"
          >
            Change Password
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

export default ChangeStaffPass;