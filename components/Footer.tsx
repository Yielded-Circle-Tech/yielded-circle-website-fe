export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-soft/40 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(236,222,255,0.32)_100%)] py-8">
      <div
        className="reveal mx-auto flex w-full max-w-content flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left"
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
      >
        <div className="text-xs text-page-textMuted md:text-sm">
          © {currentYear} Yielded Circle Tech · Lagos, Nigeria
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 text-sm text-page-textMuted md:justify-end">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center px-2 transition hover:text-brand-deep"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center px-2 transition hover:text-brand-deep"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@yieldedcircletech.com"
            className="inline-flex min-h-[44px] items-center px-2 transition hover:text-brand-deep"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
