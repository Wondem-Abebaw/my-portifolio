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
  title: "Wondem Abebaw | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years of experience designing and delivering production-grade software across banking (3M+ users, 500B+ ETB in transactions), fintech, distributed systems, event-driven architectures (Kafka/RabbitMQ), cloud-native platforms, and AI engineering.",
  keywords: [
    "Wondem Abebaw",
    "Senior Software Engineer",
    "Backend Engineering",
    "Distributed Systems",
    "Fintech & Banking",
    "Microservices Architecture",
    "Clean Architecture",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Python",
    "Go",
    "React",
    "Next.js",
    "Apache Kafka",
    "RabbitMQ",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "LangGraph",
    "RAG",
    "Ethiopia Software Engineer",
  ],
  authors: [{ name: "Wondem Abebaw" }],
  creator: "Wondem Abebaw",
  openGraph: {
    title: "Wondem Abebaw | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4+ years of experience designing and delivering production-grade software across banking, fintech, distributed systems, and AI engineering.",
    url: "https://wondemabebaw.dev",
    siteName: "Wondem Abebaw Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wondem Abebaw | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4+ years of experience delivering scalable backend systems, microservices, and modern web applications.",
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
