"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Education & Skills", path: "/education" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          John<span className="logo-accent">Doe</span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={`nav-link ${pathname === item.path ? "active" : ""}`}>
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="mobile-nav-container">
          <ThemeToggle />
          <button className="menu-button" onClick={() => setMenuOpen(true)}>
            <Menu className="menu-icon" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {menuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
              <div className="mobile-menu-content">
                <nav className="mobile-nav">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`mobile-nav-link ${pathname === item.path ? "active" : ""}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

