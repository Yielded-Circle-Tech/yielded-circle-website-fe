"use client";

import { useState } from "react";

export function CTA() {
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
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-space border-t border-page-border" id="contact">
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="reveal rounded-3xl border border-brand-soft/60 bg-[linear-gradient(140deg,#f3e7ff_0%,#e9dbff_48%,#ddd0ff_100%)] px-5 py-10 text-center shadow-[0_20px_44px_rgba(75,0,130,0.16)] md:px-8 md:py-12">
          <h2 className="text-3xl font-medium tracking-tight text-page-text md:text-4xl">
            Have an idea? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-page-textMuted">
            Book a free 45-minute discovery call. No pitch, no pressure — just
            honest advice on whether and how to build it.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-2xl space-y-3 reveal"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
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

            <div>
              <textarea
                name="idea"
                placeholder="Briefly describe your idea..."
                value={formData.idea}
                onChange={handleChange}
                className="w-full rounded-md border border-brand-soft/45 bg-white px-4 py-3 text-sm text-page-text placeholder:text-page-textMuted focus:border-brand-accent focus:outline-none"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[linear-gradient(135deg,#4b0082_0%,#7e21d4_60%,#7630ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Book discovery call"}
            </button>

            {isSubmitted && (
              <div className="text-sm font-medium text-brand-deep">
                ✓ Got it — we&apos;ll reach out on WhatsApp within 24 hours.
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
  );
}
