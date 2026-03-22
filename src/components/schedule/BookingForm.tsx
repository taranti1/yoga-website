"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { bookingSchema, type BookingFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Yoga Class",
  "Private Yoga Session",
  "Reiki Session",
  "Extended Reiki Session",
  "Distance Reiki",
  "Workshop/Retreat",
  "Other",
];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Send booking request to backend API
    console.log("Booking form submitted:", data);

    setIsSubmitted(true);
    reset();
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-sand bg-warm-white font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors duration-200";

  const labelClasses = "block font-body text-sm font-medium text-deep-forest mb-1.5";

  const errorClasses = "mt-1 font-body text-xs text-clay";

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/20 mb-6"
            >
              <CheckCircle size={32} className="text-sage" />
            </motion.div>
            <h3 className="font-heading text-2xl text-deep-forest mb-3">
              Request Sent
            </h3>
            <p className="font-body text-charcoal/70 max-w-md mx-auto">
              Your booking request has been sent! You&apos;ll receive
              confirmation via email within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 font-body text-sm text-sage hover:text-deep-forest underline underline-offset-4 transition-colors duration-200"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Info note */}
            <div className="mb-8 p-4 rounded-xl bg-sage/10 border border-sage/20">
              <p className="font-body text-sm text-deep-forest/80">
                This form sends a booking request. You&apos;ll receive
                confirmation via email within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name <span className="text-clay">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                  {...register("name")}
                />
                {errors.name && (
                  <p className={errorClasses}>{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-clay">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputClasses}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={errorClasses}>{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone{" "}
                  <span className="text-charcoal/40 font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className={inputClasses}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className={errorClasses}>{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClasses}>
                  Service <span className="text-clay">*</span>
                </label>
                <select
                  id="service"
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`}
                  defaultValue=""
                  {...register("service")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClasses}>{errors.service.message}</p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className={labelClasses}>
                  Preferred Date <span className="text-clay">*</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  className={inputClasses}
                  {...register("preferredDate")}
                />
                {errors.preferredDate && (
                  <p className={errorClasses}>
                    {errors.preferredDate.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message{" "}
                  <span className="text-charcoal/40 font-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Any details about your booking request, experience level, or questions..."
                  className={`${inputClasses} resize-none`}
                  {...register("message")}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Booking Request"
                )}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
