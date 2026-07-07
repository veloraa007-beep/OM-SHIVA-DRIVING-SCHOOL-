import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact OM Shiva Motor Driving School | Peenya, Jalahalli",
  description: "Book your driving class today at OM Shiva Motor Driving School. Located in Jalahalli Cross, Peenya. Open Mon-Sun, 6 AM to 8 PM.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Let's Get You on the Road</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ready to build your confidence behind the wheel? Reach out to us today to book your trial class or ask about our RTO assistance services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-8">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-primary mb-1 text-lg">Phone / WhatsApp</h4>
                    <p className="text-slate-600 font-medium text-lg">+91 95357 04871</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-primary mb-1 text-lg">Location</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Jalahalli Cross Road,<br />
                      Near Shiva Temple, Nethaji Nagar,<br />
                      Chokkasandra, Peenya,<br />
                      Bengaluru, Karnataka – 560057
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-primary mb-1 text-lg">Business Hours</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Monday – Sunday<br />
                      6:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Placeholder or Info Box */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
               <h4 className="font-bold text-primary mb-2">Areas We Serve</h4>
               <p className="text-sm text-slate-600 leading-relaxed">
                 We proudly serve students from Peenya, Chokkasandra, Jalahalli, Jalahalli Cross, Nagasandra, Dasarahalli, BEL Circle, T. Dasarahalli, HMT Layout, Yeshwanthpur, Mathikere, Bagalakunte, and Nelagadaranahalli.
               </p>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-fit">
             <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-success font-semibold text-sm mb-6">
               Fastest Response
             </div>
             <h3 className="text-3xl font-heading font-extrabold text-primary mb-4">Book Your Driving Class Today</h3>
             <p className="text-slate-600 mb-8 leading-relaxed">
               For the quickest response, please drop us a message on WhatsApp. Our team will get back to you immediately with course details and available slots.
             </p>
             
             <div className="flex flex-col gap-4">
                <a href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full h-14 text-lg shadow-lg hover:shadow-xl transition-shadow gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </Button>
                </a>
                
                <div className="text-center py-4 text-slate-400 font-medium">OR</div>
                
                <a href="tel:+919535704871">
                  <Button variant="outline" className="w-full h-14 text-lg gap-2 bg-white">
                    <Phone className="w-5 h-5 text-accent" />
                    Call +91 95357 04871
                  </Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
