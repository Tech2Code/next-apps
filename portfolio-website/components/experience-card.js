"use client"

import { motion } from "framer-motion"

export default function ExperienceCard({ experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="experience-card"
    >
      {experience.current && <div className="current-badge">Current</div>}
      <div className="experience-header">
        <div className="experience-title-container">
          <h3 className="experience-role">{experience.role}</h3>
          <div className="experience-duration">{experience.duration}</div>
        </div>
        <div className="experience-company">{experience.company}</div>
      </div>
      <div className="experience-content">
        <p className="experience-description">{experience.description}</p>
        <div className="experience-responsibilities">
          <h4 className="responsibilities-title">Key Responsibilities:</h4>
          <ul className="responsibilities-list">
            {experience.responsibilities.map((item, index) => (
              <li key={index} className="responsibility-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

