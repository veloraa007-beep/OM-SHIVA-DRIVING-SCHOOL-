import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-accent font-semibold text-sm mb-6 tracking-wide uppercase">
              About OM Shiva
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
              More than a driving school. <br className="hidden md:block" />
              <span className="text-slate-400">We build confident drivers.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Established with a mission to make Bengaluru's roads safer, OM Shiva Motor Driving School brings decades of experience to your steering wheel. We understand that learning to drive can be intimidating, which is why our approach is rooted in patience, safety, and encouragement.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Government Certified Instructors",
                "Patient, stress-free teaching methods",
                "Dual-control vehicles for maximum safety",
                "Specialized modules for Bengaluru traffic"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image/Visual Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full relative">
            <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-200 overflow-hidden relative shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" 
                alt="Driving instructor teaching a student in a modern car" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply z-10" />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <p className="font-heading font-bold text-xl text-primary mb-1">20+ Years Legacy</p>
                  <p className="text-slate-600 text-sm">Thousands of safe drivers trained in Peenya and beyond.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
