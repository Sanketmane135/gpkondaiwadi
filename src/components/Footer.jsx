import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
      <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">संपर्क माहिती</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span> मु.कोंडाईवाडी पो. धामवडे ता.शिराळा जि.सांगली </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91 8767614149</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>gpkondaiwadii1980@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">कार्यालयीन वेळ  </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">सोमवारी ते शुक्रवार </div>
                  <div className="text-primary-foreground/80">सकाळी 10 वाजता  -  सायंकाळी 5 वाजेपर्यंत  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">शनिवारी </div>
                  <div className="text-primary-foreground/80">सकाळी 10 वाजता - दुपारी 2 वाजेपर्यंत</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">सोसिअल मीडिया </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/gpkondaiwadi1980?igsh=ZXZxMm9hcm9kcjds" className="hover:underline flex  gap-1 transition-all">
                  instagram <Instagram/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61555200345875" className=" flex gap-1 hover:underline transition-all">
                  Facebook <Facebook/>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@user-pv4uo3fb8h" className=" flex gap-1 hover:underline transition-all">
                  Youtube <Youtube/>
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80">
            © 2025 ग्रामपंचायत कोंडाईवाडी . All rights reserved.
          </p>
          <p className="pt-5 text-primary-foreground/80">
           Developed By | BEGINNERS IT SOLUTIONS - 9359708620 / 8767743901
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer