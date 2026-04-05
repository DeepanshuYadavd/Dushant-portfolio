"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Home,
  Briefcase,
  Zap,
  User,
  Mail,
  ArrowUpRight
} from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Work", href: "featured", icon: Briefcase },
  { name: "Skills", href: "skills", icon: Zap },
  { name: "About", href: "about", icon: User },
  { name: "Contact", href: "contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR (Top Fixed) */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6 hidden md:block"
      >
        <div
          className={`relative overflow-hidden flex items-center justify-between !px-8 !py-3 rounded-full border transition-all duration-500
            ${scrolled
              ? "bg-white/10 backdrop-blur-2xl border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              : "bg-white/5 backdrop-blur-xl border-white/10"
            }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-10 text-lg tracking-[0.35em] font-bold text-white uppercase"
          >
            DUSHANT<span className="text-neutral-500">.</span>
          </Link>

          {/* NAV LINKS */}
          <nav className="flex items-center gap-2 relative z-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative px-4 py-2 text-xs tracking-widest uppercase transition-colors duration-300 ${active === link.name ? "text-white" : "text-neutral-400 hover:text-white"}`}
              >
                {active === link.name && (
                  <motion.span
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/10"
                  />
                )}
                <div className="relative z-10 !px-2 !py-2">{link.name}</div>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative z-10 flex items-center gap-2 !px-5 !py-2 rounded-full border border-white/10 bg-white text-black text-xs font-bold uppercase tracking-wider overflow-hidden group"
          >
            <span className="relative z-10">Showreel</span>
            <ArrowUpRight size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE NAVBAR (Bottom Floating Dock) */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "circIn" }}
        className=" !w-full !flex !items-center !justify-around !gap-[2rem] fixed bottom-7 !p-3 left-1/2 -translate-x-1/2 z-[100] md:!hidden px-4"
      >
        <div className="flex items-center justify-center !gap-[2rem] !p-2 !w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative flex flex-col items-center justify-center p-4 transition-all duration-300 ${isActive ? "text-white" : "text-neutral-500"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-2xl bg-white/10"
                  />
                )}
                <Icon size={20} className="relative z-10 mb-1" />
                <div className="relative z-10 text-[10px] font-bold uppercase tracking-tighter">
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}

