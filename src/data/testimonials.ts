export interface Testimonial {
  name: string;
  quote: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    quote:
      "Cynthia has a rare gift for making every person in the room feel seen and supported. Her classes are the highlight of my week — I leave feeling like a completely different person than when I walked in.",
    context: "Vinyasa Flow Student",
  },
  {
    name: "Jennifer L.",
    quote:
      "I was skeptical about reiki, but after one session with Cynthia, I was a believer. She has the most calming presence and an incredible intuition. I felt things shift in my body that I'd been carrying for years.",
    context: "Reiki Client",
  },
  {
    name: "Michael D.",
    quote:
      "As a former athlete dealing with chronic pain, I never thought yoga was for me. Cynthia's private sessions completely changed my relationship with my body. She meets you exactly where you are.",
    context: "Private Session Client",
  },
  {
    name: "Amanda R.",
    quote:
      "The lavender farm retreat was truly magical. Cynthia creates such a sacred, intentional space. Between the yoga, reiki, and the beauty of the farm, I felt like I'd been on vacation for a week — and it was just one day.",
    context: "Retreat Participant",
  },
  {
    name: "Lisa K.",
    quote:
      "I've practiced yoga for over fifteen years with many different teachers, and Cynthia is exceptional. Her knowledge of the body, her warmth, and her ability to weave philosophy into practice sets her apart.",
    context: "Yin Yoga Student",
  },
  {
    name: "David P.",
    quote:
      "My wife and I took Cynthia's Reiki Level I training together. It was one of the most meaningful experiences we've shared. Cynthia is an incredibly patient and knowledgeable teacher.",
    context: "Reiki Training Graduate",
  },
];
