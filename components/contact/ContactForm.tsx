"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Brief delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Construct WhatsApp message
    const whatsappNumber = "917526989793";
    const message = `*New Message from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset to idle after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputStyles = "!w-full !px-6 !py-4 !rounded-2xl !bg-white/[0.02] !border-2 !border-green-100 !text-white !placeholder-neutral-500 !focus:outline-none !focus:border-white/30 !focus:bg-white/[0.05] !transition-all !duration-300";

  return (
    <div className="!relative !p-8 md:!p-12 !rounded-[2.5rem] !bg-white/[0.02] !backdrop-blur-3xl !border-1 !border-green-100 !shadow-2xl !overflow-hidden">
      {/* Decorative inner glow */}
      <div className="!absolute !-top-24 !-right-24 !w-48 !h-48 !bg-white/5 !blur-[60px] !rounded-full !pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="!flex !flex-col !items-center !justify-center !text-center !py-12"
          >
            <div className="!w-20 !h-20 !bg-green-500/10 !rounded-full !flex !items-center !justify-center !mb-6">
              <CheckCircle2 className="!w-10 !h-10 !text-green-500" />
            </div>
            <h3 className="!text-2xl !font-bold !text-white !mb-2">Message Sent!</h3>
            <p className="!text-neutral-400 !max-w-[280px]">
              Thanks for reaching out, Dushant will get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="!mt-8 !px-8 !py-3 !rounded-full !bg-white/10 !text-white !text-sm !font-semibold hover:!bg-white/15 !transition-colors"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="!space-y-6 !relative !z-10"
          >
            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
              <div className="!space-y-2">
                <label className="!text-xs !uppercase !tracking-widest !text-neutral-500 !font-bold !ml-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className={inputStyles}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="!space-y-2">
                <label className="!text-xs !uppercase !tracking-widest !text-neutral-500 !font-bold !ml-2">Email</label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className={inputStyles}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="!space-y-2">
              <label className="!text-xs !uppercase !tracking-widest !text-neutral-500 !font-bold !ml-2">Subject</label>
              <input
                required
                type="text"
                placeholder="How can I help?"
                className={inputStyles}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="!space-y-2">
              <label className="!text-xs !uppercase !tracking-widest !text-neutral-500 !font-bold !ml-2">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Share your vision..."
                className={`${inputStyles} !resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="!w-full !py-5 !rounded-2xl !bg-white !text-black !font-bold !text-lg !flex !items-center !justify-center !gap-3 hover:!bg-neutral-200 !disabled:opacity-50 !disabled:cursor-not-allowed !transition-all !duration-300 !group"
            >
              {status === "sending" ? (
                <div className="!w-6 !h-6 !border-2 !border-black/30 !border-t-black !rounded-full !animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="!w-5 !h-5 !group-hover:translate-x-1 !group-hover:-translate-y-1 !transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
