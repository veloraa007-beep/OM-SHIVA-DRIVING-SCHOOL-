import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Driving Classes & Packages in Peenya | OM Shiva Motor Driving School",
  description: "Affordable driving classes, refresher courses, defensive driving training, and driving license assistance in Peenya, Jalahalli, and North Bangalore.",
};

export default function CoursesPage() {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-accent font-semibold text-sm mb-6">
            Affordable Fees
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Driving Courses & RTO Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From first-time learners to license applicants, we have a package for you. Transparent pricing, modern cars, and flexible class scheduling.
          </p>
        </div>

        {/* Primary Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              title: "Beginner Driving Classes",
              price: "From ₹4,500",
              duration: "15 Days Training",
              desc: "Perfect for absolute beginners. Step-by-step guidance to build confidence.",
              features: ["Dual control modern vehicles", "Patient, experienced trainers", "City & traffic driving basics", "Parking & reversing techniques", "Flexible scheduling"],
              recommended: true
            },
            {
              title: "Refresher Driving Course",
              price: "From ₹3,000",
              duration: "7 - 10 Days",
              desc: "Already have a license? Regain your confidence in heavy Bengaluru traffic.",
              features: ["Assess current skill level", "Defensive driving training", "Highway driving basics", "Overcoming driving anxiety", "Use your car or ours"],
              recommended: false
            },
            {
              title: "DL Assistance & RTO Support",
              price: "Custom",
              duration: "Fast Track",
              desc: "End-to-end support for LLR and Driving License documentation.",
              features: ["LLR (Learner's License) processing", "RTO documentation support", "Road test preparation", "Test vehicle provided", "Hassle-free process"],
              recommended: false
            }
          ].map((course, i) => (
            <div key={i} className={`relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border ${course.recommended ? 'border-accent ring-2 ring-accent/20' : 'border-slate-100'} transition-transform hover:-translate-y-2 duration-300 flex flex-col`}>
              {course.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 mt-2">{course.title}</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed min-h-[40px]">{course.desc}</p>
              
              <div className="mb-8">
                <div className="text-primary font-extrabold text-3xl mb-1">{course.price}</div>
                <div className="text-accent font-semibold text-sm">{course.duration}</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {course.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20driving%20packages">
                <Button variant={course.recommended ? "primary" : "outline"} className="w-full shadow-sm">
                  Enquire Now
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-10 text-center">Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start">
              <div className="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Defensive Driving Training</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Learn advanced techniques to anticipate hazards, manage unpredictable traffic, and ensure safety for yourself and others on the road.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start">
              <div className="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">RTO Documentation Support</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Skip the long queues. We handle all paperwork for DL renewals, address changes, international permits, and more.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
