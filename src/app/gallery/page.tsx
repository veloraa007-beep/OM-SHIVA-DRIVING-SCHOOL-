import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Car, MapPin, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Training Fleet & Office Gallery | OM Shiva Motor Driving School",
  description: "See our modern, dual-control training vehicles, our office near Jalahalli Cross, and happy students who passed their RTO driving tests.",
};

const galleryItems = [
  {
    title: "Maruti Suzuki Swift",
    category: "Training Fleet",
    desc: "Equipped with professional dual-control brake & clutch systems for absolute beginner safety.",
    aspect: "Manual Petrol Hatchback",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
  },
  {
    title: "Maruti Suzuki Brezza (2025)",
    category: "Training Fleet",
    desc: "Learn to drive a modern SUV. Features high visibility, parking sensors, and easy controls.",
    aspect: "New SUV Model",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
  },
  {
    title: "OM Shiva Office Proximity",
    category: "Location Hub",
    desc: "Conveniently located at Jalahalli Cross Road, right near the Shiva Temple in Chokkasandra.",
    aspect: "Peenya, Bangalore",
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=800&q=80"
  },
  {
    title: "RTO License Handover",
    category: "Success Stories",
    desc: "Celebrating our students passing their RTO road tests and receiving physical driving cards.",
    aspect: "94% First-Time Pass",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
  },
  {
    title: "Parallel Parking Drill",
    category: "Training Classes",
    desc: "Dedicated segments where instructors train students in tight spatial parking maneuvers.",
    aspect: "Practical Curriculum",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
  },
  {
    title: "Bumper-to-Bumper Traffic Session",
    category: "Training Classes",
    desc: "Real-world exposure lessons helping drivers handle Bengaluru's heavy peak hour roads.",
    aspect: "Confidence Building",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
  }
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <ImageIcon className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Fleet & Training Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real photos demonstrating our training vehicles, local training routes, and happy student licensing moments in North Bangalore.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryItems.map((item, i) => (
            <div key={i} className="group glass-card rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              {/* Photo Placeholder */}
              <div className="aspect-[4/3] bg-slate-100 flex flex-col justify-between relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-multiply z-10" />
                
                <div className="p-8 h-full flex flex-col justify-between relative z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 w-fit uppercase tracking-wider border border-slate-200 shadow-sm">
                    {item.category}
                  </div>
                  <div className="flex flex-col items-start justify-end flex-grow pt-6">
                    <span className="text-xs font-semibold text-white mt-2">{item.aspect}</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-primary text-white p-12 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 to-transparent" />
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Want to see our vehicles in person?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 relative z-10">
            Visit our physical office near the Shiva Temple at Jalahalli Cross, or schedule a free class demo request today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20visit%20your%20driving%20school%20office">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Schedule Office Visit
              </Button>
            </Link>
            <Link href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-primary transition-all">
                Call +91 95357 04871
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
