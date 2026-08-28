import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jose Maria Lopez Villena",
  description:
    "Portfolio personal de Jose Maria Lopez Villena, desarrollador junior especializado en Backend con base sólida Full Stack. Comprometido con soluciones robustas, escalables y accesibles.",
  keywords: [
    "Jose Maria Lopez Villena",
    "desarrollador backend",
    "backend developer",
    "full stack developer",
    "React",
    "Next.js",
    "Java",
    "Laravel",
    "Node.js",
    "PHP",
    "desarrollo web",
    "portfolio desarrollador",
    "programador backend",
  ],
  authors: [{ name: "Jose Maria Lopez Villena" }],
  creator: "Jose Maria Lopez Villena",
  publisher: "Jose Maria Lopez Villena",
  metadataBase: new URL("https://josejd2.netlify.app"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://josejd2.netlify.app",
    title: "Jose Maria Lopez Villena | Backend Developer",
    description:
      "Desarrollador Junior especializado en Backend con base sólida Full Stack. Experto en Java, Laravel, Node.js y React.",
    siteName: "Jose Maria Lopez Villena",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jose Maria Lopez Villena - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Maria Lopez Villena | Backend Developer",
    description:
      "Desarrollador Junior especializado en Backend y apasionado por crear soluciones escalables con tecnologías modernas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  category: "Portfolio personal",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}