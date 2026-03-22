"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SacredGeometry from "@/components/decorative/SacredGeometry";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/cynthia/hero-portrait.jpg"
          alt="Cynthia Tarantino seated in meditation with candles and flowers in a warm studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 via-deep-forest/40 to-deep-forest/70" />
      </motion.div>

      {/* Sacred Geometry Background */}
      <SacredGeometry
        variant="mandala"
        size={500}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-warm-white/10"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-warm-white/70 mb-6"
        >
          Yoga & Reiki in New Jersey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-warm-white font-light leading-[1.1] mb-6"
        >
          Cynthia Tarantino
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-xl md:text-2xl text-warm-white/80 italic mb-10"
        >
          Guiding you home to yourself
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="/services" variant="primary" size="lg">
            Begin Your Journey
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-warm-white/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
