import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TPP Manifesto 2025 | Sustainable & Meaningful Job Creation",
  description: "Tobago People's Party - Building a prosperous future for every Tobagonian through sustainable and meaningful job creation.",
  keywords: ["Tobago", "TPP", "Manifesto", "Jobs", "Employment", "Sustainable Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
