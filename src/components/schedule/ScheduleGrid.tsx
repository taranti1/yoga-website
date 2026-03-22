"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { days, schedule, type ScheduleEntry } from "@/data/schedule";
import ClassDetailModal from "./ClassDetailModal";

function LevelBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    "All Levels": "bg-sage/20 text-sage",
    Beginner: "bg-gold/20 text-gold",
    Intermediate: "bg-clay/20 text-clay",
    Advanced: "bg-blush/20 text-blush",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-body font-medium ${colorMap[level] || "bg-sand text-charcoal"}`}
    >
      {level}
    </span>
  );
}

function ClassCard({
  entry,
  onClick,
}: {
  entry: ScheduleEntry;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border ${entry.color} backdrop-blur-sm transition-shadow duration-200 hover:shadow-md`}
    >
      <div className="flex items-center gap-1.5 text-charcoal/60 mb-1">
        <Clock size={13} />
        <span className="font-body text-xs">{entry.time}</span>
        <span className="font-body text-xs text-charcoal/40">
          &middot; {entry.duration}
        </span>
      </div>
      <h3 className="font-heading text-lg text-deep-forest leading-snug">
        {entry.className}
      </h3>
      <div className="flex items-center gap-1.5 text-charcoal/50 mt-1">
        <MapPin size={12} />
        <span className="font-body text-xs">{entry.location}</span>
      </div>
      <div className="mt-2">
        <LevelBadge level={entry.level} />
      </div>
    </motion.button>
  );
}

export default function ScheduleGrid() {
  const [selectedClass, setSelectedClass] = useState<ScheduleEntry | null>(
    null,
  );

  const getClassesForDay = (day: string) =>
    schedule.filter((entry) => entry.day === day);

  return (
    <>
      {/* Desktop: weekly grid */}
      <div className="hidden lg:grid grid-cols-7 gap-3">
        {days.map((day) => {
          const dayClasses = getClassesForDay(day);
          return (
            <div key={day} className="min-h-[200px]">
              <div className="text-center py-3 mb-3 border-b border-sand">
                <span className="font-heading text-lg text-deep-forest">
                  {day}
                </span>
              </div>
              <div className="space-y-3">
                {dayClasses.length > 0 ? (
                  dayClasses.map((entry) => (
                    <ClassCard
                      key={entry.id}
                      entry={entry}
                      onClick={() => setSelectedClass(entry)}
                    />
                  ))
                ) : (
                  <p className="text-center font-body text-sm text-charcoal/30 py-8">
                    No classes
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked day sections */}
      <div className="lg:hidden space-y-8">
        {days.map((day) => {
          const dayClasses = getClassesForDay(day);
          if (dayClasses.length === 0) return null;
          return (
            <div key={day}>
              <h3 className="font-heading text-2xl text-deep-forest mb-4 border-b border-sand pb-2">
                {day}
              </h3>
              <div className="space-y-3">
                {dayClasses.map((entry) => (
                  <ClassCard
                    key={entry.id}
                    entry={entry}
                    onClick={() => setSelectedClass(entry)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Class detail modal */}
      {selectedClass && (
        <ClassDetailModal
          entry={selectedClass}
          onClose={() => setSelectedClass(null)}
        />
      )}
    </>
  );
}
