"use client";

import { motion } from "framer-motion";
import { credentials } from "@/data/credentials";

export default function CredentialsTimeline() {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-clay/30 -translate-x-1/2" />

      <div className="space-y-12 md:space-y-16">
        {credentials.map((credential, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={credential.year + credential.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative grid grid-cols-[32px_1fr] md:grid-cols-[1fr_32px_1fr] gap-4 md:gap-8 items-start"
            >
              {/* Left content (desktop) */}
              <div
                className={`hidden md:block ${
                  isEven ? "text-right" : "order-3"
                }`}
              >
                {isEven ? (
                  <TimelineCard credential={credential} />
                ) : (
                  <YearBadge year={credential.year} align="left" />
                )}
              </div>

              {/* Dot */}
              <div className="relative flex items-start justify-center pt-1">
                <div className="w-3 h-3 rounded-full bg-sage border-2 border-cream z-10" />
              </div>

              {/* Right content (desktop) */}
              <div
                className={`hidden md:block ${isEven ? "" : "order-1"}`}
              >
                {isEven ? (
                  <YearBadge year={credential.year} align="right" />
                ) : (
                  <TimelineCard credential={credential} />
                )}
              </div>

              {/* Mobile content */}
              <div className="md:hidden">
                <span className="font-body text-xs uppercase tracking-widest text-clay mb-1 block">
                  {credential.year}
                </span>
                <h3 className="font-heading text-xl text-deep-forest font-semibold">
                  {credential.title}
                </h3>
                <p className="font-body text-sm text-sage mt-1">
                  {credential.institution}
                </p>
                <p className="font-body text-sm text-charcoal/70 mt-2 leading-relaxed">
                  {credential.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function YearBadge({
  year,
  align,
}: {
  year: string;
  align: "left" | "right";
}) {
  return (
    <span
      className={`inline-block font-body text-sm uppercase tracking-widest text-clay pt-0.5 ${
        align === "left" ? "text-left" : "text-right"
      }`}
    >
      {year}
    </span>
  );
}

function TimelineCard({
  credential,
}: {
  credential: (typeof credentials)[number];
}) {
  return (
    <div>
      <h3 className="font-heading text-xl lg:text-2xl text-deep-forest font-semibold">
        {credential.title}
      </h3>
      <p className="font-body text-sm text-sage mt-1">
        {credential.institution}
      </p>
      <p className="font-body text-sm text-charcoal/70 mt-2 leading-relaxed max-w-md">
        {credential.description}
      </p>
    </div>
  );
}
