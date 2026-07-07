import { CheckCircle2, Car, Star } from "lucide-react";

export function WhyChooseUsSection() {
  const usps = [
    "Patient & Experienced Trainers",
    "Beginner Friendly Approach",
    "Modern, Well-Maintained Cars",
    "Flexible Timings (6AM-8PM)",
    "Affordable Fees & Packages",
    "End-to-End DL Assistance",
    "Women & Senior Citizen Safe",
    "4.9★ Google Rating"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
              Why Choose OM Shiva?
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
              The Most Trusted Driving School in Peenya.
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We don't just help you pass a test; we make you a confident driver for life. Our student-first approach has made us the #1 choice across North Bengaluru.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
              {usps.map((usp, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  </div>
                  <span className="font-medium text-slate-700">{usp}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-100 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-multiply" />
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-12 text-center border-4 border-white/50">
                 {/* Visual Placeholder for high quality image */}
                 <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center bg-white/50">
                   <span className="text-slate-400 font-medium">Premium Photography Placeholder</span>
                 </div>
              </div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-heading font-extrabold text-primary">4.9</div>
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-sm font-semibold text-slate-500">Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
