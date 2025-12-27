"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [serviceType, setServiceType] = useState("");
  const [subService, setSubService] = useState("");
  const [contact, setContact] = useState("");
const router = useRouter()
  const handleSubmit = () => {
  // Basic empty checks
  if (!serviceType) {
    alert("Please select a service type");
    return;
  }

  if (!subService) {
    alert("Please select a sub service");
    return;
  }

  if (!contact) {
    alert("Please enter contact number");
    return;
  }

  // Contact number validation (Indian mobile)
  const contactRegex = /^[6-9]\d{9}$/;

  if (!contactRegex.test(contact)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  const formData = {
    serviceType,
    subService,
    contact,
  };

  
   if(serviceType==="प्रमाणपत्र"){
    router.push(`/services/certificate?phone=${contact}`);
   }else if(serviceType==="तक्रार"){
    router.push(`/services/complaint?phone=${contact}`);
   }else{
     router.push(`/services/application?phone=${contact}`);
   }

  // ✅ Later → API call / database save
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-700 py-4 text-center">
          <h1 className="text-white text-lg sm:text-xl font-semibold">
            अर्ज करा
          </h1>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                सेवा प्रकार <span className="text-red-500">*</span>
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">सेवा प्रकार निवडा</option>
                <option value="प्रमाणपत्र">प्रमाणपत्र</option>
                <option value="तक्रार">तक्रार</option>
                <option value="अर्ज">अर्ज</option>
              </select>
            </div>

            {/* Sub Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                उपसेवा निवडा
              </label>
              <select
                value={subService}
                onChange={(e) => setSubService(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {
                  serviceType==="प्रमाणपत्र"?(
                <><option value="">उपसेवा निवडा</option>
                <option value="मालमत्तेचा नमुना ७ दाखला">मालमत्तेचा नमुना ७ दाखला</option>
                <option value="वीज बिलासाठी ना हरकत दाखला">वीज बिलासाठी ना हरकत दाखला</option>
                <option value="शक्यकी नसल्याचा दाखला">शक्यकी नसल्याचा दाखला</option>
                <option value="जन्म दाखला">जन्म दाखला</option>
                <option value="मृत्यू दाखला">मृत्यू दाखला</option>
                <option value="विवाह नोंद दाखला">विवाह नोंद दाखला</option>
                <option value="व्यवसायासाठी ना हरकत दाखला">व्यवसायासाठी ना हरकत दाखला</option>
                <option value="जन्म मृत्यू नोंद नसल्याचा दाखला">जन्म मृत्यू नोंद नसल्याचा दाखला</option>
                <option value="वर्णांक दाखला">वर्णांक दाखला</option>
                <option value="नळ जोडणीसाठी दाखला">नळ जोडणीसाठी दाखला</option>
                <option value="मालमता फेरफार दाखला">मालमता फेरफार दाखला</option></>
                  ):(
                    serviceType==="तक्रार"?(
                      <>
                      <option value="">उपसेवा निवडा</option>
                      <option value="स्वच्छता">स्वच्छता</option>
                      <option value="शैक्षणिक">शैक्षणिक</option>
                      <option value="पाणी पुरवठा">पाणी पुरवठा</option>
                       <option value="विद्युत">विद्युत</option>
                      </>
                      
                    ):(
                      <>
                      <option value="">उपसेवा निवडा</option>
                      <option value="प्रस्ताव">प्रस्ताव</option>
                      <option value="ठराव">ठराव</option>
                      <option value="NOC">NOC</option>
                       <option value="मालमत्ता फेरफार / हस्तांतरण">मालमत्ता फेरफार / हस्तांतरण</option>
                       </>
                    )
                  )
                }
                
              </select>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                संपर्क <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="मोबाइल नंबर"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>

          {/* Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition w-full sm:w-auto"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
