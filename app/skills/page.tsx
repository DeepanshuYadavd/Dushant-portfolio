import React from "react";
import SkillsOrbit from "@/components/skills/SkillsOrbit";

export const metadata = {
  title: "Skills Orbit | Portfolio",
  description: "Interactive 3D representation of my software skills.",
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-24 pb-24">
      <section>
        <SkillsOrbit />
      </section>
    </div>
  );
}
