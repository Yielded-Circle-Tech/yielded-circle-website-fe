import Image from "next/image";
import { imageUrl } from "@/sanity/lib/image";
import type { AuthorRef } from "@/sanity/lib/types";
import { formatPostDate } from "./formatDate";

type Props = {
  author?: AuthorRef;
  /** Omitted where the date is already shown elsewhere, such as the author bio card. */
  publishedAt?: string;
  className?: string;
};

export function AuthorByline({ author, publishedAt, className }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {author?.photo ? (
        <Image
          src={imageUrl(author.photo, 96, 96)}
          alt={author.photo.alt || author.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border border-brand-soft/60 object-cover"
        />
      ) : null}

      <div className="text-left">
        {author ? (
          <div className="text-sm font-semibold text-brand-deep">
            {author.name}
            {author.role ? (
              <span className="font-normal text-page-textMuted">
                {" "}
                · {author.role}
              </span>
            ) : null}
          </div>
        ) : null}

        {publishedAt ? (
          <time
            dateTime={publishedAt}
            className="text-xs font-medium uppercase tracking-[0.14em] text-page-textMuted"
          >
            {formatPostDate(publishedAt)}
          </time>
        ) : null}
      </div>
    </div>
  );
}
