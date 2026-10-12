import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const REVALIDATED_TYPES = new Set(["post", "author", "category"]);

/**
 * Called by a Sanity webhook on publish. Authors and categories are denormalised
 * into post cards, so a single "blog" tag covers every blog fetch.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation is not configured." },
      { status: 500 },
    );
  }

  if (request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ error: "Invalid secret." }, { status: 401 });
  }

  let type: unknown;
  try {
    const body = (await request.json()) as { _type?: unknown };
    type = body._type;
  } catch {
    return NextResponse.json(
      { error: "Expected a JSON body." },
      { status: 400 },
    );
  }

  if (typeof type !== "string" || !REVALIDATED_TYPES.has(type)) {
    return NextResponse.json(
      { revalidated: false, reason: `Ignored document type: ${String(type)}` },
      { status: 200 },
    );
  }

  revalidateTag("blog");

  return NextResponse.json({ revalidated: true, tag: "blog", type });
}
