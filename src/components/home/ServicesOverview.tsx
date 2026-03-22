"use client";

import { motion } from "framer-motion";
import { Flower2, Hand, Mountain } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: Flower2,
    title: "Yoga Classes",
    description:
      "From dynamic vinyasa to deep restorative, find the practice that meets you where you are. Group classes, private sessions, and specialized workshops across New Jersey.",
    href: "/services",
  },
  {
    icon: Hand,
    title: "Reiki Healing",
    description:
      "Experience the gentle power of universal life energy. In-person and distance reiki sessions to clear blockages, restore balance, and support your body's natural healing.",
    href: "/services",
  },
  {
    icon: Mountain,
    title: "Workshops & Retreats",
    description:
      "Go deeper with immersive experiences — from new moon ceremonies and reiki trainings to our signature petite retreat at Orchard View Lavender Farm.",
    href: "/services",
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper background="cream">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
          What I Offer
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
          Paths to Practice
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className={`group ${i === 1 ? "md:mt-8" : ""}`}
          >
            <Link href={service.href} className="block">
              <div className="bg-warm-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <service.icon
                    size={26}
                    className="text-sage"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-2xl text-deep-forest mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center font-body text-sm font-semibold text-sage tracking-wide uppercase">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
