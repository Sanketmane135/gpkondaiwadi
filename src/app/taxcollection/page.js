import Footer from '@/components/Footer'
import React from 'react'

function page() {
  return (
     <main className="   ">
      {/* Header */}
     

      {/* Info Section */}
      <section className=" bg-white rounded-2xl p-5">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
         गाव कर भरणे का महत्त्वाचे आहे?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
        तुमच्या गावातील कर भरल्याने स्थानिक प्रशासनाकडे रस्ते देखभाल, कचरा व्यवस्थापन, रस्त्यावरील दिवे आणि सामुदायिक विकास कार्यक्रम यासारख्या आवश्यक सार्वजनिक सेवांसाठी आवश्यक निधी उपलब्ध आहे याची खात्री होते.
तुमचे योगदान तुमच्या गावाच्या वाढीला, स्वच्छता आणि शाश्वततेला थेट पाठिंबा देते.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-10">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              मालमत्ता कर यावरती भरा 
            </h3>
            <img
              src="/ghar.png"
              alt="Property Tax QR Code"
              className="mx-auto  w-40 h-40 md:w-56 md:h-56  rounded-xl border border-gray-300 shadow-sm"
            />
            <p className="mt-3 text-sm text-gray-600">
              कृपया कर भरताना आपले नाव व घर नंबर व फोन नंबर इत्यादी माहिती भरावी 
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
             पाणी कर यावरती भरा 
            </h3>
            <img
              src="/pani.png"
              alt="Water Tax QR Code"
              className="mx-auto  w-40 h-40 md:w-56 md:h-56 rounded-xl border border-gray-300 shadow-sm"
            />
            <p className="mt-3 text-sm text-gray-600">
              कृपया कर भरताना आपले नाव व घर नंबर व फोन नंबर इत्यादी माहिती भरावी 
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer/>
    </main>
  )
}

export default page