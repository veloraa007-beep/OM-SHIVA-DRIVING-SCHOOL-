import { Star, Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Student",
      text: "I was terrified of Bengaluru traffic, but Ram sir's patience is incredible. He taught me to anticipate traffic rather than just react to it. I now drive to my office in Manyata Tech Park every day with zero fear.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
      name: "Karthik N.",
      role: "IT Professional",
      text: "From LLR to permanent license, the team handled everything flawlessly. The dual-control cars made me feel safe during my initial days. Highly recommend them for anyone in Peenya or Jalahalli.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "Lakshmi Rao",
      role: "Senior Citizen",
      text: "At 55, I thought it was too late to learn. The instructors here proved me wrong. They were incredibly respectful, patient, and modified their teaching style to suit my pace. A life-changing experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">Real Stories. Real Confidence.</h2>
          <p className="text-slate-600 text-lg">Don't just take our word for it. Read what our 200+ successful students have to say about their journey with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full relative overflow-hidden bg-slate-200">
                  <Image 
                    src={review.image} 
                    alt={review.name} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
