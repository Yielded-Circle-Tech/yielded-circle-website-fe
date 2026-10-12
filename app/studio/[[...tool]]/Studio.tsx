"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

/**
 * Client boundary for the Studio. `sanity.config.ts` pulls in client-only React
 * APIs (createContext), so it must never be evaluated in the server bundle.
 */
export function Studio() {
  return <NextStudio config={config} />;
}
