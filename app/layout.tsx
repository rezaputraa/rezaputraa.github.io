import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import NavBar from "@/components/NavBar";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export const metadata: Metadata = {
  title: "Reza Putra | Backend Developer",
  description: "Reza Putra's porfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <main className="overflow-hidden sm:me-[90px]">
          <NavBar links={links} />
          {children}
        </main>
      </body>
    </html>
  );
}
