'use client' 
import Footer from "@/components/Footer";
import React, { useState } from "react";

function page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { name: "", phone: "", email: "", message: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "नाव गरजेचे आहे ";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "१० अंकी नंबर भरा ";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ई-मेल भरा ";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "तुमची समस्या भरा ";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you! Your message has been submitted.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          संपर्क करा 
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">संपूर्ण नाव </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="संपूर्ण नाव भरा..."
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">फोन नंबर</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="तुमचा फोन नंबर भरा "
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ई-मेल</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="ई-मेल भरा "
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">समस्या  भरा </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="तुमची येथे समस्या  भरा "
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          सबमिट करा
        </button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default page