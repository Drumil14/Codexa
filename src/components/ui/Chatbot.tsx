"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mark } from "@/components/layout/Logo";
import { SERVICES, PRICING, PROCESS } from "@/lib/data";

type Role = "bot" | "user";

interface Message {
  id: number;
  role: Role;
  text: string;
  quickReplies?: string[];
  link?: { label: string; href: string };
}

let _id = 0;
const uid = () => ++_id;

const GREETING: Message = {
  id: uid(),
  role: "bot",
  text: "Hi — I can help you figure out what kind of website or app you need, walk you through our process, or share pricing.\n\nWhat are you working on?",
  quickReplies: [
    "What do you build?",
    "How does it work?",
    "Pricing",
    "Talk to someone",
  ],
};

function getBotResponse(input: string): Message {
  const q = input.toLowerCase();

  if (
    /what (do you build|websites|type|kind|site|services|can you)/i.test(q) ||
    q.includes("what do you build")
  ) {
    return {
      id: uid(),
      role: "bot",
      text:
        "We build six types of digital products:\n\n" +
        SERVICES.map((s) => `**${s.title}** — ${s.summary}`).join("\n\n"),
      quickReplies: [
        "Business website",
        "E-commerce",
        "Web application",
        "Dashboard",
        "How does it work?",
      ],
    };
  }

  if (/business|marketing|landing|lead/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "business-websites")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (/ecommerce|e-commerce|shop|store|shopify|sell/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "ecommerce")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (/web app|application|app\b|software|saas|mvp|startup/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "web-applications")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (/dashboard|internal|tool\b|admin|analytics|report/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "dashboards")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (/redesign|redo|refresh|rebrand|update my site/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "website-redesign")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (/support|maintenance|care|ongoing|security|uptime/i.test(q)) {
    const s = SERVICES.find((s) => s.slug === "maintenance")!;
    return {
      id: uid(),
      role: "bot",
      text: `**${s.title}**\n\n${s.description}\n\nIncludes: ${s.features.join(", ")}. Deliverables: ${s.deliverables.join(", ")}.`,
      quickReplies: ["Pricing", "How does it work?", "Talk to someone"],
    };
  }

  if (
    /how (does it work|do you work|is the process)|process|steps|timeline|what happens/i.test(q)
  ) {
    return {
      id: uid(),
      role: "bot",
      text:
        "Here's how a project runs:\n\n" +
        PROCESS.map((p) => `**${p.step}. ${p.title}** — ${p.description}`).join(
          "\n\n"
        ),
      quickReplies: ["Pricing", "Talk to someone"],
    };
  }

  if (/price|pricing|cost|budget|how much|\$|pay|afford/i.test(q)) {
    return {
      id: uid(),
      role: "bot",
      text:
        "Three tiers, all fixed-price:\n\n" +
        PRICING.map(
          (p) =>
            `**${p.name} — ${p.price}**\n${p.tagline}\n${p.features.join(" · ")}\n${p.delivery}`
        ).join("\n\n"),
      quickReplies: ["What do you build?", "Talk to someone"],
    };
  }

  if (/contact|talk|speak|meet|call|book|team|human|person|email/i.test(q)) {
    return {
      id: uid(),
      role: "bot",
      text: "We'd love to hear about your project. Book a free discovery call — usually 30 minutes, no pitch, just a conversation about what you're building.",
      link: { label: "Book a free call", href: "/contact" },
      quickReplies: ["What do you build?", "Pricing"],
    };
  }

  return {
    id: uid(),
    role: "bot",
    text: "I didn't catch that — here's what I can help with:",
    quickReplies: [
      "What do you build?",
      "How does it work?",
      "Pricing",
      "Talk to someone",
    ],
  };
}

function FormattedText({ text }: { text: string }) {
  return (
    <span>
      {text.split("\n").map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {i > 0 && <br />}
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </span>
        );
      })}
    </span>
  );
}

const msgVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setEverOpened(true);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || typing) return;
      setMessages((prev) => [...prev, { id: uid(), role: "user", text }]);
      setInput("");
      setTyping(true);
      setTimeout(
        () => {
          setTyping(false);
          setMessages((prev) => [...prev, getBotResponse(text)]);
        },
        700 + Math.random() * 500
      );
    },
    [typing]
  );

  const lastBotMsg = [...messages].reverse().find((m) => m.role === "bot");

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        {/* Pulse ring — only before first open */}
        {!everOpened && (
          <motion.span
            className="absolute inset-0 rounded-full bg-accent"
            animate={{ scale: [1, 1.55], opacity: [0.35, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-white shadow-glow"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-[18px] w-[18px]" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageSquare className="h-[18px] w-[18px]" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed bottom-[76px] right-6 z-[60] flex w-[400px] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
            style={{ maxHeight: "min(600px, calc(100dvh - 7rem))" }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4">
              <div className="flex items-center gap-3">
                <Mark dark className="h-6 w-6" />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white leading-none">
                    Codexa
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 leading-none">
                    Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white/30 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={msgVariants}
                    className={cn(
                      "flex mb-3",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[84%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed",
                        msg.role === "user"
                          ? "bg-ink text-white rounded-br-sm"
                          : "bg-accent/[0.07] text-ink rounded-bl-sm border border-accent/[0.12]"
                      )}
                    >
                      <FormattedText text={msg.text} />
                      {msg.link && (
                        <Link
                          href={msg.link.href}
                          className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold font-display tracking-tight text-accent hover:underline"
                          onClick={() => setOpen(false)}
                        >
                          {msg.link.label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    variants={msgVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex justify-start mb-3"
                  >
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-accent/[0.12] bg-accent/[0.07] px-4 py-3.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-muted"
                          animate={{ opacity: [0.25, 1, 0.25] }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            delay: i * 0.18,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick replies */}
              <AnimatePresence>
                {!typing && lastBotMsg?.quickReplies && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {lastBotMsg.quickReplies.map((r) => (
                      <button
                        key={r}
                        onClick={() => sendMessage(r)}
                        className="rounded-full border border-ink/[0.14] bg-transparent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60 transition-all hover:border-accent/60 hover:bg-accent/5 hover:text-accent"
                      >
                        {r}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── Input ── */}
            <div className="border-t border-line bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-3 px-4 py-3"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something…"
                  className="flex-1 bg-transparent py-1 text-[13.5px] text-ink placeholder:text-muted/50 outline-none"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || typing}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-30 hover:bg-accent-600"
                  aria-label="Send"
                >
                  <Send className="h-3.5 w-3.5" />
                </motion.button>
              </form>
              <p className="px-4 pb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted/40">
                Codexa · Web Development Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
