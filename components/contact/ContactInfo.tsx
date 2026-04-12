"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircleMore } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "yadavdushant588@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=yadavdushant588@gmail.com",
    color: "!bg-blue-500/10",
  },
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    value: "+91 7526989793",
    href: "https://wa.me/917526989793?text=Hello%20Dushant",
    color: "!bg-green-500/10",
  },
];



export default function ContactInfo() {
  return (
    <div className="!space-y-8">
      <div>
        <h2 className="!text-3xl !md:text-4xl !font-bold !text-white !mb-4">
          Let's <span className="!text-neutral-500">Connect.</span>
        </h2>
     
      </div>

      <div className="!space-y-4">
        {contactDetails.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={item.href}
              target="_blank"
              className="!group !flex !items-center !gap-6 !p-5 !rounded-3xl !bg-white/[0.03] !border !border-white/10 hover:!bg-white/[0.06] hover:!border-white/20 !transition-all !duration-500"
            >
              <div className={`!p-4 !rounded-2xl !text-neutral-300 group-hover:!text-white !transition-colors ${item.color}`}>
                <item.icon className="!w-6 !h-6" />
              </div>
              <div>
                <p className="!text-xs !uppercase !tracking-widest !text-neutral-500 !font-bold !mb-1">
                  {item.label}
                </p>
                <p className="!text-white !font-medium !text-lg group-hover:!text-white/90">
                  {item.value}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

   
    </div>
  );
}
