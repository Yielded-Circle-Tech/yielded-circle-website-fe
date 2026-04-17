export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-page-border py-8">
      <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div className="text-xs text-page-textMuted md:text-sm">
            © {currentYear} Yielded Circle Tech · Lagos, Nigeria
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-page-textMuted md:justify-end md:text-sm">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-page-text"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-page-text"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@yieldedcircle.tech"
            className="transition hover:text-page-text"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
