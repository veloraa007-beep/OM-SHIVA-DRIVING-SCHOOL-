import Link from "next/link";
import { HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Frequently Asked Questions | OM Shiva Motor Driving School",
  description: "Get answers to your questions about driving classes, license tests, pricing, timelines, and vehicle configurations in Peenya, Bangalore.",
};

const faqs = [
  {
    q: "I have high driving anxiety. How do your instructors handle nervous beginners?",
    a: "We specialize in teaching nervous beginners. Our core philosophy is patience: we never yell, lose temper, or rush you. Our vehicles are equipped with dual controls (brake and clutch on the instructor's side) so you are 100% safe at all times."
  },
  {
    q: "Can I choose my own schedule? What are the class hours?",
    a: "Yes! We offer flexible scheduling designed for working professionals and students. You can book slots from early morning 6:00 AM to evening 8:00 PM, Monday through Sunday."
  },
  {
    q: "Which cars will I learn to drive in?",
    a: "You will train in modern, well-maintained vehicles. We offer training on a Maruti Suzuki Swift (Petrol, Manual) and a brand-new Maruti Suzuki Brezza (2025 Model, Petrol, Manual)."
  },
  {
    q: "Do you assist with the RTO license process?",
    a: "Yes, we provide end-to-end support. This includes documentation help for your Learner's License (LLR), slot booking, road test scheduling, and we provide the vehicle for your actual RTO test."
  },
  {
    q: "What happens if I fail the RTO road test?",
    a: "If you fail the road test, don't worry. We will provide additional practice sessions targeting the areas you struggled with and reschedule your test slot with the RTO."
  },
  {
    q: "Is there a female-friendly training option?",
    a: "Absolutely. We pride ourselves on creating a highly professional, respectful, and safe environment for all female learners. Many women in Jalahalli and Peenya choose us for our safe learning environment."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <HelpCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our classes, training vehicles, pricing packages, and RTO licensing assistance.
          </p>
        </div>

        <div className="grid gap-6 mb-20">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-start gap-3">
                <span className="text-accent text-lg font-semibold">Q.</span>
                {faq.q}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="bg-primary text-white p-12 rounded-[2.5rem] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 to-transparent" />
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Have more questions?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 relative z-10">
            Our team is available every day from 6:00 AM to 8:00 PM to help. Message us directly on WhatsApp for instant assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20have%20a%20question%20about%20driving%20classes">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </Link>
            <Link href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-primary transition-all">
                <Phone className="w-5 h-5" />
                Call +91 95357 04871
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
