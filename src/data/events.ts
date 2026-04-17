export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "root-to-bloom",
    title: "Root To Bloom: Reiki & Restorative",
    date: "April 26, 2026",
    time: "2:00 PM – 3:30 PM",
    location: "with Stefanie & Cynthia",
    description:
      "An afternoon of restorative yoga and reiki to root and bloom into Spring — guided visualizations, breathwork, essential oils, and individual hands-on reiki.",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    id: "petite-retreat-sept",
    title: "Petite Retreat at Orchard View Lavender Farm",
    date: "September 18, 2026",
    time: "11:00 AM – 3:00 PM",
    location: "Orchard View Lavender Farm, Port Murray, NJ",
    description:
      "A signature day of renewal weaving together gentle yoga, reiki healing, guided meditation, and mindful connection with nature surrounded by fragrant lavender fields.",
    image: "/images/reiki/retreat/retreat-2.jpg",
  },
  {
    id: "art-of-reiki",
    title: "The Art of Reiki: Level I & II Training",
    date: "Fall/Winter 2026",
    time: "Two weekends",
    location: "New Jersey",
    description:
      "A transformational two-day Reiki certification training covering attunements, hand placements, symbols, distant healing, chakra balancing, and crystal work.",
    image: "/images/reiki/training/training-4.jpg",
  },
];
