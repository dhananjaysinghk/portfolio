"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("Please complete all fields before sending.");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setFeedback("");

    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setStatus("success");
    setFeedback("Thank you! Your message is ready to send and I’ll get back to you soon.");
    setForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        aria-label="Name"
        className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        aria-label="Email"
        className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
      />
      <textarea
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        aria-label="Message"
        className="sm:col-span-2 rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
      />
      <div className="sm:col-span-2 text-sm" aria-live="polite">
        {status === "error" && <p className="text-rose-300">{feedback}</p>}
        {status === "success" && <p className="text-emerald-300">{feedback}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
