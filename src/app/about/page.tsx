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
                src="/images/cynthia/about-portrait.jpg"
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
                I came to yoga the way many people do — exhausted, carrying more
                tension in my body than I realized, and searching for something I
                couldn&rsquo;t quite name. I recall being in a vinyasa class and
                my breath carried me to place of calm and peace that was new to
                me. In that moment I was pulled to continue a practice that would
                be the anchor for everything else in my life.
              </p>

              <p>
                After several years of teacher training in yoga philosophy,
                poses, breathwork and the energy body, teaching became a calling
                for me. My desire to learn continued with an immersion in
                restorative yoga certification with each of these areas deepening
                my understanding of how the body holds and releases both physical
                and emotional weight.
              </p>

              <p>
                When I discovered Reiki, it felt like the missing piece. The
                subtle energy work complemented my yoga practice so naturally
                that I pursued training all the way to the Master/Teacher level.
                Today I weave together movement, breath, and energy healing to
                meet each student where they are. Whether you step onto the mat
                for the very first time or you&rsquo;ve been practicing for
                decades, my deepest intention is to create a space where you feel
                held, seen, and free to simply be.
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
