import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Service Template",
  description: "A modern service template with Next.js and FastAPI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}