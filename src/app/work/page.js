'use client' 
import Link from 'next/link'
import React from 'react'
import { Building, Calendar, Mail, MapPin, Phone, Users } from 'lucide-react';
import Footer from '@/components/Footer';

function page() {

    
    const villageDetails = [
    { icon: MapPin, label: "District", value: "Your District Name" },
    { icon: Building, label: "Taluka", value: "Your Taluka Name" },
    { icon: Users, label: "Total Population", value: "5,234" },
    { icon: Phone, label: "Panchayat Office", value: "+91 XXXXXXXXXX" },
    { icon: Mail, label: "Email", value: "grampanchayat@village.in" },
  ];

  const workDone = [
    {
      image: '/tree.jpeg',
      title: "वृक्षलागवड",
      description: "वृक्षारोपण कार्यक्रम यशस्वीरीत्या पार पडला. पर्यावरण संवर्धनासाठी गावातील नागरिकांनी उत्साहाने सहभाग घेतला.",
    },
    {
      image: '/gram.png',
      title: "ग्रामपंचायत कार्यालय सोयी सुविधा करणे",
      description: "ग्रामपंचायतीच्या नूतनीकरणाचे कार्य यशस्वीरीत्या पूर्ण झाले. नवीन रूपात ग्रामपंचायत नागरिकांसाठी अधिक सुविधा आणि स्वच्छतेसाठी तत्पर आहे.",
    },
    {
      image: '/smashan.jpeg',
      title: "स्मशानभूमी सोयी सुविधा करणे",
      description: "Construction of multi-purpose community center with facilities for meetings, cultural events, and public gatherings serving the entire village population.",
    },
    {
      image: '/grampancha.jpeg',
      title: "ग्रामपंचायत समोर पेविंग ब्लॉक बसवणे.",
      description: "Installation of 45 solar-powered LED street lights across the village, providing sustainable and eco-friendly lighting for improved safety and visibility.",
    },
  ];


  return (
    <div>
         {/* Work Done Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">गावात झालेली कामे </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ग्रामपंचायतीने पूर्ण केलेले अलिकडचे पायाभूत सुविधा आणि विकास प्रकल्प
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workDone.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden border-gray-400 bg-green-100 hover:shadow-large transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                
                    <span className="text-sm font-medium">{project.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default page