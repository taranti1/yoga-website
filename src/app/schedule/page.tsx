import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import ScheduleGrid from "@/components/schedule/ScheduleGrid";
import BookingForm from "@/components/schedule/BookingForm";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Schedule & Booking | Yoga & Reiki with Cynthia",
  description:
    "View the weekly class schedule and book yoga classes, reiki sessions, private sessions, and workshops in Cranford, Summit, Milburn, and Long Beach Island, NJ.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Schedule & Booking"
        subtitle="Find your class, reserve your spot, and step onto the mat"
        backgroundImage="/images/yoga/class-2.jpg"
      />

      <SectionWrapper background="warm-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
            Weekly Schedule
          </h2>
          <p className="mt-4 font-body text-charcoal/70 max-w-2xl mx-auto">
            Click on any class to see details and book your spot. All classes are
            open to drop-ins unless otherwise noted.
          </p>
        </div>
        <ScheduleGrid />
      </SectionWrapper>

      <SectionWrapper background="cream" id="booking">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
            Book a Session
          </h2>
          <p className="mt-4 font-body text-charcoal/70 max-w-2xl mx-auto">
            Ready to begin? Send a booking request and I&apos;ll confirm your
            spot within 24 hours.
          </p>
        </div>
        <BookingForm />
      </SectionWrapper>

      <SectionWrapper background="warm-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light">
            Common Questions
          </h2>
          <p className="mt-4 font-body text-charcoal/70 max-w-2xl mx-auto">
            Everything you need to know before your first visit
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </SectionWrapper>
    </>
  );
}
