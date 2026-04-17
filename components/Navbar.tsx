'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-page-border/80 backdrop-blur transition-colors ${
        scrolled ? 'bg-page-bg/95' : 'bg-page-bg/70'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-4 md:px-6">
        <div className="text-sm font-semibold tracking-tight md:text-base">
          Yielded Circle <span className="text-brand">Tech</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection('work')}
          >
            Work
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection('process')}
          >
            Process
          </button>
          <button
            className="text-sm text-page-textMuted transition hover:text-page-text"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <button
          className="hidden rounded-md bg-brand px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-dark md:inline-block"
          onClick={() => scrollToSection('contact')}
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
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-page-text transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-page-text transition ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        {isOpen ? (
          <div className="absolute left-0 top-16 flex w-full flex-col gap-2 border-b border-page-border bg-page-bg p-4 md:hidden">
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection('work')}
            >
              Work
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection('process')}
            >
              Process
            </button>
            <button
              className="rounded-md px-3 py-2 text-left text-sm text-page-textMuted transition hover:bg-page-surface hover:text-page-text"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            <button
              className="mt-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
              onClick={() => scrollToSection('contact')}
            >
              Start a project
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
