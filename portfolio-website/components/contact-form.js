"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="form-success">
        <h3 className="success-title">Message Sent!</h3>
        <p className="success-message">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <button className="button primary" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-input"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="Your email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Your message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="button primary submit-button">
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="button-icon" />
          </>
        )}
      </button>
    </form>
  )
}

