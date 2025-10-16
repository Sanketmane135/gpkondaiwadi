'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallary from "@/components/Gallary";
import Leadership from "@/components/Leadership";
import { ChevronDown } from "lucide-react";


export default function Home() {

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" ">
       <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={'/image.png'}
          alt="Beautiful village landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 animate-fade-in text-4xl font-bold text-white md:text-7xl">
         ग्रामपंचायत कोंडाईवाडी 
        </h1>
        <p className="mb-8 max-w-2xl animate-slide-up text-lg text-white/95 md:text-xl">
          गाव म्हणजे केवळ मातीचे घर नाही, तर ती आपल्या आठवणींची बाग आहे
        </p>
        <button
          className="p-2  rounded animate-slide-up bg-white text-primary hover:bg-white/90"
        >
         खाली पहा
        </button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute  p-2 bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white transition-opacity hover:opacity-80"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>

    <About/>
    <Leadership/>
    <Gallary/>

   <div className="w-full flex flex-col items-center justify-center mb-6 px-4">
      <p className="font-bold text-2xl text-center mb-4">
        आमचे गाव नकाशा वरती पहा
      </p>

      <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8048.504011832336!2d74.0337235609017!3d17.071861430024196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1982d383c3ffd%3A0x3ce41569b4c414cf!2sKondaiwadi%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1760621798168!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    
    <Footer/>
    </div>
  );
}
