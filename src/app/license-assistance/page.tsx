import { FileText, ShieldCheck, ClipboardCheck, Award, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Driving License Support & RTO Assistance | Peenya, Bangalore",
  description: "Get complete RTO documentation assistance, LLR scheduling, and driving license test preparation support from OM Shiva Motor Driving School.",
};

const steps = [
  {
    num: "01",
    title: "Learner's License (LLR) Support",
    desc: "We assist with compiling your address proofs, age verification records, filling out the RTO forms, and booking your slot for the computer-based LLR test."
  },
  {
    num: "02",
    title: "RTO Slot Booking & Verification",
    desc: "Skip long queues. We track RTO availability to schedule your physical road test at a time convenient for your personal and work hours."
  },
  {
    num: "03",
    title: "Practical Road Test Preparation",
    desc: "Our trainers conduct dedicated mockup tests on the RTO track format (8-shape loop, reverse parking, and gradient control drills) so you can pass the first time."
  },
  {
    num: "04",
    title: "Test-Day Vehicle Provision",
    desc: "We provide the exact dual-control Maruti Swift or Maruti Brezza (2025) that you trained in to use during your official RTO driving license road test."
  }
];

export default function LicensePage() {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Driving License & RTO Support</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Obtaining your driving license shouldn&apos;t be a stressful bureaucratic headache. We handle all documentation, slots, and test prep for you.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: ClipboardCheck,
              title: "Zero Documentation Stress",
              desc: "No confusing forms. Our team manages all paperwork, age verifications, and online portal filings."
            },
            {
              icon: ShieldCheck,
              title: "100% Legal & Safe Process",
              desc: "We strictly follow the official parivahan guidelines, ensuring a clean, legal licensing journey."
            },
            {
              icon: Award,
              title: "Mock Road Test Drills",
              desc: "Train directly on mock layouts of RTO track formats to completely eliminate test-day nervousness."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Step-by-Step path */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-12 text-center">Your Road to a Permanent License</h2>
          <div className="grid gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row gap-6 items-start">
                <div className="text-4xl font-heading font-extrabold text-accent shrink-0 md:pt-1">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-primary text-white p-12 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 to-transparent" />
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Need LLR or Driving License assistance?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 relative z-10">
            Get absolute support from our Bangalore RTO specialists. We schedule everything around your schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="https://wa.me/919535704871?text=Hi%2C%20I%20need%20assistance%20with%20my%20driving%20license">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Apply for License support
              </Button>
            </a>
            <a href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-primary transition-all">
                <Phone className="w-5 h-5" />
                Call +91 95357 04871
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
