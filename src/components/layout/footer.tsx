import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

const targetAreas = [
  "Peenya",
  "Chokkasandra",
  "Jalahalli",
  "Jalahalli Cross",
  "Nagasandra",
  "Dasarahalli",
  "BEL Circle",
  "T. Dasarahalli",
  "HMT Layout",
  "Yeshwanthpur",
  "Mathikere",
  "Bagalakunte",
  "Nelagadaranahalli",
];

const services = [
  "Beginner Driving Classes",
  "Car Driving Training",
  "Refresher Driving Course",
  "Defensive Driving Training",
  "Driving License Assistance",
  "RTO Documentation Support",
  "Road Test Preparation",
  "Flexible Class Scheduling",
];

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                  OM SHIVA<span className="text-accent">.</span>
                </span>
                <span className="block text-[10px] text-white/50 font-medium tracking-widest uppercase mt-0.5">
                  Motor Driving School
                </span>
              </Link>
              <p className="text-sm italic text-blue-200 mb-4">
                &ldquo;Learn Safe. Drive Smart. Build Confidence.&rdquo;
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                North Bengaluru&apos;s most trusted premium driving academy.
                Building confident, safe, and responsible drivers since day one.
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/courses"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas We Serve */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Areas We Serve
              </h4>
              <ul className="space-y-2">
                {targetAreas.map((area) => (
                  <li key={area}>
                    <span className="text-gray-400 text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    Jalahalli Cross Road, Near Shiva Temple, Nethaji Nagar,
                    Chokkasandra, Peenya, Bengaluru, Karnataka – 560057
                  </span>
                </li>
                <li>
                  <Link
                    href="tel:+919535704871"
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <span>+91 95357 04871</span>
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <span>Mon – Sun, 6:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p>
                © {new Date().getFullYear()} OM Shiva Motor Driving School. All
                rights reserved.
              </p>
              <span className="hidden md:inline text-white/10">|</span>
              <a 
                href="https://velora-sandy.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors group"
              >
                Built by <span className="text-white font-semibold tracking-wide group-hover:text-accent transition-colors">VELORA</span>
              </a>
            </div>
            
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
