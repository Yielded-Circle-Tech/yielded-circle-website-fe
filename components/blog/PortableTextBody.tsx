import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-relaxed text-page-textMuted">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-3xl font-semibold tracking-tight text-page-text">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-page-text">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 text-xl font-semibold tracking-tight text-page-text">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-brand-soft bg-white/60 py-3 pl-5 pr-4 text-base italic leading-relaxed text-brand-deep">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-page-textMuted">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-page-textMuted">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-page-text">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-brand-light px-1.5 py-0.5 text-sm text-brand-deep">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = (value?.href as string) || "#";
      const newTab = Boolean(value?.openInNewTab);
      const className =
        "text-brand underline underline-offset-4 transition hover:text-brand-deep";

      if (newTab || !href.startsWith("/")) {
        return (
          <a
            href={href}
            className={className}
            {...(newTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null;

      return (
        <figure className="mt-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-brand-soft/45">
            <Image
              src={imageUrl(value, 1200, 675)}
              alt={value.alt || ""}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-xs text-page-textMuted">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
