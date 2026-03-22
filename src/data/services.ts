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
      "A dynamic, breath-synchronized practice that links movement and breath in a flowing sequence. Each class is thoughtfully sequenced to build heat, cultivate strength, and create space in the body. Suitable for those with some yoga experience who enjoy a more active practice.",
    level: "Intermediate",
    duration: "60 min",
    image: "/images/yoga/class-4.jpg",
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    description:
      "A slow, meditative practice where poses are held for 3-5 minutes to gently stress the connective tissues — ligaments, tendons, and fascia. This practice cultivates deep stillness and is a beautiful complement to more active styles. Perfect for releasing tension and inviting deep relaxation.",
    level: "All Levels",
    duration: "75 min",
    image: "/images/yoga/class-1.jpg",
  },
  {
    slug: "restorative-yoga",
    name: "Restorative Yoga",
    description:
      "A deeply nourishing practice using bolsters, blankets, and props to support the body in passive poses held for extended periods. This practice activates the parasympathetic nervous system, promoting healing and deep rest. Ideal for stress recovery and anyone seeking profound relaxation.",
    level: "All Levels",
    duration: "75 min",
    image: "/images/yoga/private-session.jpg",
  },
  {
    slug: "prenatal-yoga",
    name: "Prenatal Yoga",
    description:
      "A gentle, supportive practice designed specifically for expectant mothers. Each class focuses on poses that ease common pregnancy discomforts, strengthen the pelvic floor, and teach breathing techniques for labor. A nurturing community for mothers-to-be at any stage of pregnancy.",
    level: "All Levels",
    duration: "60 min",
    image: "/images/yoga/class-3.jpg",
  },
  {
    slug: "private-sessions",
    name: "Private Sessions",
    description:
      "One-on-one yoga sessions tailored entirely to your unique body, goals, and schedule. Whether you're recovering from injury, deepening your practice, or just beginning, private sessions offer personalized attention and a custom-designed practice. Available in-home across all service areas.",
    level: "Personalized",
    duration: "60–90 min",
    image: "/images/yoga/class-2.jpg",
  },
];

export const reikiServices: ReikiService[] = [
  {
    slug: "in-person-reiki-60",
    name: "In-Person Reiki Session",
    description:
      "A full reiki healing session in a peaceful, sacred space. Through gentle hand placement, I channel universal life energy to clear blockages, balance your chakras, and support your body's natural healing abilities. You'll leave feeling lighter, calmer, and more aligned.",
    duration: "60 min",
    format: "In-Person",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    slug: "in-person-reiki-90",
    name: "Extended Reiki Session",
    description:
      "A deeper, more comprehensive reiki experience that includes an intuitive body scan, extended energy work on areas of concern, and guided meditation. This session allows for a more thorough clearing and is ideal for those working through significant life transitions or chronic stress.",
    duration: "90 min",
    format: "In-Person",
    image: "/images/reiki/training/training-2.jpg",
  },
  {
    slug: "distance-reiki",
    name: "Distance Reiki",
    description:
      "Reiki energy transcends physical space. In a distance session, you relax in your own home while I send healing energy using the distance symbol. We connect via phone or video at the start and end of the session. Many clients find distance sessions equally powerful and deeply transformative.",
    duration: "45 min",
    format: "Remote",
    image: "/images/reiki/training/training-3.jpg",
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
