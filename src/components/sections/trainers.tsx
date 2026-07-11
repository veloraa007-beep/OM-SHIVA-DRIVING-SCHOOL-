import { Star } from "lucide-react";

export function TrainersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">Meet Your Instructor</h2>
          <p className="text-slate-600 text-lg">With over 25 years of hands-on experience, Prakash brings unparalleled expertise, immense patience, and a deep understanding of Bengaluru's traffic. Learn from a true veteran dedicated to making you a confident, safe, and independent driver.</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-3xl border border-slate-100 p-6 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all duration-300 group">
            <div className="aspect-square w-full rounded-2xl bg-slate-200 mb-6 overflow-hidden relative">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
              <div className="w-full h-full bg-slate-300 flex items-end justify-center pb-4">
                 <div className="w-24 h-24 rounded-full bg-slate-400 opacity-20" />
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">Prakash</h3>
                <p className="text-accent font-medium text-sm">Lead Instructor</p>
              </div>
              <div className="flex bg-white px-2 py-1 rounded shadow-sm items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold">5.0</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Experience</span>
                <span className="font-semibold text-slate-700">25+ Years</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Specialty</span>
                <span className="font-semibold text-slate-700 text-right">Beginner Confidence & Traffic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
