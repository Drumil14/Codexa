"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Read hash from URL on route change (cross-page navigation like /about → /#pricing)
  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  // Scroll-based hash tracking on home page (in-page navigation like clicking Pricing while on /)
  useEffect(() => {
    if (pathname !== "/") return;

    const hashIds = NAV_ITEMS
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.slice(2)); // "/#pricing" → "pricing"

    const check = () => {
      let found = "";
      for (const id of hashIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 100) found = `#${id}`;
      }
      setHash(found);
    };

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;
    const id = href.slice(2);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
    setHash(`#${id}`);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-[72px]">
          <Link
            href="/"
            className="rounded-md"
            aria-label="Codexa home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.href.startsWith("/#")
                  ? pathname === "/" && hash === item.href.slice(1)
                  : item.href === "/"
                  ? pathname === "/" && !hash
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleHashClick(e, item.href)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors",
                      active
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-700"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-ink/[0.04] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-paper md:hidden"
          >
            <motion.ul
              className="container-x flex flex-col gap-1 pt-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = item.href.startsWith("/#")
                  ? pathname === "/" && hash === item.href.slice(1)
                  : item.href === "/"
                  ? pathname === "/" && !hash
                  : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => { handleHashClick(e, item.href); setOpen(false); }}
                      className={cn(
                        "flex items-center justify-between border-b border-line py-4 text-2xl font-display tracking-tight",
                        active ? "text-ink" : "text-muted",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-muted">
                        0{NAV_ITEMS.indexOf(item) + 1}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                className="mt-6"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-medium text-white"
                >
                  Book a Call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
