"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const retreatImages = [
  "/images/reiki/retreat/retreat-1.jpg",
  "/images/reiki/retreat/retreat-3.jpg",
  "/images/reiki/retreat/retreat-4.jpg",
  "/images/reiki/retreat/retreat-5.jpg",
];

export default function RetreatFeature() {
  return (
    <SectionWrapper background="sand">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-body text-xs uppercase tracking-[0.2em] text-clay mb-4 block">
            Signature Offering
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light mb-6">
            Petite Retreat at Orchard View Lavender Farm
          </h2>
          <p className="font-body text-charcoal/80 leading-relaxed mb-4">
            Escape for a day of renewal surrounded by rows of fragrant lavender
            and rolling green hills. This signature petite retreat weaves
            together gentle yoga, reiki healing, guided meditation, and mindful
            connection with nature.
          </p>
          <p className="font-body text-charcoal/80 leading-relaxed mb-8">
            You will have space to breathe, restore, and reconnect with
            yourself. Whether you are new to yoga and reiki or a seasoned
            practitioner, this intimate gathering offers something deeply
            nourishing for everyone.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Reserve Your Spot
          </Button>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {retreatImages.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 h-64" : "h-48"
              }`}
            >
              <Image
                src={src}
                alt={`Lavender farm retreat ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes={
                  i === 0
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 1024px) 50vw, 25vw"
                }
              />
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
