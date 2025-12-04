import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Doe | Full-Stack Web Developer",
  description:
    "Professional portfolio of John Doe, a full-stack web developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["web developer", "full-stack", "React", "Next.js", "portfolio"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="layout">
            <Header />
            <div className="main-content">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

