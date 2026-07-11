import Link from "next/link";
import { ShieldCheck, Target, Users, Award, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About OM Shiva Motor Driving School | Trusted in North Bangalore",
  description: "Learn about OM Shiva Motor Driving School, a professional, friendly, and trustworthy driving academy serving Peenya, Jalahalli, and Chokkasandra.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">The Story Behind the Wheel</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Professional. Friendly. Trustworthy. Safe. <br/>
            Discover why we are the top-rated driving school in North Bengaluru with a 4.9★ Google Rating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32 max-w-6xl mx-auto">
          <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-100 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent mix-blend-multiply" />
             <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-8 border border-slate-200">
                <Car className="w-24 h-24 text-slate-300 mb-4" />
                <span className="text-slate-500 font-bold text-xl font-heading">Modern Training Fleet</span>
             </div>
          </div>
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm mb-6 border border-slate-200">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6">Building Confident Drivers in Bengaluru</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Based in the bustling area of Jalahalli Cross, Peenya, OM Shiva Motor Driving School was established to change how driving is taught. We saw too many anxious learners and impatient instructors. We decided to build an academy focused purely on the student.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Today, whether you are a college student, a working professional needing flexible hours, a woman looking for a safe learning environment, or a senior citizen fulfilling a lifelong dream, we are here to support you. We teach defensive driving, traffic management, and absolute vehicle control.
            </p>
            <div className="flex gap-4">
               <div className="text-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex-1">
                 <div className="font-heading font-bold text-2xl text-accent">200+</div>
                 <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Verified Reviews</div>
               </div>
               <div className="text-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex-1">
                 <div className="font-heading font-bold text-2xl text-accent">100%</div>
                 <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Safe Learning</div>
               </div>
            </div>
          </div>
        </div>

        {/* Brand Personality & Values */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-12 text-center">What Defines Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Student-Focused", desc: "Every lesson is tailored to your learning pace and comfort level." },
              { icon: Clock, title: "Flexible & Modern", desc: "Timings from 6 AM to 8 PM with modern, well-maintained cars." },
              { icon: ShieldCheck, title: "Trustworthy & Safe", desc: "Dual controls and expert instructors guarantee a stress-free experience." },
              { icon: Users, title: "Friendly & Patient", desc: "We specialize in teaching nervous beginners and first-time learners." }
            ].map((value, i) => (
              <div key={i} className="glass-card rounded-[2rem] p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
