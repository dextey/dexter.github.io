import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dexter",
  description: "A software enginner &, a developer who is passionated about adding bits on internet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}> {children}</body>
    </html>
  );
}
