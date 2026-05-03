import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dushant",
  description: "Get in touch for cinematic video editing projects and collaborations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
