import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceTabs from "@/components/services/ServiceTabs";
import RetreatFeature from "@/components/services/RetreatFeature";
import FloatingBookButton from "@/components/services/FloatingBookButton";

export const metadata: Metadata = {
  title: "Services | Yoga & Reiki with Cynthia",
  description:
    "Explore yoga classes, reiki healing sessions, workshops, and retreats in Cranford, Summit, and across Northern New Jersey. Vinyasa, yin, restorative yoga, distance reiki, and signature lavender farm retreats.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Yoga, reiki, and sacred gatherings to support your journey inward"
        backgroundImage="/images/yoga/class-3.jpg"
      />
      <ServiceTabs />
      <RetreatFeature />
      <FloatingBookButton />
    </>
  );
}
