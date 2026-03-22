"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { upcomingEvents } from "@/data/events";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function EventsPreview() {
  return (
    <SectionWrapper background="warm-white">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
          Upcoming
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
          Events & Workshops
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-cream rounded-2xl p-6 hover:shadow-md transition-all duration-300"
          >
            {/* Date Badge */}
            <div className="inline-flex items-center gap-2 bg-sage/10 text-sage rounded-full px-3 py-1.5 mb-4">
              <Calendar size={14} />
              <span className="font-body text-xs font-semibold tracking-wide">
                {event.date}
              </span>
            </div>

            <h3 className="font-heading text-xl text-deep-forest mb-2">
              {event.title}
            </h3>

            <div className="flex items-center gap-1.5 text-charcoal/60 mb-3">
              <MapPin size={14} />
              <span className="font-body text-xs">{event.location}</span>
            </div>

            <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
              {event.description}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center font-body text-sm font-semibold text-sage hover:text-deep-forest transition-colors duration-300 tracking-wide uppercase"
            >
              Reserve Spot
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/contact" variant="secondary">
          Get in Touch
        </Button>
      </div>
    </SectionWrapper>
  );
}
