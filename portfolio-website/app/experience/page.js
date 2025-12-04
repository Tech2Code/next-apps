import ExperienceCard from "@/components/experience-card"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Experience | John Doe",
  description: "Professional experience and work history of John Doe, full-stack web developer.",
}

const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Senior Full-Stack Developer",
    duration: "2021 - Present",
    description:
      "Leading development of enterprise web applications using Next.js, React, and Node.js. Managing a team of 5 developers and implementing CI/CD pipelines.",
    responsibilities: [
      "Architected and developed scalable web applications",
      "Implemented authentication and authorization systems",
      "Optimized application performance and reduced load times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Digital Solutions LLC",
    role: "Front-End Developer",
    duration: "2018 - 2021",
    description:
      "Developed responsive web applications using React and collaborated with UX/UI designers to implement pixel-perfect designs.",
    responsibilities: [
      "Built and maintained multiple client-facing web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Integrated RESTful APIs and implemented state management with Redux",
      "Participated in agile development processes and sprint planning",
    ],
    current: false,
  },
  {
    id: 3,
    company: "WebCraft Studios",
    role: "Junior Web Developer",
    duration: "2016 - 2018",
    description:
      "Assisted in the development of websites and web applications using HTML, CSS, JavaScript, and jQuery.",
    responsibilities: [
      "Developed and maintained client websites",
      "Implemented responsive designs using CSS and Bootstrap",
      "Fixed bugs and improved website performance",
      "Collaborated with designers to implement visual elements",
    ],
    current: false,
  },
]

export default function ExperiencePage() {
  return (
    <main className="container">
      <AnimatedSection className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-description">My professional journey and work experience in the field of web development.</p>
      </AnimatedSection>

      <AnimatedSection className="experience-list">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </AnimatedSection>
    </main>
  )
}

