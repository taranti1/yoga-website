import Link from "next/link";
import LotusIcon from "@/components/decorative/LotusIcon";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <LotusIcon size={48} className="text-clay/40 mx-auto mb-6" />
        <h1 className="font-heading text-6xl text-deep-forest mb-4 font-light">
          404
        </h1>
        <h2 className="font-heading text-2xl text-deep-forest mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-sm text-charcoal/60 mb-8 leading-relaxed">
          It seems this page has wandered off the mat. Let&apos;s guide you back
          to a place of balance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
