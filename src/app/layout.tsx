import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HubFit — The All-in-One Fitness Coaching Platform",
  description:
    "HubFit makes it easy to build, scale, and automate your fitness business — training, nutrition, check-ins, habits, community, and more in one place.",
  metadataBase: new URL("https://hubfit-clone.vercel.app"),
  openGraph: {
    title: "HubFit — The All-in-One Fitness Coaching Platform",
    description:
      "Powering your coaching business — training, nutrition, check-ins, habits, community, and more in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
