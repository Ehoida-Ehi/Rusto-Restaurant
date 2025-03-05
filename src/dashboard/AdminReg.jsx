import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminReg = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    branch: "",
    email: "",
    password: "",
    branchaddress: "",
    descp: "",
    avatar: "",
    banner: "",
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
    if (!formData.phone || !/^\d{11}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 11 digits";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.branchaddress) newErrors.branchaddress = "Branch address is required";
    if (!formData.avatar || !/^https?:\/\/.+\..+/.test(formData.avatar))
      newErrors.avatar = "Valid URL is required for avatar";
    if (!formData.banner || !/^https?:\/\/.+\..+/.test(formData.banner))
      newErrors.banner = "Valid URL is required for banner";

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
        phone: "",
        branch: "",
        email: "",
        password: "",
        branchaddress: "",
        descp: "",
        avatar: "",
        banner: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <form
          className="bg-inherit rounded-lg p-6 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="col-span-1 md:col-span-2 text-2xl font-semibold text-white text-center mb-4">
            Admin Registration Form
          </h2>

          {[
            { name: "firstname", label: "First Name" },
            { name: "lastname", label: "Last Name" },
            { name: "phone", label: "Phone" },
            { name: "email", label: "Email" },
            { name: "password", label: "Password", type: "password" },
            { name: "branchaddress", label: "Branch Address" },
            { name: "descp", label: "Description" },
            { name: "avatar", label: "Avatar URL" },
            { name: "banner", label: "Banner URL" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${errors[name] ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" " // Placeholder is required for peer interaction
              />
              <label
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-focus:text-gray-600"
              >
                {label}
              </label>
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="relative">
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={`peer w-full px-3 pt-5 pb-2 border rounded-md focus:outline-none ${errors.branch ? "border-red-500" : "border-gray-300"
                }`}
            >
              <option value="">Select Branch</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
              <option value="Benin">Benin</option>
              <option value="Warri">Warri</option>
            </select>
            <label className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-focus:text-gray-600">
              Branch
            </label>
            {errors.branch && (
              <p className="text-red-500 text-xs mt-1">{errors.branch}</p>
            )}
          </div>

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-amber-600 w-56 text-white py-3 rounded-md hover:bg-amber-900"
          >
            Create Account
          </button>

          <h2 className="mt-4 text-sm text-white text-start">
            Already have an account?{" "}
            <Link to="/AdminSign">
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

export default AdminReg;


