import Link from "next/link";
import { Star, Quote, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Verified Student Reviews | OM Shiva Motor Driving School",
  description: "Read real stories from over 200+ successful drivers in Peenya and Jalahalli who learned safely with OM Shiva Driving School. 4.9★ Google Rating.",
};

const reviews = [
  {
    name: "Rohan K.",
    role: "First-time Learner (Peenya)",
    rating: 5,
    text: "I was extremely anxious about driving in Bangalore traffic, but the trainer here was incredibly patient. He never yelled once, explained the clutch control logic clearly, and helped me pass my RTO test on the first try. Highly recommended!"
  },
  {
    name: "Priya Sundar",
    role: "Working Professional (Jalahalli)",
    rating: 5,
    text: "The timing flexibility is what saved me. I took the 6:00 AM class before my office shifts. The Maruti Swift is very well maintained, and the RTO licensing process was entirely handled by them. I just showed up for the test!"
  },
  {
    name: "Anjali Rao",
    role: "Student (Dasarahalli)",
    rating: 5,
    text: "Being a woman, safety was my family's biggest concern. The trainers here are very respectful, professional, and patient. They teach defensive driving rules that make you feel confident on busy flyovers. Best driving school in Peenya!"
  },
  {
    name: "Murthy N.",
    role: "Senior Citizen / Refresher (Chokkasandra)",
    rating: 5,
    text: "I hadn't driven in over 15 years and was terrified of the modern traffic. They customized the training pace for me. Very polite instructors who focused on building my confidence step by step."
  },
  {
    name: "Vikram Malhotra",
    role: "DL Applicant (BEL Circle)",
    rating: 5,
    text: "End-to-end service. They handled my LLR, scheduled the road test slot, gave me a Brezza for the test, and supported me till the physical card was delivered. Worth every rupee!"
  }
];

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-slate-700">4.9★ Google Rating · 200+ Verified Reviews</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Success Stories</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from students, working professionals, and families in North Bengaluru who mastered driving with confidence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Google Rating", val: "4.9 ★" },
            { label: "Happy Drivers", val: "2,000+" },
            { label: "Verified Reviews", val: "200+" },
            { label: "First-Time Pass Rate", val: "94%" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.01)] text-center">
              <div className="text-3xl font-heading font-extrabold text-accent mb-1">{stat.val}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials List */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 shrink-0" />
              <div className="relative z-10">
                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{rev.text}&rdquo;</p>
              </div>
              <div className="border-t border-slate-50 pt-4 flex justify-between items-center relative z-10">
                <div>
                  <h4 className="font-bold text-primary">{rev.name}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{rev.role}</p>
                </div>
                <div className="flex items-center gap-1 text-success text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.02)] text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Ready to start your own success story?</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Book your driving package today. Learn under safety-equipped environments with highly certified local guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20register%20for%20driving%20classes">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Book Your Class via WhatsApp
              </Button>
            </Link>
            <Link href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-primary bg-white hover:bg-slate-50 border-2 transition-all">
                Call +91 95357 04871
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
