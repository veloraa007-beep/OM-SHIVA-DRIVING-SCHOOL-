import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us | OM Shiva Motor Driving School, Peenya Bangalore",
  description:
    "Book a driving class or ask about our courses. Visit us at Jalahalli Cross, Peenya, Bangalore. Call +91 99022 95515 or WhatsApp anytime.",
  alternates: { canonical: "https://omshivadrivingschool.in/contact" },
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    content: "+91 99022 95515",
    href: "tel:+919902295515",
  },
  {
    icon: MapPin,
    label: "Address",
    content: "Jalahalli Cross Road, Near Shiva Temple, Nethaji Nagar, Chokkasandra, Peenya, Bengaluru – 560057",
    href: "https://maps.app.goo.gl/XbrbyazA2uuoGAry9",
  },
  {
    icon: Clock,
    label: "Business Hours",
    content: "Monday – Sunday · 6:00 AM – 8:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-[120px] pb-16 bg-white border-b border-[#F3F4F6]">
        <div className="container max-w-3xl">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" />
            Contact Us
          </div>
          <h1
            className="font-heading font-extrabold text-[#0F172A] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Let's Get You
            <br />Behind the Wheel
          </h1>
          <p className="text-[#6B7280] text-[1.05rem] leading-relaxed max-w-lg">
            Questions about courses? Ready to book? Just want to talk to someone?
            We respond quickly — call, WhatsApp, or drop by.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-py bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ── Left: Contact Info + Map ── */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="card card-shadow p-7">
                <h2 className="font-heading font-bold text-[#0F172A] text-[18px] mb-6">
                  Get in Touch
                </h2>
                <ul className="space-y-6">
                  {contactItems.map(({ icon: Icon, label, content, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4.5 h-4.5 text-[#2563EB]" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-0.5">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-[#0F172A] text-[15px] font-medium hover:text-[#2563EB] transition-colors"
                          >
                            {content}
                          </a>
                        ) : (
                          <p className="text-[#0F172A] text-[15px] font-medium">{content}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919902295515"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-[#E5E7EB] text-[#374151] font-semibold text-[14px] hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-all card-shadow"
                >
                  <Phone className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20driving%20classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#25D366] text-white font-semibold text-[14px] hover:bg-[#22c55e] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm h-[260px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.119098758836!2d77.5190!3d13.0394117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4c10d0adcf%3A0x2efdb5e6a37d2c95!2sOM%20SHIVA%20MOTOR%20DRIVING%20SCHOOL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OM Shiva Motor Driving School location on Google Maps"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
              >
                Open in Google Maps
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* ── Right: Enquiry Form ── */}
            <div className="card card-shadow p-7 lg:p-8">
              <div className="section-label mb-4">
                <span className="w-5 h-px bg-[#2563EB]" />
                Send an Enquiry
              </div>
              <h2 className="font-heading font-bold text-[#0F172A] text-[22px] mb-2">
                Book Your First Class
              </h2>
              <p className="text-[#6B7280] text-[14px] mb-7 leading-relaxed">
                Fill in your details and we'll call you back to confirm your slot — usually within a few hours.
              </p>

              <form
                className="space-y-5"
                action={`https://wa.me/919902295515`}
                aria-label="Driving class enquiry form"
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Full Name <span className="text-[#EF4444]" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Ranjitha G"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#0F172A] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Phone / WhatsApp <span className="text-[#EF4444]" aria-label="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#0F172A] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                  />
                </div>

                {/* Interested In */}
                <div>
                  <label htmlFor="contact-course" className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Interested In
                  </label>
                  <select
                    id="contact-course"
                    name="course"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#374151] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white appearance-none"
                  >
                    <option value="hatchback">Hatchback Basics (Swift)</option>
                    <option value="suv">SUV Training (Brezza 2025)</option>
                    <option value="license">Driving License Assistance</option>
                    <option value="refresher">Refresher Course</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Anything else?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Preferred timing, location, questions..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#0F172A] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white resize-none"
                  />
                </div>

                {/* Submit */}
                <a
                  href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20driving%20class%20at%20OM%20Shiva%20Driving%20School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#2563EB] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm"
                >
                  Send via WhatsApp
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <p className="text-center text-[12px] text-[#9CA3AF]">
                  We typically respond within 1–2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
