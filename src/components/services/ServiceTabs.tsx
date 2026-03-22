"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { yogaStyles, reikiServices, workshops } from "@/data/services";

const tabs = ["Yoga", "Reiki", "Events"] as const;
type Tab = (typeof tabs)[number];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Yoga");

  return (
    <SectionWrapper background="warm-white">
      {/* Tab Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-body text-sm font-semibold tracking-wide uppercase px-6 py-3 rounded-full transition-colors duration-300 ${
              activeTab === tab
                ? "bg-deep-forest text-warm-white"
                : "bg-sand text-deep-forest hover:bg-clay/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {activeTab === "Yoga" && <YogaGrid />}
          {activeTab === "Reiki" && <ReikiGrid />}
          {activeTab === "Events" && <EventsGrid />}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}

/* ─── Yoga Schedule ─── */

const classSchedule = [
  { day: "Mondays", style: "Vinyasa Flow", time: "9:15am – 10:45am", location: "Alluem Yoga, Cranford" },
  { day: "Tuesdays", style: "Vinyasa Flow Level 2/3", time: "9:30am – 10:45am", location: "Bhakti Barn, Millburn" },
  { day: "Wednesdays", style: "Vinyasa Flow", time: "6:00pm – 7:15pm", location: "Alluem Yoga, Cranford" },
  { day: "Wednesdays", style: "Beginner", time: "7:30pm – 8:45pm", location: "Alluem Yoga, Cranford" },
  { day: "Sundays", style: "Vinyasa Flow", time: "9:30am – 10:45am", location: "LBI Foundation (June–September)" },
];

function YogaGrid() {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-clay text-center mb-10">
        Class Schedule
      </h3>

      <div className="space-y-0 divide-y divide-sand">
        {classSchedule.map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-[140px_1fr_1fr_1fr] gap-1 sm:gap-4 items-baseline py-5"
          >
            <span className="font-body text-sm font-semibold text-deep-forest">
              {cls.day}
            </span>
            <span className="font-heading text-base italic text-deep-forest">
              {cls.style}
            </span>
            <span className="font-body text-sm text-charcoal/70">
              {cls.time}
            </span>
            <span className="font-body text-sm text-charcoal/60">
              {cls.location}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-sand text-center">
        <p className="font-body text-sm text-charcoal/70 italic mb-8">
          I am available for individual privates and small group privates upon request.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

/* ─── Reiki Cards ─── */

function ReikiGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {reikiServices.map((service) => (
        <ServiceCard
          key={service.slug}
          image={service.image}
          title={service.name}
          description={service.description}
          badges={[service.format, service.duration]}
        />
      ))}
    </div>
  );
}

/* ─── Events Overview ─── */

const eventSummaries = [
  {
    title: "Petite Reiki Retreat",
    description: "A signature day of renewal at Orchard View Lavender Farm — gentle yoga, reiki healing, guided meditation, and mindful connection with nature.",
    anchor: "petite-retreat",
    image: "/images/reiki/retreat/retreat-2.jpg",
  },
  {
    title: "Reiki Workshops",
    description: "Special evening gatherings blending restorative yoga, reiki healing, breathwork, and guided visualization for deep renewal.",
    anchor: "reiki-workshops",
    image: "/images/reiki/training/training-1.jpg",
  },
  {
    title: "Reiki Trainings",
    description: "Immersive training experiences combining breathwork, restorative yoga, reiki, and nourishing connection in beautiful settings.",
    anchor: "reiki-trainings",
    image: "/images/reiki/training/training-4.jpg",
  },
];

function EventsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {eventSummaries.map((event) => (
        <motion.div
          key={event.anchor}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="font-heading text-2xl text-deep-forest mb-3">
              {event.title}
            </h3>
            <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-6 flex-1">
              {event.description}
            </p>
            <a
              href={`#${event.anchor}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-deep-forest text-warm-white font-body font-semibold tracking-wide uppercase hover:bg-sage transition-colors duration-300"
            >
              More Details
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Shared Service Card ─── */

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  badges: string[];
}

function ServiceCard({ image, title, description, badges }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-heading text-2xl text-deep-forest mb-2">
          {title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.filter(Boolean).map((badge) => (
            <span
              key={badge}
              className="inline-block font-body text-xs uppercase tracking-wider text-sage bg-sand px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <Button href="/contact" variant="primary" size="sm">
          Contact Cynthia
        </Button>
      </div>
    </motion.div>
  );
}
