import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/journal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import LotusIcon from "@/components/decorative/LotusIcon";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/30 to-transparent" />
        <div className="relative z-10 w-full mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 pb-12">
          <div className="flex items-center gap-3 text-warm-white/60 font-body text-xs mb-4">
            <span className="bg-warm-white/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white font-light max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <SectionWrapper background="warm-white">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/journal"
            className="inline-flex items-center font-body text-sm text-sage hover:text-deep-forest transition-colors duration-300 mb-10"
          >
            <span className="mr-2">&larr;</span>
            Back to Journal
          </Link>

          <article className="prose-custom">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-heading text-2xl text-deep-forest mt-10 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    className="font-body text-base font-semibold text-deep-forest mt-6 mb-2"
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              return (
                <p
                  key={i}
                  className="font-body text-charcoal/80 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Author Bio */}
          <div className="mt-16 pt-10 border-t border-sand flex items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/cynthia/hero-portrait.jpg"
                alt="Cynthia Tarantino"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <p className="font-heading text-lg text-deep-forest">
                Cynthia Tarantino
              </p>
              <p className="font-body text-sm text-charcoal/60">
                Yoga instructor & Usui Reiki Master based in New Jersey
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <SectionWrapper background="cream">
          <div className="max-w-2xl mx-auto">
            <LotusIcon size={28} className="text-clay mx-auto mb-6" />
            <h2 className="font-heading text-3xl text-deep-forest text-center mb-10 font-light">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/journal/${related.slug}`}
                  className="group block"
                >
                  <div className="bg-warm-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-body text-xs text-charcoal/50 mb-1">
                        {related.category}
                      </p>
                      <h3 className="font-heading text-lg text-deep-forest group-hover:text-sage transition-colors duration-300">
                        {related.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
