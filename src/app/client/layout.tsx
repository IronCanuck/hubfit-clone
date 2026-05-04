import type { Metadata } from "next";
import { ClientShell } from "@/components/client/ClientShell";

export const metadata: Metadata = {
  title: "Client — Podium Lab",
  description: "Your training, nutrition, and check-ins.",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientShell>{children}</ClientShell>;
}
