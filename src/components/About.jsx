import { Heart, MapPin, Sprout, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react' 

function About() {
    const stats = [
    { icon: Users, label: "लोकसंख्या", value: "1013+" },
    { icon: MapPin, label: "क्षेत्र", value: " 3.12 चौ.किमी" },
    { icon: Sprout, label: "शेती ", value: "2.60 चौ.किमी" },
    { icon: Heart, label: "घरे", value: "168+" },
  ];
  return (
     <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">गावाबद्द्ल वाचा</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">

परंपरा, शेती आणि शाश्वत विकास यांवर आधारित एक समृद्ध आणि प्रगतिशील समुदाय.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-slide-up border-border hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                   <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card border-border shadow-soft">
          <div className="p-8">
            <p className="text-foreground leading-relaxed text-center md:text-left">
            मौजे कोंडाईवाडी हे सांगली जिल्ह्यातील शिराळा तालुक्यात वसलेले एक निसर्गरम्य आणि ऐतिहासिक पार्श्वभूमी असलेले गाव आहे. हे गाव डोंगराच्या पायथ्याशी व हिरव्यागार परिसरात असल्याने येथे शेती हा प्रमुख व्यवसाय आहे. पूर्वीच्या काळात गावामध्ये पिण्याच्या पाण्याची टंचाई, अपुरी रस्ते सुविधा, विजेचा अभाव, शिक्षण व आरोग्याच्या मर्यादित सोयी अशा अनेक समस्या होत्या. लोकसंख्या कमी असून रोजगाराच्या संधी मर्यादित असल्यामुळे काही लोक शहरांकडे स्थलांतर करत होते.....
          <Link href={'/about'} className='px-2 py-1 rounded text-white border border-green-700 bg-green-700'>आणखीनं  वाचा </Link>
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About