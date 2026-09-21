import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: Image) => builder.image(source);

/**
 * Sanity images are served from a global CDN, so a plain URL with explicit
 * dimensions is enough — next/image handles the responsive `sizes` work.
 */
export const imageUrl = (
  source: Image,
  width: number,
  height?: number,
): string => {
  const base = urlFor(source).width(width).auto("format").quality(80);
  return (height ? base.height(height).fit("crop") : base).url();
};
