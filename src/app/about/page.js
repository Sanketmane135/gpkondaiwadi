'use client' 
import { Building, Calendar, Mail, MapPin, Phone, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselSpacing } from '@/components/cursol';
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
     <div className="w-full  bg-background">
      {/* Header with Back Button */}
      
{/* 
      
            <CarouselSpacing/> */}

      {/* Village Details Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">आमच्या गावाबद्दल जाणून घ्या </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              मौजे कोंडाईवाडी हे सांगली जिल्ह्यातील शिराळा तालुक्यात वसलेले एक निसर्गरम्य आणि ऐतिहासिक पार्श्वभूमी असलेले गाव आहे. हे गाव डोंगराच्या पायथ्याशी व हिरव्यागार परिसरात असल्याने येथे शेती हा प्रमुख व्यवसाय आहे. पूर्वीच्या काळात गावामध्ये पिण्याच्या पाण्याची टंचाई, अपुरी रस्ते सुविधा, विजेचा अभाव, शिक्षण व आरोग्याच्या मर्यादित सोयी अशा अनेक समस्या होत्या. लोकसंख्या कमी असून रोजगाराच्या संधी मर्यादित असल्यामुळे काही लोक शहरांकडे स्थलांतर करत होते. गावातील शेती पूर्णपणे पावसावर अवलंबून असल्याने उत्पादन कमी व आर्थिक परिस्थिती मर्यादित होती. गेल्या काही वर्षांत ग्रामपंचायत व गावकऱ्यांच्या एकत्रित प्रयत्नांमुळे कोंडाईवाडी गावाने विकासाच्या दिशेने उल्लेखनीय वाटचाल केली आहे. मुख्यमंत्री समृद्ध पंचायतराज अभियान, स्वच्छ भारत मिशन, जलजीवन मिशन, माझी वसुंधरा अभियान, आणि मनरेगा योजना यांसारख्या विविध शासकीय योजनांचा प्रभावी वापर ग्रामपंचायतीने केला आहे. आज गावातील प्रत्येक घराला पिण्याच्या पाण्याची नळजोडणी मिळाली असून घराघरात शौचालयांची सुविधा उपलब्ध झाली आहे. सर्व मुख्य रस्त्यांचे डांबरीकरण झाले असून रस्त्यांवर सौरऊर्जेवरील एलईडी दिवे बसवले गेले आहेत.
                गावातील जिल्हा परिषद शाळा सुसज्ज इमारतीत कार्यरत असून संगणक शिक्षण व ई-लर्निंग सुविधा उपलब्ध आहेत. महिला बचतगटांनी गावाच्या आर्थिक प्रगतीत मोलाचे योगदान दिले असून घरगुती व्यवसाय, अन्नप्रक्रिया, शेतीपूरक उद्योग यामध्ये महिलांचा सहभाग वाढला आहे. आरोग्य उपकेंद्रात नियमित आरोग्य तपासणी, माता-बाल संगोपन शिबिरे आणि जनजागृती कार्यक्रम राबवले जात आहेत. स्वच्छता मोहिमेद्वारे गावात घनकचरा व्यवस्थापन व वृक्षलागवड उपक्रम राबवले गेले आहेत. डिजिटल ग्रामपंचायत संकल्पनेअंतर्गत नागरिक सेवा केंद्र सुरू करण्यात आले आहे, ज्यामार्फत जन्म-मृत्यू दाखले, करभरणा व विविध अर्ज ऑनलाईन पद्धतीने करता येतात. रेन वॉटर हार्वेस्टिंग योजनेअंतर्गत अंगणवाडी इमारतींमध्ये पावसाचे पाणी साठवून जलसंधारणाचे उत्तम उदाहरण निर्माण केले आहे. ग्रामपंचायत व गावकऱ्यांच्या एकत्रित प्रयत्नांमुळे कोंडाईवाडी गाव आज स्वच्छ, हरित आणि सुसंस्कृत गाव म्हणून तालुक्यात ओळखले जाते.
                गावाच्या विकासाच्या प्रवासात पारदर्शक प्रशासन, जनसहभाग आणि सामूहिक निर्णय प्रक्रिया यांचा उत्तम संगम दिसून येतो. गावाने सामाजिक ऐक्य राखून सर्व योजनांचा प्रभावी वापर करून आदर्श ग्रामपंचायत म्हणून आपली ओळख निर्माण केली आहे. भविष्यात हे गाव पूर्णपणे सौरऊर्जेवर चालणारे, शून्य कचरा असलेले आणि जलसंपन्न गाव बनविण्याचे उद्दिष्ट ठेवून कार्यरत आहे. कोंडाईवाडी ग्रामपंचायतीने आत्मनिर्भरतेकडे वाटचाल करत ग्रामविकासाचे सुंदर उदाहरण निर्माण केले आहे. ग्रामस्थांच्या सहभागातून, महिला व युवकांच्या योगदानातून आणि शासकीय योजनांच्या योग्य अंमलबजावणीमुळे हे गाव आज एक यशोगाथा ठरले आहे.
            </p>
          </div>

        </div>
      </section>
      <Footer/>

    
      
    </div>
  )
}

export default page