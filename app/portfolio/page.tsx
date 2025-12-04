import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

const portfolioProjects = [
  {
    title: "Shallow Waters",
    category: "E-commerce Platform",
    description: "A comprehensive e-commerce platform with custom inventory management and real-time analytics.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Hollywood Church",
    category: "Church Management System",
    description: "Complete church management solution with member portal, donation system, and event scheduling.",
    image: "/church-management-dashboard.png",
    tags: ["React", "Firebase", "Stripe", "Cloud Functions"],
  },
  {
    title: "Nicholas Weins",
    category: "Portfolio Website",
    description: "Professional portfolio website showcasing photography and videography work with custom galleries.",
    image: "/creative-portfolio-website.png",
    tags: ["Next.js", "Tailwind", "Vercel", "CMS"],
  },
  {
    title: "Our Community AIDS Meeting Place",
    category: "Community Platform",
    description: "Community engagement platform with resource directories, event management, and support forums.",
    image: "/community-platform-interface.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "FindOut",
    category: "Mobile App",
    description: "iOS and Android app for local business discovery with map integration and real-time reviews.",
    image: "/mobile-app-interface-local-discovery.jpg",
    tags: ["React Native", "Expo", "Google Maps", "Firebase"],
  },
  {
    title: "Hanover Winds",
    category: "Real Estate Platform",
    description: "Property management platform with virtual tours, tenant portals, and automated workflows.",
    image: "/real-estate-property-website.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
  },
  {
    title: "Emorice",
    category: "AI-Powered Analytics",
    description: "Business intelligence dashboard with AI-powered insights and predictive analytics.",
    image: "/analytics-dashboard-ai.jpg",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
  },
  {
    title: "Shopping4Good",
    category: "Charity E-commerce",
    description:
      "E-commerce platform connecting shoppers with charities, featuring donation tracking and impact reports.",
    image: "/charity-shopping-platform.jpg",
    tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
  },
  {
    title: "370 Rent A Car",
    category: "Car Rental System",
    description: "Complete car rental management system with booking, fleet management, and payment processing.",
    image: "/car-rental-booking-system.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Portfolio<span className="text-primary">.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            High-quality digital <span className="text-accent font-semibold">solutions</span> trusted by companies{" "}
            <span className="text-accent font-semibold">worldwide</span>.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, i) => (
            <Card key={i} className="group overflow-hidden border hover:border-primary transition-all">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm text-primary font-semibold">{project.category}</div>
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full text-primary hover:text-primary hover:bg-primary/10">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Case Study Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Featured <span className="text-primary">Case Study</span>.
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="h-full min-h-[300px] bg-secondary">
                  <img src="/website-mockup-professional.jpg" alt="Featured Project" className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    Featured Project
                  </div>
                  <h3 className="mb-4 text-3xl font-bold">Project Overview</h3>
                  <div className="mb-6 space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">The Challenge</h4>
                      <p className="text-sm">
                        Our client needed a scalable platform to manage thousands of daily transactions while
                        maintaining performance and security.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">The Solution</h4>
                      <p className="text-sm">
                        We developed a custom cloud-based solution with microservices architecture, automated scaling,
                        and advanced security features.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">The Impact</h4>
                      <p className="text-sm">
                        300% increase in transaction capacity, 50% reduction in operational costs, and 99.9% uptime
                        achieved.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Download Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold">
            Tech Stack & <span className="text-primary">Integration</span>.
          </h2>
          <p className="text-muted-foreground">We work with cutting-edge technologies to deliver exceptional results</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Firebase",
            "Stripe",
          ].map((tech) => (
            <Card
              key={tech}
              className="flex items-center justify-center p-6 text-center hover:border-primary transition-colors"
            >
              <span className="font-semibold text-foreground">{tech}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to <span className="italic">Start Your Project</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Let's collaborate to bring your vision to life with our proven expertise and innovative solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
