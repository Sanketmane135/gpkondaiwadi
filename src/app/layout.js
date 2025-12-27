import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ग्रामपंचायत कोंडाईवाडी",
  description: "गाव म्हणजे केवळ मातीचे घर नाही, तर ती आपल्या आठवणींची बाग आहे",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main className="pt-15 ">
          
        {children}
        </main>
       
      </body>
    </html>
  );
}
