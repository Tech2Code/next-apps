import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">© {new Date().getFullYear()} John Doe. All rights reserved.</div>

        <nav className="footer-nav">
          <Link href="/projects" className="footer-link">
            Projects
          </Link>
          <Link href="/experience" className="footer-link">
            Experience
          </Link>
          <Link href="/education" className="footer-link">
            Education
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

