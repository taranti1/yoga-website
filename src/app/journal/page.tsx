import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { posts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflections on yoga, reiki, breathwork, and mindful living from Cynthia Tarantino. Practical guidance for your practice on and off the mat.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Reflections, guidance, and inspiration for your practice"
        backgroundImage="/images/reiki/training/training-1.jpg"
      />

      <SectionWrapper background="warm-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block"
            >
              <article className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-4 left-4 bg-warm-white/90 text-deep-forest font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-charcoal/50 font-body text-xs mb-3">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl text-deep-forest mb-3 group-hover:text-sage transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center font-body text-sm font-semibold text-sage tracking-wide uppercase mt-4">
                    Read More
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
