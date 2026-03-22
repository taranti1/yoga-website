"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send } from "lucide-react";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import LotusIcon from "@/components/decorative/LotusIcon";

export default function NewsletterSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mbdzvojd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "[Website] Newsletter Signup",
          email: data.email,
          _formType: "newsletter",
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper background="sand">
      <div className="max-w-xl mx-auto text-center">
        <LotusIcon size={32} className="text-clay mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-4xl text-deep-forest font-light mb-4">
          Stay Connected
        </h2>
        <p className="font-body text-sm text-charcoal/70 mb-8">
          Receive reflections, class updates, and invitations to upcoming
          workshops and retreats — delivered with intention, never with spam.
        </p>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                <Check size={24} className="text-sage" />
              </div>
              <p className="font-heading text-xl italic text-deep-forest">
                Welcome to the circle
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  {...register("email")}
                  className="w-full px-5 py-3 rounded-full bg-warm-white border border-clay/20 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-sage transition-colors duration-300"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-600 font-body text-left pl-5">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-deep-forest text-warm-white font-body text-sm font-semibold tracking-wide uppercase hover:bg-sage transition-colors duration-300 disabled:opacity-50"
              >
                <Send size={14} />
                Keep Me Updated
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
