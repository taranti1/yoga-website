"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const retreatImages = [
  "/images/reiki/retreat/retreat-1.jpg",
  "/images/reiki/retreat/retreat-3.jpg",
  "/images/reiki/retreat/retreat-4.jpg",
  "/images/reiki/retreat/retreat-5.jpg",
];

export default function RetreatFeature() {
  return (
    <>
      {/* ─── Root To Bloom ─── */}
      <div id="reiki-workshops">
        <SectionWrapper background="sand">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/reiki/training/training-1.jpg"
                  alt="Reiki and Restorative workshop"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <span className="font-body text-xs uppercase tracking-[0.2em] text-clay mb-4 block">
                Upcoming Workshop
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-deep-forest font-light mb-2">
                Root To Bloom: Reiki &amp; Restorative
              </h2>
              <p className="font-body text-sm text-charcoal/60 mb-2">
                with Stefanie &amp; Cynthia: Sunday, 4/26 2–3:30pm
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Join Stefanie Haberman &amp; Cynthia Tarantino for an afternoon
                of Reiki &amp; Restorative yoga as we root to bloom into Spring.
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-6">
                With guided visualizations, calming breathing techniques and
                soothing essential oils, we blend restorative yoga poses with an
                individual hands-on reiki experience to allow the release of
                physical tension and holding, create space for the breath and
                balance the nervous system. As you open to deeper relaxation, the
                energy will nourish and renew you so you leave feeling boundless
                and bright.
              </p>
              <p className="font-heading text-lg text-deep-forest mb-8">
                $55 per person
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Reserve Your Spot
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* ─── Petite Reiki Retreat ─── */}
      <div id="petite-retreat">
        <SectionWrapper background="warm-white">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-body text-xs uppercase tracking-[0.2em] text-clay mb-4 block">
                Signature Offering
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light mb-4">
                Petite Retreat at Orchard View Lavender Farm
              </h2>
              <div className="font-body text-sm text-charcoal/80 space-y-1 mb-6">
                <p className="font-semibold text-deep-forest">Friday, September 18, 2026</p>
                <p>11:00 AM – 3:00 PM</p>
                <p>Orchard View Lavender Farm</p>
                <p>Port Murray, NJ</p>
              </div>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Join Cynthia Tarantino, Reiki Master, and Stefanie Haberman,
                Restorative Yoga teacher, at this petite retreat for nourishment,
                connection, and self care in the peaceful garden of the farm.
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Escape for a day of renewal surrounded by rows of fragrant lavender
                and rolling green hills. This signature petite retreat weaves
                together gentle yoga, reiki healing, guided meditation, and mindful
                connection with nature.
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                You will have space to breathe, restore, and reconnect with
                yourself. Whether you are new to yoga and reiki or a seasoned
                practitioner, this intimate gathering offers something deeply
                nourishing for everyone.
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-2">
                The event will include:
              </p>
              <ul className="font-body text-charcoal/80 text-sm leading-relaxed mb-6 space-y-1.5 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Guided breathwork
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Restorative yoga
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Individual hands-on Reiki assists
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Flower ceremony
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Delicious healthy lunch
                </li>
              </ul>
              <p className="font-body text-sm text-charcoal/60 italic mb-2">
                Space is limited. All levels of yoga experience are welcome.
              </p>
              <p className="font-heading text-lg text-deep-forest mb-8">
                $155 per person
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Reserve Your Spot
              </Button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {retreatImages.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl ${
                    i === 0 ? "col-span-2 h-64" : "h-48"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Lavender farm retreat ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* ─── Reiki Trainings ─── */}
      <div id="reiki-trainings">
        <SectionWrapper background="sand">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-body text-xs uppercase tracking-[0.2em] text-clay mb-4 block">
                Certification Training
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-forest font-light mb-2">
                The Art of Reiki
              </h2>
              <p className="font-body text-xs uppercase tracking-wider text-sage font-semibold mb-2">
                Level I and Level II Training
              </p>
              <p className="font-body text-sm font-semibold text-deep-forest mb-6">
                Next Offering Fall/Winter 2026
              </p>
              <p className="font-body text-charcoal/80 leading-relaxed mb-6">
                Join Reiki Master-Teacher, Cynthia Tarantino, for a
                transformational two-day Reiki training designed to ground you in
                the foundations of this gentle hands-on healing modality and guide
                you into deeper energetic connection.
              </p>

              <p className="font-body text-sm font-semibold text-deep-forest uppercase tracking-wider mb-3">
                What You&rsquo;ll Learn
              </p>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-2">
                Over the course of two weekends, you&rsquo;ll receive Reiki I and
                Reiki II attunements and training covering:
              </p>
              <ul className="font-body text-charcoal/80 text-sm leading-relaxed mb-6 space-y-1.5 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  The history and principles of Reiki
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Gassho meditation and energetic practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Hand placements for self-healing and working with others
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Reiki symbols and their deeper meanings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  How to send distant healing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Conducting full Reiki sessions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Chakra balancing techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  Incorporating crystals into your Reiki practice
                </li>
              </ul>

              <p className="font-body text-sm font-semibold text-deep-forest uppercase tracking-wider mb-2">
                Investment
              </p>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-6">
                $375 includes Reiki I &amp; II training, manuals, attunements,
                hands-on practice, and a Level Reiki I and Reiki II certification
                upon completion of the classes.
              </p>

              <p className="font-body text-sm font-semibold text-deep-forest uppercase tracking-wider mb-2">
                What to Bring
              </p>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-6">
                Wear comfortable clothes! Bring a water bottle, snack or lunch, a
                journal, and a pen. If you have crystals, bring them along so we
                can clear and you can use them.
              </p>

              <p className="font-body text-sm text-charcoal/60 italic mb-6">
                The class size is limited so we have time to connect, ask questions,
                and integrate the practice together.
              </p>

              <p className="font-body text-sm font-semibold text-deep-forest uppercase tracking-wider mb-2">
                To Register
              </p>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-8">
                Please email me through the contact form and send Venmo
                @Cynthia-Tarantino or Zelle with Cynthia Tarantino to hold your
                spot!
              </p>

              <Button href="/contact" variant="primary" size="lg">
                Reserve Your Spot
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/reiki/training/training-4.jpg"
                  alt="The Art of Reiki — Level I and Level II Training"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
