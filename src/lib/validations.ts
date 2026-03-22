import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-()+ ]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
