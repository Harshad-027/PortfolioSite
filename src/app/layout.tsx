import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Harshad Nikam | Backend Developer",
  description: "I'm Harshad Nikam, a Backend Developer building high-performance APIs, cloud-integrated systems, and open-source tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} bg-background text-textSecondary font-sans antialiased min-h-screen relative`}>
        {children}
      </body>
    </html>
  );
}
