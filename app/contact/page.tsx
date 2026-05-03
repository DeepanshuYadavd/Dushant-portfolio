"use client";

import React from "react";

import dynamic from "next/dynamic";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  ssr: false,
});

const AnimatedBackground = dynamic(() => import("@/components/home/AnimatedBackground"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <main className="!relative !min-h-screen !bg-black !overflow-x-hidden">
      {/* Cinematic Background */}
      <AnimatedBackground />
      <div className="!relative !z-10 !container !mx-auto !p-4 ">
        <div className="  !grid !grid-cols-1 lg:!grid-cols-12 !gap-8 lg:!gap-18 !items-start !py-12 md:!py-20 !px-4 md:!px-12 lg:!px-20 xl:!px-30">
          <div className="lg:!col-span-4 !space-y-12">
            <ContactInfo />
          </div>
          <div className="lg:!col-span-8 !w-full">
            <div className="!border !border-white/10 !rounded-[2.5rem] !bg-white/[0.01] !backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
