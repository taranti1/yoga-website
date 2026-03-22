"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const galleryImages = [
  {
    src: "/images/cynthia/about-secondary.jpg",
    alt: "Cynthia in warrior pose on the beach",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/reiki/retreat/retreat-2.jpg",
    alt: "Meditation circle at Orchard View Lavender Farm with cushions arranged in the barn",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/cynthia/spiritual-greeting.jpg",
    alt: "Cynthia sharing a heartfelt moment during a spiritual gathering",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/yoga/class-1.jpg",
    alt: "Group yoga class photo with students on mats in a decorated studio",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/reiki/retreat/retreat-3.jpg",
    alt: "Yoga mats set up in beautiful barn venue overlooking lavender fields",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/yoga/private-session.jpg",
    alt: "Private restorative yoga session in a beachside home",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryTeaser() {
  return (
    <SectionWrapper background="cream">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
          Gallery
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
          On the Mat & Beyond
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-deep-forest/0 group-hover:bg-deep-forest/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-warm-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                +
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
