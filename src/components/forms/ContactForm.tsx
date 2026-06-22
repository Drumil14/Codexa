"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle, ArrowUpRight } from "lucide-react";
import { BUDGET_RANGES } from "@/lib/data";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  details: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  details: "",
};

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!form.details.trim()) next.details = "Tell us a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-50 text-accent-600">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          Message received
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          Thanks for reaching out. We&apos;ll review your project and get back to
          you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent-600 hover:text-accent-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className={cn(inputBase, errors.name && "border-red-400 focus:border-red-400 focus:ring-red-100")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
            className={cn(inputBase, errors.email && "border-red-400 focus:border-red-400 focus:ring-red-100")}
          />
        </Field>

        <Field label="Company" htmlFor="company" optional>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company name"
            className={inputBase}
          />
        </Field>

        <Field label="Budget range" htmlFor="budget" optional>
          <div className="relative">
            <select
              id="budget"
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={cn(inputBase, "appearance-none pr-10", !form.budget && "text-muted/70")}
            >
              <option value="">Select a range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range} className="text-ink">
                  {range}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            >
              ▾
            </span>
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project details" htmlFor="details" error={errors.details}>
          <textarea
            id="details"
            rows={5}
            value={form.details}
            onChange={(e) => update("details", e.target.value)}
            placeholder="What are you building? What does success look like? Any timeline or constraints we should know about?"
            className={cn(inputBase, "resize-y", errors.details && "border-red-400 focus:border-red-400 focus:ring-red-100")}
          />
        </Field>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            Something went wrong sending your message. Please try again or email
            us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-muted">
        By submitting, you agree to be contacted about your enquiry. We never
        share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink"
      >
        {label}
        {optional && (
          <span className="font-mono text-[11px] font-normal text-muted">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
