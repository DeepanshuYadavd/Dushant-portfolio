"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Video, ArrowUpRight, MessageCircleMore } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="!relative !w-full !pt-2 !pb- !overflow-hidden !bg-black ">
      {/* Background glow for premium feel */}
      <div className="!absolute !inset-0 !z-0 !pointer-events-none !flex !items-center !justify-center">
        <div className="!w-[600px] !h-[600px] !rounded-full !bg-white/5 !blur-[100px] !absolute !top-1/2 !-translate-y-1/2 !opacity-40" />
      </div>

      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !relative !z-10">
        <div className="!rounded-[2rem] !border !border-white/10 !bg-white/[0.02] !backdrop-blur-2xl !overflow-hidden !p-8 md:!p-16 !shadow-2xl !relative">
          {/* Noise effect */}
          <div className="!absolute !inset-0 !bg-gradient-to-br !from-white/[0.03] !to-transparent !pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
            className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-12 !gap-12 md:!gap-16 !relative !z-20"
          >
            {/* BRANDING SECTION */}
            <div className="lg:!col-span-5 !flex !flex-col !justify-start">
              <Link href="/" className="!inline-block !group !mb-6">
                <h2 className="!text-3xl md:!text-4xl !tracking-tighter !font-bold !text-white !transition-all group-hover:!opacity-80">
                  DUSHANT<span className="!text-neutral-600">.</span>
                </h2>
              </Link>
              <p className="!text-neutral-400 !leading-relaxed !max-w-md !text-base md:!text-lg">
                Professional cinematic editor delivering high-impact visual
                stories. Dedicated to the art of motion and rhythm.
              </p>

              <div className="!mt-10 !flex !gap-5">
                {[
                  {
                    icon: Mail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=yadavdushant588@gmail.com",
                  },
                  {
                    icon: MessageCircleMore,
                    href: "https://wa.me/917526989793?text=Hello%20Dushant",
                  },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    className="!w-12 !h-12 !rounded-full !border !border-white/10 !flex !items-center !justify-center !text-neutral-400 hover:!text-white hover:!border-white/30 hover:!bg-white/10 !transition-all !duration-300"
                  >
                    <social.icon className="!w-5 !h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* QUICK LINKS SECTION */}
            <div className="lg:!col-span-2 lg:!col-start-7">
              <h4 className="!text-xs !uppercase !tracking-[0.3em] !font-bold !text-neutral-500 !mb-8">
                Menu
              </h4>
              <ul className="!space-y-5">
                {["Home", "Featured", "Showreels", "About"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="!group !flex !items-center !text-base !text-neutral-400 hover:!text-white !transition-colors !w-fit"
                    >
                      <span className="!relative">
                        {item}
                        <span className="!absolute !-bottom-1 !left-0 !w-0 !h-[1px] !bg-white !transition-all group-hover:!w-full" />
                      </span>
                      <ArrowUpRight className="!w-4 !h-4 !ml-2 !opacity-0 !-translate-x-2 group-hover:!opacity-100 group-hover:!translate-x-0 !transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT CARD SECTION */}
            <div className="lg:!col-span-4 ">
              <h4 className="!text-xs !uppercase !tracking-[0.3em] !font-bold !text-neutral-500 !mb-8">
                Contact
              </h4>
              <div className="!space-y-4">
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yadavdushant588@gmail.com"
                  target="_blank"
                  className="  !group !flex  !items-center !gap-4 !p-4 !rounded-2xl !bg-white/[0.03] !border !border-white/5 hover:!bg-white/[0.08] hover:!border-white/20 !transition-all !duration-300"
                >
                  <div className="!bg-white/10 !p-3 !rounded-xl !text-neutral-300 group-hover:!text-white !transition-colors">
                    <Mail className="!w-5 !h-5" />
                  </div>
                  <div>
                    <p className="!text-sm !font-semibold !text-white">
                      Email Me
                    </p>
                    <p className="!text-xs !text-neutral-500 !mt-1 group-hover:!text-neutral-400 !transition-colors">
                      yadavdushant588@gmail.com
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/917526989793?text=Hello%20Dushant"
                  target="_blank"
                  className="!group !flex !items-center !gap-4 !p-4 !rounded-2xl !bg-white/[0.03] !border !border-white/5 hover:!bg-white/[0.08] hover:!border-white/20 !transition-all !duration-300"
                >
                  <div className="!bg-white/10 !p-3 !rounded-xl !text-neutral-300 group-hover:!text-white !transition-colors">
                    <MessageCircleMore className="!w-5 !h-5" />
                  </div>
                  <div>
                    <p className="!text-sm !font-semibold !text-white">
                      Work Together
                    </p>
                    <p className="!text-xs !text-neutral-500 !mt-1 group-hover:!text-neutral-400 !transition-colors">
                      Start a project
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM COPYRIGHT AREA */}
          <div className="!mt-20 !pt-8 !border-t !border-white/5 !relative !z-20 !flex !flex-col md:!flex-row !items-center !justify-between !gap-6">
            <p className="!text-[13px] !text-neutral-500 !font-medium">
              © {currentYear} Dushant • All rights reserved.
            </p>

            <div className="!flex !gap-8 !text-[13px] !text-neutral-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
