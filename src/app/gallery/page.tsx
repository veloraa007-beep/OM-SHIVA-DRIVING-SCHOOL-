import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gallery | OM Shiva Motor Driving School, Peenya Bangalore",
  description:
    "See our training vehicles, school premises, and student driving sessions at OM Shiva Motor Driving School in Peenya, Bangalore.",
  alternates: { canonical: "https://omshivadrivingschool.in/gallery" },
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=85",
    alt: "Student learning to drive on Bangalore roads with driving instructor from OM Shiva Motor Driving School",
    caption: "Real Road Training",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=85",
    alt: "Maruti Suzuki Swift training vehicle at OM Shiva Motor Driving School — dual-control car for beginner drivers",
    caption: "Maruti Swift Fleet",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=85",
    alt: "2025 Maruti Suzuki Brezza SUV used for advanced driving training at OM Shiva Motor Driving School",
    caption: "2025 Brezza SUV",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=85",
    alt: "Driving instructor Prakash explaining car controls to a student inside the training vehicle",
    caption: "Inside the Lesson",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=700&q=85",
    alt: "Student practicing parking maneuver under instructor supervision during driving training session in Peenya",
    caption: "Parking Practice",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=85",
    alt: "Students receiving driving license after completing training at OM Shiva Motor Driving School Bangalore",
    caption: "License Success",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=700&q=85",
    alt: "Morning driving practice session on Jalahalli Cross road with driving instructor from OM Shiva Motor Driving School",
    caption: "Morning Sessions",
    span: "",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-[120px] pb-16 bg-white border-b border-[#F3F4F6]">
        <div className="container max-w-3xl">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" />
            Gallery
          </div>
          <h1
            className="font-heading font-extrabold text-[#0F172A] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Life at
            <br />OM Shiva Driving School
          </h1>
          <p className="text-[#6B7280] text-[1.05rem] leading-relaxed max-w-lg">
            From our first lesson to their driving license — a look at what happens
            inside our school every single day.
          </p>
          <p className="text-[12px] text-[#9CA3AF] mt-4 italic">
            Note: Images below are representative placeholders. Real school photos will replace these shortly.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="section-py bg-[#F8FAFC]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {galleryItems.map(({ src, alt, caption, span }, i) => (
              <figure
                key={i}
                className={`relative rounded-2xl overflow-hidden group bg-[#F3F4F6] border border-[#E5E7EB] ${span}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  unoptimized
                />
                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0F172A]/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-semibold text-[13px]">{caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white border-t border-[#F3F4F6]">
        <div className="container text-center max-w-xl">
          <h2 className="font-heading font-bold text-[#0F172A] text-[22px] mb-3">
            Want to see the school in person?
          </h2>
          <p className="text-[#6B7280] text-[15px] mb-7">
            Come visit us at Jalahalli Cross. We're open every day from 6 AM to 8 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-[14px] hover:bg-[#1d4ed8] transition-colors inline-flex items-center gap-2 justify-center"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20visit%20OM%20Shiva%20Driving%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-[#E5E7EB] text-[#374151] font-semibold text-[14px] hover:bg-[#F9FAFB] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
