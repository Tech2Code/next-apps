import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <main className="container">
      <AnimatedSection className="hero-section">
        <div className="hero-image">
          <div className="profile-image">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Developer Portrait"
              fill
              className="image"
              priority
            />
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span>Hi, I'm</span>
            <span className="accent">John Doe</span>
          </h1>

          <h2 className="hero-subtitle">Full-Stack Web Developer</h2>

          <p className="hero-description">
            I build scalable web applications using modern technologies that solve real-world problems.
          </p>

          <div className="button-group">
            <Link href="/contact" className="button primary">
              Contact Me <ArrowRight className="icon" />
            </Link>

            <a href="/resume.pdf" download className="button secondary">
              Download Resume <Download className="icon" />
            </a>
          </div>

          <div className="social-links">
            <Link href="https://github.com" target="_blank" className="social-link">
              <Github className="social-icon" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="social-link">
              <Linkedin className="social-icon" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="social-link">
              <Twitter className="social-icon" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:contact@example.com" className="social-link">
              <Mail className="social-icon" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

