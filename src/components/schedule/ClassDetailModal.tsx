"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, Timer, BarChart3 } from "lucide-react";
import type { ScheduleEntry } from "@/data/schedule";
import Button from "@/components/ui/Button";

interface ClassDetailModalProps {
  entry: ScheduleEntry;
  onClose: () => void;
}

export default function ClassDetailModal({
  entry,
  onClose,
}: ClassDetailModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-deep-forest/60 backdrop-blur-sm" />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 bg-warm-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sand/50 transition-colors text-charcoal/60 hover:text-deep-forest"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            {/* Class name */}
            <h2 className="font-heading text-3xl md:text-4xl text-deep-forest font-light pr-8">
              {entry.className}
            </h2>

            {/* Details grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-charcoal/70">
                <Clock size={16} className="text-clay" />
                <span className="font-body text-sm">{entry.time}</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70">
                <Timer size={16} className="text-clay" />
                <span className="font-body text-sm">{entry.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70">
                <MapPin size={16} className="text-clay" />
                <span className="font-body text-sm">{entry.location}</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70">
                <BarChart3 size={16} className="text-clay" />
                <span className="font-body text-sm">{entry.level}</span>
              </div>
            </div>

            {/* Day */}
            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full bg-sage/15 text-sage font-body text-xs font-medium">
                Every {entry.day}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 font-body text-charcoal/80 leading-relaxed">
              {entry.description}
            </p>

            {/* Book button */}
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="#booking"
                onClick={onClose}
                className="w-full"
              >
                Book This Class
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
