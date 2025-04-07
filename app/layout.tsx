import "./globals.css";

import type { Metadata } from "next";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Nina Aßmann | Webdeveloper",
  description:
    "Portfolio | Frontend Entwicklung: Next.js, Tailwind CSS, Node.js, HTML, CSS und JavaScript. Aktuell nehme ich keine Aufträge oder Jobangebote an.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-DE">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
