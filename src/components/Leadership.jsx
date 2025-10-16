import React from 'react'
import { Mail, Phone } from "lucide-react"
function Leadership() {
     const leaders = [
    {
      name: "श्री.अशोक तानाजी सावंत",
      role: "लोक नियुक्त सरपंच",
      image: "/sarpanch.jpeg",
      phone: "+91 9372269546",
      email: "ashoksawant82@gmail.com",
      description:
        "पारदर्शकता, विकास आणि समुदाय कल्याणासाठी समर्पण आणि वचनबद्धतेने आमच्या गावाचे नेतृत्व करणे.",
    },
    {
      name: "श्री.विलास वसंत पाटील",
      role: "उपसरपंच",
      image: "/upsarpanch.jpeg",
      phone: "+91 7218247595",
      email: "upsarpanch@village.gov.in",
      description:
        "महिला सक्षमीकरण, शिक्षण आणि आरोग्यसेवा उपक्रमांवर लक्ष केंद्रित करून गावाच्या विकासाला पाठिंबा देणे.",
    },
    {
      name: "कु .संदेश एकनाथ पाटील",
      role: " ग्रामपंचायत अधिकारी",
      image: "/officer.jpeg",
      phone: "+91 ९३५६५८८४४८",
      email: "sandeshpatil4787@gmail.com",
      description:
        "ग्रामपंचायत अधिकारी म्हणून प्रशासन, ग्रामविकास आणि नागरिकांच्या कल्याणासाठी पारदर्शक व प्रभावी सेवा प्रदान करणे.",
    },
  ];
  return (
  <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">आमचे नेतृत्व</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            आपल्या गावाला प्रगती आणि समृद्धीकडे नेणाऱ्या समर्पित नेत्यांना भेटा.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="overflow-hidden border rounded border-blue-950 hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden ">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-green-700 text-primary-foreground p-1 rounded">
                    {leader.role}
                  </div>
                  
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2">{leader.name}</h3>
                <p className="text-muted-foreground mb-4">{leader.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    {leader.phone}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    {leader.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership