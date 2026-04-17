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
    <section
      className="border-t border-page-border py-14 md:py-20"
      id="contact"
    >
      <div className="mx-auto w-full max-w-content px-4 md:px-6">
        <div className="rounded-2xl border border-brand/20 bg-[#1E0F06] px-5 py-10 text-center md:px-8 md:py-12">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Have an idea? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Book a free 45-minute discovery call. No pitch, no pressure — just
            honest advice on whether and how to build it.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-2xl space-y-3"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                name="idea"
                placeholder="Briefly describe your idea..."
                value={formData.idea}
                onChange={handleChange}
                className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Book discovery call"}
            </button>

            {isSubmitted && (
              <div className="text-sm font-medium text-green-400">
                ✓ Got it — we&apos;ll reach out on WhatsApp within 24 hours.
              </div>
            )}

            {errorMessage && (
              <div className="text-sm font-medium text-red-300">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
