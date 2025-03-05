import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Signed in successfully!");
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
      navigate('/ShopMenu');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg')",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <form
          className="bg-inherit rounded-xl p-6 w-full max-w-md grid gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-white text-start mb-2">
            Welcome back
          </h2>
          <p className="text-gray-300 text-start mb-4">
            Welcome back! Please enter your details
          </p>
          {[
            { name: "email", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-300 text-sm">Remember me</span>
            </label>
            <Link
              to="/ChangeUserPass"
              className="text-amber-600 font-semibold hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-900 w-full"
          >
            Sign In
          </button>
          {/* Terms and Conditions */}
          <p className="text-gray-300 text-sm text-center">
            By signing in, you are agreeing to our{" "}
            <a href="#" className="text-gray-300 hover:underline">
              privacy policy
            </a>
            ,{" "}
            <a
              href="#"
              className="text-amber-600 font-semibold hover:underline"
            >
              terms of use
            </a>
            , and{" "}
            <a
              href="#"
              className="text-amber-600 font-semibold hover:underline"
            >
              code of conduct
            </a>
            .
          </p>

          {/* New Account Link */}
          <div className="text-center">
            <p className="text-sm text-gray-300">
              New to Rusto Restaurant?{" "}
              <Link
                to="/RegForm"
                className="text-amber-600 font-semibold hover:underline"
              >
                Create account.
              </Link>
            </p>
          </div>
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

export default SignInPage;

