'use client' 
import Link from 'next/link'
import React from 'react'
import { AppWindowMac, Building, Calendar, Cpu, DecimalsArrowLeft, Dribbble, Droplet, GraduationCap, Heart, Leaf, Lightbulb, Mail, MapPin, Phone, Rainbow, Rotate3d, Users } from 'lucide-react';
import Footer from '@/components/Footer';

function page() {

    
    const villageDetails = [
    { icon: MapPin, label: "District", value: "Your District Name" },
    { icon: Building, label: "Taluka", value: "Your Taluka Name" },
    { icon: Users, label: "Total Population", value: "5,234" },
    { icon: Phone, label: "Panchayat Office", value: "+91 XXXXXXXXXX" },
    { icon: Mail, label: "Email", value: "grampanchayat@village.in" },
  ];

  const schemes = [
    {
      title: " महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना (MGNREGA)",
      icon: Users,
      category: "काम",
      description: " ग्रामीण भागात सर्वसामान्यांना हमीने रोजगार उपलब्ध करून देणे..",
      benefits: ["दरवर्षी प्रत्येक ग्रामीण कुटुंबातील प्रौढ सदस्यास १०० दिवसांचा मजुरीचा रोजगार.", "रस्ते काम ", "पाणी साठवण"],
      status: "चालू आहे ",
      // enrolled: "45 families",
      // launched: "April 2023"
    },
    {
      title: "प्रधानमंत्री ग्रामीण सडक योजना (PMGSY)",
      icon: Rotate3d,
      category: "रस्ते बांधणी ",
      description: "दुर्गम ग्रामीण भागांना मुख्य रस्त्यांशी जोडणे.",
      benefits: ["चांगले रस्ते", "वाहतूक सुलभता", "बाजारपेठांपर्यंत पोहोच."],
      status: "चालू आहे ",
      // enrolled: "180 households",
      // launched: "January 2023"
    },
    {
      title: "जल जीवन मिशन",
      icon: Leaf,
      category: "पाणी योजना ",
      description: "प्रत्येक घरात नळाद्वारे शुद्ध पाणी पोहोचवणे.",
      benefits: ["ग्रामस्थांना घरबसल्या पिण्याचे पाणी उपलब्ध होते."],
      status: "चालू आहे ",
      // enrolled: "230 workers",
      // launched: "Ongoing"
    },
    {
      title: "स्वच्छ भारत मिशन (ग्रामीण)",
      icon: Heart,
      category: "स्वच्छता योजना",
      description: "गावात स्वच्छता राखणे व मुक्तशौचालयमुक्त गाव करणे.",
      benefits: ["शौचालय बांधणीसाठी अनुदान", "स्वच्छ परिसर."],
      status: "चालू आहे ",
      // enrolled: "95% coverage",
      // launched: "March 2022"
    },
    {
      title: "प्रधानमंत्री आवास योजना (Gramin)",
      icon: GraduationCap,
      category: "घरकुल योजना",
      description: "ग्रामीण गरीबांना पक्के घर मिळवून देणे.",
      benefits: ["पात्र कुटुंबांना घर बांधण्यासाठी आर्थिक मदत.", "राहण्यासाठी पक्के घर "],
      status: "चालू आहे ",
      // enrolled: "320 students",
      // launched: "Ongoing"
    },
    {
      title: "राष्ट्रीय ग्रामीण आजीविका अभियान (NRLM / उमेद)",
      icon: Rainbow,
      category: "आर्थिक मदत ",
      description: "स्वयं-सहायता गटांच्या माध्यमातून महिलांना आर्थिकदृष्ट्या सक्षम करणे.",
      benefits: ["सूक्ष्म कर्ज,", " व्यवसाय प्रशिक्षण", " रोजगार निर्मिती."],
      status: "चालू आहे ",
      // enrolled: "65 lights installed",
      // launched: "June 2024"
    },

    {
      title: " प्रधानमंत्री कृषि सिंचन योजना",
      icon: Lightbulb,
      category: "शेती योजना ",
      description: " शेतकऱ्यांना सिंचनाची सोय उपलब्ध करून देणे.",
      benefits: ["शेती उत्पादन वाढ,", "  ठिबक व फवारणीसाठी अनुदान", " रोजगार निर्मिती."],
      status: "चालू आहे ",
      // enrolled: "65 lights installed",
      // launched: "June 2024"
    },

    {
      title: "सामाजिक सुरक्षा योजना (NSAP)",
      icon: Dribbble,
      category: "ग्राम सुरक्षा ",
      description: "वृद्ध, विधवा व अपंग नागरिकांना आर्थिक सहाय्य.",
      benefits: [" दरमहा पेन्शन ", " आर्थिक सुरक्षा."],
      status: "चालू आहे ",
      // enrolled: "65 lights installed",
      // launched: "June 2024"
    },

    {
      title: "ग्रामविकास योजना (राज्यस्तरीय)",
      icon: AppWindowMac,
      category: "ग्रामविकास",
      description: "गावाचा एकात्मिक विकास — रस्ते, पाणी, स्वच्छता, आरोग्य, शिक्षण.",
      benefits: ["ग्रामपंचायतींना निधी देऊन विविध विकासकामे राबवली जातात."],
      status: "चालू आहे ",
      // enrolled: "65 lights installed",
      // launched: "June 2024"
    },

    {
      title: "समग्र शिक्षण अभियान (SSA)",
      icon: Cpu,
      category: "शिक्षण ",
      description: "सर्व मुलांना मोफत व सक्तीचे प्राथमिक शिक्षण.",
      benefits: ["शाळांची उभारणी", " पाठ्यसाहित्य", " शिक्षक नियुक्ती."],
      status: "चालू आहे ",
      // enrolled: "65 lights installed",
      // launched: "June 2024"
    },
  ];


//     const getIconColor = (category) => {
//     const colors: { [key] } = {
//       Housing: "text-blue-500",
//       "Water Supply": "text-cyan-500",
//       Employment: "text-green-500",
//       Sanitation: "text-pink-500",
//       Education: "text-purple-500", 
//       Energy: "text-yellow-500",
//     };
//     return colors[category] || "text-primary";
//   };

  const workDone = [
    {
      image: '/sarpanch.jpeg',
      title: "Road Construction Project",
      date: "January 2024",
      description: "Construction of 2.5 km concrete road connecting main village to agricultural areas, improving transportation and farmer accessibility to markets.",
    },
    {
      image: '/sarpanch.jpeg',
      title: "Clean Water Supply Initiative",
      date: "December 2023",
      description: "Installation of new water pipelines and overhead tank with 50,000-liter capacity, ensuring clean drinking water supply to 200+ households.",
    },
    {
      image: '/sarpanch.jpeg',
      title: "Community Center Development",
      date: "October 2023",
      description: "Construction of multi-purpose community center with facilities for meetings, cultural events, and public gatherings serving the entire village population.",
    },
    {
      image: '/sarpanch.jpeg',
      title: "Solar Street Lighting Project",
      date: "September 2023",
      description: "Installation of 45 solar-powered LED street lights across the village, providing sustainable and eco-friendly lighting for improved safety and visibility.",
    },
  ];


  return (
    <div>
         
       <div className=" p-8 grid md:grid-cols-2 gap-6">
          {schemes.map((scheme, index) => {
            const Icon = scheme.icon;
            return (
              <div key={index} className="border-amber-900 bg-green-200 rounded p-5 hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div variant="secondary" className="bg-green-700 text-white p-1 rounded ">
                      {scheme.status}
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold">{scheme.title}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <div variant="outline">{scheme.category}</div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {scheme.launched}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{scheme.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">प्रमुख लाभ :</h4>
                    <ul className="space-y-1">
                      {scheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    {/* <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Enrolled:</span>
                      <span className="font-semibold text-primary">{scheme.enrolled}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default page