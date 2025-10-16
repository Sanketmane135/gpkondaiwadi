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
        <h1 className="mb-4 animate-fade-in text-5xl font-bold text-white md:text-7xl">
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
    <Footer/>
    </div>
  );
}
