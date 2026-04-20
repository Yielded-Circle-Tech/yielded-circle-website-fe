"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    idea: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, whatsapp } = formData;
    if (!name.trim() || !whatsapp.trim()) {
      alert("Please enter your name and WhatsApp number.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseBody = (await response.json()) as { error?: string };
        throw new Error(responseBody.error || "Failed to submit your request.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", whatsapp: "", idea: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative overflow-x-clip pb-16 pt-24 md:pb-24">
      <section className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-brand-soft/60 bg-[linear-gradient(90deg,#f6eeff_0%,#efe3ff_100%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
            Contact Us
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let&apos;s build something that works in the real world
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-page-textMuted">
            Book a free 45-minute discovery call and get practical guidance on
            scope, timeline, and the right technical path for your product.
          </p>
        </div>
      </section>

      <section className="section-space mx-auto w-full max-w-content px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          <aside className="reveal rounded-2xl border border-brand-soft/45 bg-[linear-gradient(180deg,#ffffff_0%,#f3ebff_100%)] p-6 shadow-[0_10px_24px_rgba(75,0,130,0.1)] lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              How to reach us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-page-textMuted">
              Share your goals and context, and we&apos;ll reply with next steps
              tailored to your stage and budget.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-brand-soft/45 bg-white/75 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  WhatsApp
                </div>
                <a
                  className="mt-1 block text-sm font-medium text-page-text hover:text-brand"
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +234 800 000 0000
                </a>
              </div>

              <div className="rounded-xl border border-brand-soft/45 bg-white/75 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  Email
                </div>
                <a
                  className="mt-1 block text-sm font-medium text-page-text hover:text-brand"
                  href="mailto:hello@yieldedcircle.tech"
                >
                  hello@yieldedcircle.tech
                </a>
              </div>

              <div className="rounded-xl border border-brand-soft/45 bg-white/75 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  Location
                </div>
                <p className="mt-1 text-sm font-medium text-page-text">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-brand-soft/45 bg-white/75 p-4">
              <div className="text-sm font-semibold text-page-text">
                Need quick proof?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-page-textMuted">
                See how we&apos;ve delivered in fintech, e-commerce, agritech,
                and SaaS.
              </p>
              <Link
                href="/client-stories"
                className="mt-3 inline-flex text-sm font-semibold text-brand-deep transition hover:text-brand"
              >
                View client stories
              </Link>
            </div>
          </aside>

          <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-8 shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-10 lg:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight text-page-text md:text-3xl">
              Book your discovery call
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-page-textMuted">
              No pitch, no pressure. Just a focused conversation on your idea,
              timeline, and technical direction.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-brand-soft/45 bg-white px-4 py-3 text-sm text-page-text placeholder:text-page-textMuted focus:border-brand-accent focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full rounded-md border border-brand-soft/45 bg-white px-4 py-3 text-sm text-page-text placeholder:text-page-textMuted focus:border-brand-accent focus:outline-none"
                  required
                />
              </div>

              <textarea
                name="idea"
                placeholder="Tell us about your product or business challenge..."
                value={formData.idea}
                onChange={handleChange}
                className="w-full rounded-md border border-brand-soft/45 bg-white px-4 py-3 text-sm text-page-text placeholder:text-page-textMuted focus:border-brand-accent focus:outline-none"
                rows={5}
              />

              <button
                type="submit"
                className="w-full rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Start a project"}
              </button>

              {isSubmitted && (
                <div className="text-sm font-medium text-brand-deep">
                  ✓ Thanks. We&apos;ll reach out within 24 hours.
                </div>
              )}

              {errorMessage && (
                <div className="text-sm font-medium text-red-700">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
