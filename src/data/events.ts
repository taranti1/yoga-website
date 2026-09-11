export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  servicesAnchor: string;
  registerUrl?: string;
  isPast?: boolean;
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
    servicesAnchor: "reiki-workshops",
    isPast: true,
  },
  {
    id: "reiki-restore-lbif",
    title: "Reiki + Restore to Bloom into Summer",
    date: "July 16, 2026",
    time: "6:30 PM – 8:00 PM",
    location: "Long Beach Island Foundation, Loveladies, NJ",
    description:
      "An evening of Reiki and restorative yoga with guided meditation, prop-supported poses, and individual Reiki assists to help your heart's desires bloom into summer.",
    image: "/images/reiki/training/training-2.jpg",
    servicesAnchor: "reiki-restore-lbif",
    registerUrl:
      "https://login.lbifoundation.org/LBIF/class-details?id=a0SVr00000s6MOXMA2&tab=classes",
    isPast: true,
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
    servicesAnchor: "petite-retreat",
  },
  {
    id: "ground-in-autumn",
    title: "Ground in Autumn: Reiki & Restorative",
    date: "September 25, 2026",
    time: "7:30 PM – 9:00 PM",
    location: "Alluem Yoga, Cranford, NJ",
    description:
      "An evening of Reiki and restorative yoga to welcome the Autumnal shift — calming prop-supported poses, individual hands-on Reiki, and a guided aura meditation to release, ground, and reflect on what we want to harvest from summer's growth.",
    image: "/images/reiki/training/training-1.jpg",
    servicesAnchor: "ground-in-autumn",
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
    servicesAnchor: "reiki-trainings",
  },
];
