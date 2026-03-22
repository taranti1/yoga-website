export interface YogaStyle {
  slug: string;
  name: string;
  description: string;
  level: string;
  duration: string;
  image: string;
}

export interface ReikiService {
  slug: string;
  name: string;
  description: string;
  duration: string;
  format: string;
  image: string;
}

export interface Workshop {
  slug: string;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
  featured?: boolean;
}

export const yogaStyles: YogaStyle[] = [
  {
    slug: "vinyasa-flow",
    name: "Vinyasa Flow",
    description:
      "A dynamic, breath-synchronized practice that links movement and breath in a flowing sequence. Each class is thoughtfully sequenced to build heat, cultivate strength, and create space in the body. All levels are welcome — modifications are always offered so you can find the practice that fits your body.",
    level: "All Levels",
    duration: "",
    image: "/images/yoga/class-4.jpg",
  },
  {
    slug: "private-sessions",
    name: "Private Sessions",
    description:
      "One-on-one yoga sessions tailored entirely to your unique body, goals, and schedule. Whether you're recovering from injury, deepening your practice, or just beginning, private sessions offer personalized attention and a custom-designed practice. Available in-home across all service areas.",
    level: "Personalized",
    duration: "",
    image: "/images/yoga/private-session.jpg",
  },
];

export const reikiServices: ReikiService[] = [
  {
    slug: "reiki-with-messages",
    name: "Reiki Private Session with Messages",
    description:
      "A deeply healing in-person reiki session combined with intuitive channeled messages. As I work with your energy through gentle hand placement, I receive and share intuitive guidance meant specifically for you. This session supports energetic clearing, emotional release, and offers meaningful insight to help guide your path forward.",
    duration: "",
    format: "In-Person",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    slug: "reiki-with-medium-reading",
    name: "Reiki Private Session with Messages & Medium Reading",
    description:
      "This in-person session combines the deep healing of reiki energy work with intuitive messages and a medium reading to connect you with loved ones who have passed. A profoundly moving experience that brings comfort, clarity, and a sense of continued connection across the veil.",
    duration: "",
    format: "In-Person",
    image: "/images/reiki/training/reiki-bowl.jpg",
  },
  {
    slug: "distant-reiki",
    name: "Distant Reiki",
    description:
      "Reiki energy transcends physical space. In a distant session, you relax in the comfort of your own home while I send healing energy remotely. We connect via video call or phone at the start and end of the session. Many clients find distant sessions equally powerful and deeply transformative.",
    duration: "",
    format: "Remote",
    image: "/images/reiki/training/distant-reiki-v2.jpg",
  },
];

export const workshops: Workshop[] = [
  {
    slug: "lavender-farm-petite-retreat",
    name: "Petite Retreat at Orchard View Lavender Farm",
    description:
      "Escape for a day of renewal at the beautiful Orchard View Lavender Farm. This signature petite retreat weaves together gentle yoga, reiki healing, guided meditation, and mindful connection with nature. Surrounded by rows of fragrant lavender and rolling green hills, you'll have space to breathe, restore, and reconnect with yourself.",
    date: "Check schedule for upcoming dates",
    location: "Orchard View Lavender Farm",
    image: "/images/reiki/retreat/retreat-2.jpg",
    featured: true,
  },
  {
    slug: "new-moon-yin-reiki",
    name: "New Moon Yin & Reiki",
    description:
      "Align with the lunar cycle in this special evening workshop. We'll move through a slow yin sequence designed to support release and intention-setting, followed by a group reiki healing. A sacred space for reflection and renewal under the energy of the new moon.",
    date: "Monthly — check schedule",
    location: "Cranford, NJ",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    slug: "reiki-level-1-training",
    name: "Reiki Level I Training",
    description:
      "Begin your reiki journey with this comprehensive certification course. Learn the history and principles of Usui Reiki, receive your Level I attunement, and practice hands-on healing techniques. You'll leave certified and empowered to practice reiki on yourself and others.",
    date: "Check schedule for upcoming dates",
    location: "Summit, NJ",
    image: "/images/reiki/training/training-4.jpg",
  },
];
