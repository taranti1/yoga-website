import HeroSection from "@/components/home/HeroSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import EventsPreview from "@/components/home/EventsPreview";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesOverview />
      <TestimonialCarousel />
      <EventsPreview />
      <GalleryTeaser />
      <NewsletterSection />
    </>
  );
}
