import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Wondem Abebaw | Senior Full-Stack Developer & Applied AI Engineer",
  description:
    "Senior Full-Stack Developer and Applied AI Engineer with 3+ years of production experience in banking (2M+ users, 500B+ ETB), microservices, event-driven systems (Kafka/RabbitMQ), and multi-agent AI/RAG architectures.",
  keywords: [
    "Wondem Abebaw",
    "Senior Full-Stack Developer",
    "Applied AI Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "Next.js Developer",
    "NestJS",
    "FastAPI",
    "Golang",
    "Kafka",
    "Fintech Engineer",
    "Ethiopia Software Engineer",
  ],
  authors: [{ name: "Wondem Abebaw" }],
  creator: "Wondem Abebaw",
  openGraph: {
    title: "Wondem Abebaw | Senior Full-Stack Developer & Applied AI Engineer",
    description:
      "Full-stack software engineer with 3+ years of production experience across backend, frontend, cloud-native systems, and applied AI.",
    url: "https://wondemabebaw.dev",
    siteName: "Wondem Abebaw Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wondem Abebaw | Senior Full-Stack Developer & Applied AI Engineer",
    description:
      "Senior Full-Stack Developer & Applied AI Engineer with 3+ years building banking, microservices, and multi-agent AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111827] text-white selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
