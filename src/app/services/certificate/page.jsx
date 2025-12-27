"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
 
  const [certificateType] = useState("जन्म दाखला");
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
   const [mobile] = useState(phone);

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      {/* Header */}
      <div className="bg-green-700 text-white px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">✺</span>
        <h1 className="text-lg font-semibold">Certificate</h1>
      </div>

      {/* Form */}
      <div className="bg-white mx-6 my-6 p-6 rounded shadow">
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
            action="https://formspree.io/f/mzdbekwv"
  method="POST"
          encType="multipart/form-data"
        >
          {/* Hidden fields for disabled inputs */}
          <input type="hidden" name="mobile_number" value={mobile} />
          <input type="hidden" name="certificate_type" value={certificateType} />

          {/* Mobile Number */}
          <div>
            <label className="font-medium">
              मोबाईल नंबर / Mobile Number
            </label>
            <input
              type="text"
              value={mobile}
              disabled
              className="mt-2 w-full border rounded px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="font-medium">
              पूर्ण नाव / Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Enter full name"
              className="mt-2 w-full border rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">
              ईमेल पत्ता / Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="mt-2 w-full border rounded px-3 py-2"
            />
          </div>

          {/* Certificate Type */}
          <div>
            <label className="font-medium">
              प्रमाणपत्र प्रकार / Certificate Type
            </label>
            <input
              type="text"
              value={certificateType}
              disabled
              className="mt-2 w-full border rounded px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Certificate Holder Name */}
          <div>
            <label className="font-medium">
              प्रमाणपत्र धारकाचे नाव / Certificate Holder Name{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="certificate_holder_name"
              required
              placeholder="Enter holder name"
              className="mt-2 w-full border rounded px-3 py-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-medium">
              दिनांक / Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="mt-2 w-full border rounded px-3 py-2"
            />
          </div>

          {/* Required Documents */}
          {/* <div className="md:col-span-3">
            <label className="font-medium">
              आवश्यक कागदपत्रे / Required Documents
            </label>
            <input
              type="file"
              name="documents"
              required
              className="mt-2 block w-full text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              PDF, JPG, PNG files (Max 1MB per file)
            </p>
          </div> */}

          {/* Submit */}
          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            >
              सबमिट करा
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
