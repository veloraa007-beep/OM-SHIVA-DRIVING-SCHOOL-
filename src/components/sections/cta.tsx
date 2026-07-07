import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-primary to-primary" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6">
          Ready to Master the Road?
        </h2>
        <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Join the highest-rated driving school in Peenya. Secure your slot for this week's batch and get behind the wheel.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2 text-lg px-8 py-6 rounded-full shadow-lg shadow-green-500/20 hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </Link>
            <Link href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg text-white border-2 border-white/20 hover:bg-white hover:text-primary transition-all rounded-full px-8 py-6">
                <Phone className="w-5 h-5" />
                Call +91 95357 04871
              </Button>
            </Link>
        </div>

        <div className="mt-12 text-sm text-blue-200/60 font-medium">
          <p>No hidden fees • Direct RTO Assistance • Government Certified</p>
        </div>
      </div>
    </section>
  );
}
