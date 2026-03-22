"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "cream" | "warm-white" | "sand" | "deep-forest";
  id?: string;
  as?: "section" | "div" | "aside";
}

const bgStyles: Record<string, string> = {
  cream: "bg-cream",
  "warm-white": "bg-warm-white",
  sand: "bg-sand",
  "deep-forest": "bg-deep-forest text-warm-white",
};

export default function SectionWrapper({
  children,
  className = "",
  background = "cream",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`${bgStyles[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-24 lg:py-36"
      >
        {children}
      </motion.div>
    </Tag>
  );
}
