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
    id: "lavender-retreat-spring",
    title: "Spring Petite Retreat",
    date: "April 19, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Orchard View Lavender Farm",
    description:
      "A full-day retreat blending yoga, reiki, meditation, and the healing beauty of the lavender farm. Limited spots available.",
    image: "/images/reiki/retreat/retreat-2.jpg",
  },
  {
    id: "new-moon-april",
    title: "New Moon Yin & Reiki",
    date: "April 12, 2026",
    time: "7:00 PM – 9:00 PM",
    location: "Cranford, NJ",
    description:
      "Release and set intentions under the new moon with yin yoga and group reiki healing.",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    id: "reiki-training-may",
    title: "Reiki Level I Certification",
    date: "May 3, 2026",
    time: "10:00 AM – 5:00 PM",
    location: "Summit, NJ",
    description:
      "Begin your reiki journey. Learn Usui Reiki principles, receive your attunement, and leave certified to practice.",
    image: "/images/reiki/training/training-4.jpg",
  },
];
