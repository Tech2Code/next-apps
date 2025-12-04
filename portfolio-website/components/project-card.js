"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="project-card"
    >
      <div className="project-image-container">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="project-image" />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <h3 className="project-overlay-title">{project.title}</h3>
            <p className="project-overlay-description">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          <ExternalLink className="project-link-icon" />
          Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          <Github className="project-link-icon" />
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

