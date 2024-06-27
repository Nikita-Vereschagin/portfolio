import type { Metadata } from "next";
import "./globals.css";
import { raleway_light } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "~ PORTFOLIO ~",
  description: "Nikita Vereshagin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway_light.className}>
      {children}
    </html>
  );
}
