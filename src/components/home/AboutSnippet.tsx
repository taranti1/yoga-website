"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutSnippet() {
  return (
    <SectionWrapper background="warm-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/cynthia/about-secondary.jpg"
              alt="Cynthia Tarantino practicing yoga on the beach at Long Beach Island"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-clay/30 rounded-2xl -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
            Meet Your Guide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-forest mb-8 font-light">
            Rooted in Practice, Led by Heart
          </h2>
          <div className="space-y-4 font-body text-charcoal/80 leading-relaxed">
            <p>
              I believe yoga and reiki are pathways home — back to the body, back
              to the breath, back to the truest version of ourselves. My teaching
              is grounded in the belief that healing isn't about fixing what's
              broken, but about remembering what's whole.
            </p>
            <p>
              With over fifteen years of practice and study, I bring a deep
              reverence for these traditions and a warm, accessible teaching
              style to every class, session, and retreat. Whether you're stepping
              onto the mat for the first time or deepening a lifelong practice,
              you'll find a safe and sacred space here.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="my-8 pl-6 border-l-2 border-gold">
            <p className="font-heading text-xl italic text-deep-forest/80 leading-relaxed">
              &ldquo;The body holds wisdom the mind has forgotten. My work is
              helping you listen.&rdquo;
            </p>
          </blockquote>

          <Link
            href="/about"
            className="inline-flex items-center font-body text-sm font-semibold text-sage hover:text-deep-forest transition-colors duration-300 tracking-wide uppercase"
          >
            Read My Story
            <span className="ml-2">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
