"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-deep-forest/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-warm-white font-light">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-lg text-warm-white/80 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
