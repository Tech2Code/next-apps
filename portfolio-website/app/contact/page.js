import ContactForm from "@/components/contact-form"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Contact | John Doe",
  description: "Get in touch with John Doe for job opportunities, collaborations, or project inquiries.",
}

export default function ContactPage() {
  return (
    <main className="container">
      <AnimatedSection className="page-header">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-description">
          Have a project in mind or want to discuss a potential collaboration? Get in touch!
        </p>
      </AnimatedSection>

      <div className="contact-grid">
        <AnimatedSection className="contact-form-section">
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection className="contact-info-section">
          <div className="contact-info-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-info-description">
              Feel free to reach out through the form or directly via email or social media.
            </p>
          </div>

          <div className="contact-links">
            <div className="contact-link-item">
              <Mail className="contact-icon" />
              <a href="mailto:contact@example.com" className="contact-link-text">
                contact@example.com
              </a>
            </div>

            <div className="contact-link-item">
              <Github className="contact-icon" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-text">
                github.com/johndoe
              </a>
            </div>

            <div className="contact-link-item">
              <Linkedin className="contact-icon" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-text">
                linkedin.com/in/johndoe
              </a>
            </div>

            <div className="contact-link-item">
              <Twitter className="contact-icon" />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link-text">
                twitter.com/johndoe
              </a>
            </div>
          </div>

          <div className="location-section">
            <h2 className="section-title">Location</h2>
            <p className="location-text">
              San Francisco, California
              <br />
              United States
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}

