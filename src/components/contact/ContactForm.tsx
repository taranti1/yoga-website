"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const subjects = [
  "General Inquiry",
  "Booking Question",
  "Workshop Info",
  "Retreat Info",
  "Private Event",
  "Collaboration",
  "Other",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // TODO: Integrate with backend/email service (e.g., Resend, SendGrid, Netlify Forms)
    console.log("Contact form submission:", data);
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-warm-white border border-sand font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-sage transition-colors duration-300";

  const labelClasses =
    "block font-body text-xs font-semibold tracking-wider uppercase text-deep-forest mb-2";

  const errorClasses = "mt-1.5 text-xs text-red-600 font-body";

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cream rounded-2xl p-10 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-sage" />
          </div>
          <h3 className="font-heading text-2xl text-deep-forest mb-2">
            Message Sent
          </h3>
          <p className="font-body text-sm text-charcoal/70">
            Thank you for reaching out. I&apos;ll get back to you within 24
            hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              {...register("name")}
              className={inputClasses}
            />
            {errors.name && (
              <p className={errorClasses}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={inputClasses}
            />
            {errors.email && (
              <p className={errorClasses}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-subject" className={labelClasses}>
              Subject
            </label>
            <select
              id="contact-subject"
              {...register("subject")}
              className={inputClasses}
              defaultValue=""
            >
              <option value="" disabled>
                Select a subject
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className={errorClasses}>{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me how I can help..."
              {...register("message")}
              className={`${inputClasses} resize-none`}
            />
            {errors.message && (
              <p className={errorClasses}>{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-deep-forest text-warm-white font-body text-sm font-semibold tracking-wide uppercase hover:bg-sage transition-colors duration-300 disabled:opacity-50"
          >
            <Send size={14} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
