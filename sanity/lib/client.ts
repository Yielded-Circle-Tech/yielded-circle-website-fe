// Imported from @sanity/client, not the next-sanity barrel: the barrel also
// exports client components, which pulled ~180 KB of Sanity code into the
// browser bundle of every blog page.
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
