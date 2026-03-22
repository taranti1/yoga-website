import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/contact/ContactForm";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cynthia Tarantino for yoga classes, reiki healing, private sessions, and workshops in Long Beach Island, Cranford, Milburn, and Summit, NJ.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ctarantino991@comcast.net",
    href: "mailto:ctarantino991@comcast.net",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(908) 578-7345",
    href: "tel:+19085787345",
  },
  {
    icon: MapPin,
    label: "Service Areas",
    value: "Long Beach Island, Cranford, Milburn & Summit, NJ",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="I'd love to hear from you"
        backgroundImage="/images/reiki/retreat/retreat-3.jpg"
      />

      <SectionWrapper background="warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              Send a Message
            </h2>
            <p className="font-body text-sm text-charcoal/60 mb-8">
              Whether you have a question about classes, want to book a private
              session, or are interested in hosting a group event — I&apos;m here
              to help.
            </p>
            <ContactForm />
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl text-deep-forest mb-8">
              Contact Info
            </h2>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-sage" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-wider uppercase text-clay mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm text-charcoal hover:text-sage transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-charcoal">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Private Sessions Note */}
            <div className="bg-cream rounded-xl p-6 mb-10">
              <h3 className="font-heading text-lg text-deep-forest mb-2">
                In-Home Sessions Available
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                I travel throughout Long Beach Island, Cranford, Milburn, and
                Summit for private yoga and reiki sessions. All you need is a
                quiet space — I bring everything else.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-xl overflow-hidden bg-sand/50 h-56 flex items-center justify-center">
              {/* TODO: Replace with Google Maps embed - use iframe with your Google Maps API key */}
              <div className="text-center">
                <MapPin size={32} className="text-clay/40 mx-auto mb-2" />
                <p className="font-body text-xs text-charcoal/40">
                  Serving communities across New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.15em] uppercase text-clay mb-4">
              Common Questions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-deep-forest font-light">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </SectionWrapper>
    </>
  );
}
