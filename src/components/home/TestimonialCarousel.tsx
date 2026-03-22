"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <SectionWrapper background="sand">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
          Kind Words
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light mb-16">
          From the Community
        </h2>

        <div className="relative min-h-[250px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <Quote
                size={36}
                className="text-gold/30 mx-auto mb-6"
                strokeWidth={1}
              />
              <blockquote className="font-heading text-xl md:text-2xl italic text-deep-forest/80 leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-body text-sm font-semibold text-deep-forest tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-xs text-charcoal/60 mt-1">
                  {testimonials[current].context}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="p-2 text-charcoal/40 hover:text-deep-forest transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-sage w-6" : "bg-charcoal/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 text-charcoal/40 hover:text-deep-forest transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
