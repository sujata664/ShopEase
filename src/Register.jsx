import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters and spaces.";
    }

    // Phone validation
    if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    // Email validation
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registration successful!", formData);

      // Clear fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      setErrors({});
    }
  };

  return (
    <div className="min-h-screen p-5">
      <NavLink to="/">
        <img src="/image/new.png" alt="logo" className="h-18 w-32 cursor-pointer mr-4" />
      </NavLink>

      <h1 className="text-4xl font-bold underline text-center my-5">Register</h1>

      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white rounded-3xl shadow-2xl lg:w-4/12 p-6"
        >
          {/* Name */}
          <label className="p-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Phone */}
          <label className="p-2 font-semibold">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          {/* Email */}
          <label className="p-2 font-semibold">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Password */}
          <label className="p-2 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-2 lg:w-2/3 m-2"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          {/* Confirm Password */}
          <label className="p-2 font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-2 lg:w-2/4 m-2"
          /><br/>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 my-8 bg-blue-600 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2"
          >
            Submit
          </button>

          <div>
            Already have an account?
            <NavLink to="/Logsin" className="text-gray-500 hover:text-black"> Login.</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
