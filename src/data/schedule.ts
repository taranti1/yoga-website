export interface ScheduleEntry {
  id: string;
  day: string;
  time: string;
  className: string;
  location: string;
  level: string;
  duration: string;
  description: string;
  color: string;
}

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const schedule: ScheduleEntry[] = [
  {
    id: "mon-morning",
    day: "Monday",
    time: "9:00 AM",
    className: "Vinyasa Flow",
    location: "Cranford, NJ",
    level: "Intermediate",
    duration: "60 min",
    description:
      "Start your week with an energizing vinyasa flow. We'll link breath to movement through creative sequences that build strength and focus. Come ready to move and breathe deeply.",
    color: "bg-sage/20 border-sage",
  },
  {
    id: "tue-evening",
    day: "Tuesday",
    time: "6:30 PM",
    className: "Yin Yoga",
    location: "Summit, NJ",
    level: "All Levels",
    duration: "75 min",
    description:
      "Unwind from your day with a slow, soothing yin practice. We'll hold poses for several minutes, gently opening the hips, spine, and shoulders while cultivating mindful stillness.",
    color: "bg-blush/20 border-blush",
  },
  {
    id: "wed-morning",
    day: "Wednesday",
    time: "9:30 AM",
    className: "Restorative Yoga",
    location: "Milburn, NJ",
    level: "All Levels",
    duration: "75 min",
    description:
      "A deeply restful practice using props to fully support your body. Let go of tension and stress as you melt into each pose. This class is pure self-care.",
    color: "bg-clay/20 border-clay",
  },
  {
    id: "thu-morning",
    day: "Thursday",
    time: "9:00 AM",
    className: "Vinyasa Flow",
    location: "Cranford, NJ",
    level: "Intermediate",
    duration: "60 min",
    description:
      "A creative, breath-led vinyasa sequence to build heat and find your edge. Each class is different, keeping your practice fresh and inspired.",
    color: "bg-sage/20 border-sage",
  },
  {
    id: "fri-morning",
    day: "Friday",
    time: "10:00 AM",
    className: "Prenatal Yoga",
    location: "Cranford, NJ",
    level: "All Levels",
    duration: "60 min",
    description:
      "A nurturing practice for expectant mothers at any stage. We'll focus on poses that support your changing body, breathing techniques for labor, and connecting with your baby.",
    color: "bg-gold/20 border-gold",
  },
  {
    id: "sat-morning",
    day: "Saturday",
    time: "9:00 AM",
    className: "Vinyasa Flow",
    location: "Long Beach Island, NJ",
    level: "All Levels",
    duration: "60 min",
    description:
      "A weekend vinyasa class with a beachy, relaxed energy. We'll flow, breathe, and move together to start your Saturday with intention and joy.",
    color: "bg-sage/20 border-sage",
  },
  {
    id: "sat-evening",
    day: "Saturday",
    time: "5:00 PM",
    className: "Yin & Reiki",
    location: "Long Beach Island, NJ",
    level: "All Levels",
    duration: "90 min",
    description:
      "A special fusion class combining slow yin poses with reiki energy healing. As you settle into each posture, I'll offer gentle reiki to deepen your relaxation and energetic release.",
    color: "bg-blush/20 border-blush",
  },
  {
    id: "sun-morning",
    day: "Sunday",
    time: "10:00 AM",
    className: "Restorative Yoga",
    location: "Long Beach Island, NJ",
    level: "All Levels",
    duration: "75 min",
    description:
      "The perfect way to close your week. A restorative practice with extended holds, guided relaxation, and deep rest. Leave feeling completely renewed.",
    color: "bg-clay/20 border-clay",
  },
];
