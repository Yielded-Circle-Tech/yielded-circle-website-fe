"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-brand-soft/35 backdrop-blur transition-all ${
        scrolled
          ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.97),rgba(243,236,255,0.97))] shadow-[0_12px_24px_rgba(33,0,75,0.08)]"
          : "bg-[linear-gradient(90deg,rgba(255,255,255,0.78),rgba(243,236,255,0.82))]"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-4 md:px-6">
        <div className="text-sm font-semibold tracking-tight md:text-base">
          Yielded Circle <span className="text-brand">Tech</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection("work")}
          >
            Work
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection("process")}
          >
            Process
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <button
          className="hidden rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-5 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 md:inline-block"
          onClick={() => scrollToSection("contact")}
        >
          Start a project
        </button>

        <button
          className="relative inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-page-text transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-page-text transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-page-text transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {isOpen ? (
          <div className="absolute left-0 top-16 flex w-full flex-col gap-2 border-b border-brand-soft/35 bg-[linear-gradient(180deg,#ffffff_0%,#f4ebff_100%)] p-4 md:hidden">
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection("work")}
            >
              Work
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection("process")}
            >
              Process
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <button
              className="mt-2 rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
              onClick={() => scrollToSection("contact")}
            >
              Start a project
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
