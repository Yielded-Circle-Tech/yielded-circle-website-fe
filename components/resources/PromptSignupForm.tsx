"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/utils";

export function PromptSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email } = formData;
    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your first name and email address.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = (await response.json()) as { error?: string };
        throw new Error(body.error || "Could not sign you up right now.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", whatsapp: "", email: "" });

      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error("Prompt signup error:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border-0 px-4 py-3 text-[15px] font-medium text-page-text placeholder:text-page-textMuted/80 focus:outline-none focus:ring-2 focus:ring-white/70";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Your first name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="given-name"
        className={inputClasses}
        required
      />
      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp number"
        value={formData.whatsapp}
        onChange={handleChange}
        autoComplete="tel"
        className={inputClasses}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        className={`${inputClasses} sm:col-span-2`}
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-white px-5 py-3 text-base font-extrabold text-brand-deep transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
      >
        {isLoading ? "Sending..." : "Send me new prompts"}
      </button>

      {isSubmitted ? (
        <p className="text-sm font-semibold text-white sm:col-span-2">
          ✓ You&apos;re in. Check your inbox for new prompts each week.
        </p>
      ) : null}

      {errorMessage ? (
        <p className="text-sm font-semibold text-[#ffd9d9] sm:col-span-2">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
