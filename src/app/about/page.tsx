import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import SacredGeometry from "@/components/decorative/SacredGeometry";


export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Cynthia — a certified yoga instructor and Usui Reiki Master serving communities across New Jersey. Learn about her journey, training, and holistic approach to wellness.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="About"
        subtitle="The heart behind the practice"
        backgroundImage="/images/cynthia/about-hero.jpg"
      />

      {/* My Story */}
      <SectionWrapper background="warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — left column, spans 5 of 12 */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cynthia/cyn-tree.jpg"
                alt="Cynthia sitting in a cherry blossom tree"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Text — right column, spans 7 of 12 */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-deep-forest font-light mb-8">
              My Story
            </h2>

            <div className="space-y-6 font-body text-charcoal/80 leading-relaxed">
              <p>
                There were so many people and situations that brought me to yoga
                as if the universe was calling me to embrace it. It was always a
                physical practice but what connected me to something
                unexplainable was the movement with the breath. I recall being
                in a vinyasa yoga class when my body, mind and breath were
                flowing as one. I felt connected to something greater than
                myself. That was the moment that would anchor me to expand into
                the practice and beyond.
              </p>

              <p>
                After years of training in asanas, yoga philosophy,
                restorative yoga and breathwork, this passion was calling to me
                to teach. It was teaching that opened up the subtle energy work
                that complemented my yoga practice and directed me to the
                trainings as a Reiki Master/Teacher. It is the Reiki energy that
                directs me to guide others in a path of light and love to create
                space for healing and growth. I am so grateful to be part of
                your journey.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper background="sand">
        <div className="relative flex items-center justify-center py-12">
          {/* Decorative geometry — behind the quote */}
          <SacredGeometry
            variant="flower-of-life"
            size={420}
            className="absolute text-clay/20 pointer-events-none"
          />

          <blockquote className="relative z-10 max-w-3xl text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-deep-forest italic leading-snug font-light">
              &ldquo;My actions are my only true belongings.&rdquo;
            </p>
            <footer className="mt-8 font-body text-sm uppercase tracking-widest text-clay">
              — Thich Nhat Hanh
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper background="deep-forest">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-white font-light">
            Ready to practice together?
          </h2>
          <p className="font-body text-warm-white/70 mt-4 max-w-md mx-auto">
            I&rsquo;d love to hear from you. Reach out to learn more about
            classes, private sessions, or Reiki healing.
          </p>
          <div className="mt-10">
            <Button variant="secondary" href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
