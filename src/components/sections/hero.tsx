import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-48 pb-24 md:pb-32">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-background to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 mb-8 shadow-sm">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </span>
            <span className="text-sm font-semibold text-slate-700">4.9/5 from 200+ Verified Reviews</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-primary mb-6 leading-tight">
            Learn Safe. Drive Smart. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">Build Confidence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Welcome to the most trusted driving school in Peenya and North Bengaluru. Whether you're a first-time learner, working professional, or senior citizen, our patient trainers will guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 text-lg shadow-xl shadow-blue-500/20 rounded-full px-8 py-6 transition-transform hover:scale-105 active:scale-95">
                Book Your Class Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg bg-white rounded-full px-8 py-6 hover:bg-slate-50 transition-all">
                <Phone className="w-5 h-5 text-accent" />
                Call +91 95357 04871
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
