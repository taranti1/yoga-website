"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image?: string;
  imageAlt?: string;
  tag?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export default function Card({
  image,
  imageAlt = "",
  tag,
  title,
  description,
  href,
  linkText = "Learn More",
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {image && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {tag && (
            <span className="absolute top-4 left-4 bg-warm-white/90 text-deep-forest font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading text-2xl text-deep-forest mb-2">{title}</h3>
        <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center font-body text-sm font-semibold text-sage hover:text-deep-forest transition-colors duration-300 tracking-wide uppercase"
          >
            {linkText}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
