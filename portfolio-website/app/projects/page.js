import ProjectCard from "@/components/project-card"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Projects | John Doe",
  description:
    "Explore the projects built by John Doe, showcasing skills in React, Next.js, and modern web development.",
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Prisma", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "Firebase", "CSS", "Redux"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances, expenses, and investments with data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "Chart.js", "Supabase", "CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social media platform with user profiles, posts, comments, and real-time notifications.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Weather Application",
    description: "A weather application with location-based forecasts, historical data, and interactive maps.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "OpenWeather API", "Leaflet", "CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "A platform for sharing and discovering recipes with search, filtering, and user collections.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "MongoDB", "CSS", "NextAuth.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function ProjectsPage() {
  return (
    <main className="container">
      <AnimatedSection className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-description">
          A collection of projects I've built, showcasing my skills and experience in web development.
        </p>
      </AnimatedSection>

      <AnimatedSection className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatedSection>
    </main>
  )
}

