// import SkillBadge from "@/components/skill-badge"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Education & Skills | John Doe",
  description: "Educational background and technical skills of John Doe, full-stack web developer.",
}

const education = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2012 - 2016",
    description: "Focused on software engineering, web development, and database systems.",
  },
  {
    id: 2,
    institution: "Frontend Masters",
    degree: "Advanced React & Next.js Certification",
    duration: "2019",
    description: "Comprehensive training on advanced React patterns and Next.js application development.",
  },
  {
    id: 3,
    institution: "AWS Training & Certification",
    degree: "AWS Certified Developer - Associate",
    duration: "2020",
    description: "Certification for designing and developing AWS cloud applications.",
  },
]

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Redux"],
  backend: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "WebSockets"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"],
  devops: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "CI/CD"],
  tools: ["VS Code", "Figma", "Postman", "Jest", "React Testing Library"],
}

export default function EducationPage() {
  return (
    <main className="container">
      <AnimatedSection className="page-header">
        <h1 className="page-title">Education & Skills</h1>
        <p className="page-description">My educational background and technical skill set.</p>
      </AnimatedSection>

      <div className="education-skills-grid">
        <AnimatedSection className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.id} className="education-card">
                <h3 className="education-institution">{item.institution}</h3>
                <div className="education-degree">{item.degree}</div>
                <div className="education-duration">{item.duration}</div>
                <p className="education-description">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="skills-section">
          <h2 className="section-title">Skills</h2>

          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <div className="skills-list">
                {skills.frontend.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              <div className="skills-list">
                {skills.backend.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Database</h3>
              <div className="skills-list">
                {skills.database.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">DevOps</h3>
              <div className="skills-list">
                {skills.devops.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools</h3>
              <div className="skills-list">
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}

