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
            <div className="glass-card rounded-[2rem] p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-8">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-primary mb-1 text-lg">Phone / WhatsApp</h4>
                    <p className="text-slate-600 font-medium text-lg">+91 95357 04871</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
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
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
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

            {/* Google Map Embed */}
            <div className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100 overflow-hidden h-64 shadow-sm">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.119098758836!2d77.5190!3d13.0450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0000000001%3A0x0!2sJalahalli+Cross!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, borderRadius: "1.5rem" }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="glass-card rounded-[2rem] p-8 h-fit">
             <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm mb-6">
               Send a Message
             </div>
             <h3 className="text-3xl font-heading font-extrabold text-primary mb-4">Book Your Driving Class</h3>
             <p className="text-slate-600 mb-8 leading-relaxed">
               Fill out the form below or message us on WhatsApp for an immediate response.
             </p>
             
             <form className="flex flex-col gap-5 mb-8" action="#">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/50" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-slate-700 mb-2">Interested In</label>
                  <select id="course" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white/50">
                    <option>Hatchback Basics</option>
                    <option>SUV Masterclass</option>
                    <option>DL Assistance</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <Button variant="primary" className="w-full h-14 mt-2 text-lg">
                  Submit Enquiry
                </Button>
             </form>
             
             <div className="flex flex-col gap-4 pt-6 border-t border-slate-200/60">
                <p className="text-center text-sm font-semibold text-slate-500 mb-2">Prefer instant chat?</p>
                <a href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full h-12 text-base shadow-md gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
