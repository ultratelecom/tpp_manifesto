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
  metadataBase: new URL("https://www.tppblueprint.com"),
  title: "TPP - Pathways to Prosperity - Developing Tobago and Tobagonians",
  description: "Tobago People's Party - Pathways to Prosperity. Building a prosperous future for every Tobagonian through sustainable development, job creation, and meaningful progress.",
  keywords: ["Tobago", "TPP", "Tobago People's Party", "Pathways to Prosperity", "Manifesto", "Developing Tobago", "Tobagonians", "Sustainable Development"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "TPP - Pathways to Prosperity - Developing Tobago and Tobagonians",
    description: "Tobago People's Party - Building a prosperous future for every Tobagonian through sustainable development and meaningful progress.",
    type: "website",
    locale: "en_US",
    siteName: "Tobago People's Party",
    images: [
      {
        url: "https://www.tppblueprint.com/tpp_new_logo.png",
        width: 1200,
        height: 630,
        alt: "TPP - Pathways to Prosperity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPP - Pathways to Prosperity - Developing Tobago and Tobagonians",
    description: "Tobago People's Party - Building a prosperous future for every Tobagonian.",
    images: ["https://www.tppblueprint.com/tpp_new_logo.png"],
  },
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
