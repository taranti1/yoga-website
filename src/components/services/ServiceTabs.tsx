"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { yogaStyles, reikiServices, workshops } from "@/data/services";

const tabs = ["Yoga", "Reiki", "Workshops & Retreats"] as const;
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
          {activeTab === "Workshops & Retreats" && <WorkshopGrid />}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}

/* ─── Yoga Cards ─── */

function YogaGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {yogaStyles.map((style) => (
        <ServiceCard
          key={style.slug}
          image={style.image}
          title={style.name}
          description={style.description}
          badges={[style.level, style.duration]}
        />
      ))}
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

/* ─── Workshop Cards ─── */

function WorkshopGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {workshops.map((workshop) => (
        <ServiceCard
          key={workshop.slug}
          image={workshop.image}
          title={workshop.name}
          description={workshop.description}
          badges={[workshop.location, workshop.date]}
        />
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
          {badges.map((badge) => (
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

        <Button href="/contact" variant="secondary" size="sm">
          Contact Cynthia
        </Button>
      </div>
    </motion.div>
  );
}
