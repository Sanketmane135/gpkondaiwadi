import React from 'react'

function Gallary() {

    const images = [
    {
      src: "/parayan.jpeg",
      title: "पारायण सोहळा ",
      description: "वार्षिक पारायण सोहळ्याची दृशे ",
    },
    {
      src:"/festival.jpeg",
      title: "शिवजयंती ",
      description: "पारंपरिक शिवजयंती उत्सव सोहळा ",
    },
    {
      src: "/vari.jpeg",
      title: "वारी सोहळा ",
      description: "दरवर्षी चालणारी विठू रायाची वारीचे काही क्षण ",
    },
    {
      src: "/clean.jpeg",
      title: "स्वच्छता मोहीम ",
      description: "गावकऱ्यांच्या मदतीने गावात स्वछता मोहीम राबवली ",
    },
  ];
  return (
     <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">गावाची गॅलरी </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           आमच्या सुंदर गावातील जीवन, संस्कृती आणि परंपरांची झलक
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden border-border rounded hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
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

export default Gallary