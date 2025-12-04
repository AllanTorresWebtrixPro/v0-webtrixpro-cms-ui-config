import { NextResponse } from "next/server"
import type { ServiceDetail } from "@/types/service/service.types"
import { logger } from "@/lib/logger"

const servicesData: Record<string, ServiceDetail> = {
  "ai-agents": {
    id: "1",
    slug: "ai-agents",
    title: "AI Agents Development",
    subtitle: "Intelligent Automation That Works for You",
    description:
      "Deploy AI-powered agents that streamline operations, automate workflows, and make intelligent decisions at scale.",
    image: "/ai-agents-working.png",
    benefits: [
      {
        icon: "zap",
        title: "Intelligent Workflow Automation",
        description: "Automate complex business processes with AI agents that learn and adapt.",
      },
      {
        icon: "users",
        title: "Enhanced Customer Experience",
        description: "24/7 intelligent support that understands context and provides solutions.",
      },
      {
        icon: "trending-up",
        title: "Scalable Operations",
        description: "Handle increasing workloads without proportional cost increases.",
      },
      {
        icon: "shield",
        title: "Data-Driven Insights",
        description: "Make informed decisions with AI-powered analytics and recommendations.",
      },
    ],
    components: [
      {
        icon: "message-square",
        title: "Conversational AI Agents",
        description: "Natural language interfaces for customer service and internal operations.",
      },
      {
        icon: "repeat",
        title: "Process Automation Bots",
        description: "Automated workflows for repetitive tasks and data processing.",
      },
      {
        icon: "brain",
        title: "Decision Support Systems",
        description: "AI assistants that analyze data and provide actionable recommendations.",
      },
      {
        icon: "link",
        title: "System API Integrations",
        description: "Connect AI agents with your existing tools and platforms seamlessly.",
      },
    ],
    cta: {
      title: "Ready to deploy AI agents in your business?",
      buttonText: "Get Started",
    },
  },
  "mobile-apps": {
    id: "2",
    slug: "mobile-apps",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Mobile Solutions",
    description:
      "Build engaging mobile experiences for iOS and Android that users love and that drive real business results.",
    image: "/mobile-app-development.png",
    benefits: [
      {
        icon: "smartphone",
        title: "iOS & Android Development",
        description: "Native apps optimized for both platforms with shared codebases where appropriate.",
      },
      {
        icon: "layout",
        title: "Intuitive UI/UX Design",
        description: "User-centered designs that make complex features feel simple and natural.",
      },
      {
        icon: "database",
        title: "Backend Integration",
        description: "Seamless connection with APIs, databases, and third-party services.",
      },
      {
        icon: "gauge",
        title: "Performance & Scalability",
        description: "Fast, responsive apps that handle growth without compromising experience.",
      },
    ],
    components: [
      {
        icon: "code",
        title: "Native iOS & Android",
        description: "Platform-specific development for optimal performance and user experience.",
      },
      {
        icon: "git-branch",
        title: "Cross-Platform Solutions",
        description: "React Native and Flutter apps for faster development and deployment.",
      },
      {
        icon: "bell",
        title: "Push Notifications",
        description: "Engage users with timely, relevant notifications and updates.",
      },
      {
        icon: "lock",
        title: "Security & Compliance",
        description: "Enterprise-grade security and industry compliance standards.",
      },
    ],
    cta: {
      title: "Ready to transform your mobile experience?",
      buttonText: "Start Your Project",
    },
  },
  "web-apps": {
    id: "3",
    slug: "web-apps",
    title: "Web App Development",
    subtitle: "Scalable Web Applications That Drive Business",
    description:
      "Modern web applications built with cutting-edge technologies that power your operations and engage your users.",
    image: "/web-app-development.jpg",
    benefits: [
      {
        icon: "globe",
        title: "Custom Web Applications",
        description: "Tailored solutions built to your exact specifications and workflows.",
      },
      {
        icon: "layers",
        title: "Modern Tech Stack",
        description: "Built with React, Next.js, Node.js, and other leading technologies.",
      },
      {
        icon: "cloud",
        title: "Cloud-Native Architecture",
        description: "Scalable infrastructure that grows with your business needs.",
      },
      {
        icon: "monitor",
        title: "Responsive Design",
        description: "Perfect experiences across desktop, tablet, and mobile devices.",
      },
    ],
    components: [
      {
        icon: "layout",
        title: "Single Page Applications",
        description: "Fast, responsive SPAs with seamless user experiences.",
      },
      {
        icon: "server",
        title: "Progressive Web Apps",
        description: "App-like experiences that work offline and across all devices.",
      },
      {
        icon: "database",
        title: "API Development",
        description: "RESTful and GraphQL APIs for flexible data integration.",
      },
      {
        icon: "users",
        title: "Admin Dashboards",
        description: "Powerful management interfaces for data and user administration.",
      },
    ],
    cta: {
      title: "Ready to modernize your web operations?",
      buttonText: "Discuss Your Project",
    },
  },
  "technology-strategy": {
    id: "4",
    slug: "technology-strategy",
    title: "Technology Strategy Consulting",
    subtitle: "Strategic Technology Guidance",
    description:
      "Expert consulting to help you navigate technology decisions, modernize operations, and maximize ROI on your tech investments.",
    image: "/business-team-collaboration.png",
    benefits: [
      {
        icon: "compass",
        title: "Technology Roadmapping",
        description: "Strategic plans that align technology investments with business goals.",
      },
      {
        icon: "trending-up",
        title: "Digital Transformation",
        description: "Guide your organization through successful digital transformation.",
      },
      {
        icon: "search",
        title: "Technology Audits",
        description: "Comprehensive assessments of your current technology landscape.",
      },
      {
        icon: "target",
        title: "Automation & Efficiency Analysis",
        description: "Identify opportunities to streamline operations and reduce costs.",
      },
    ],
    components: [
      {
        icon: "file-text",
        title: "Technology Roadmap Development",
        description: "Multi-year strategic plans for technology evolution.",
      },
      {
        icon: "bar-chart",
        title: "Business Architecture & Integration",
        description: "Design systems that work together seamlessly.",
      },
      {
        icon: "cpu",
        title: "DevOps Architecture & Integration",
        description: "Optimize development and deployment processes.",
      },
      {
        icon: "shield-check",
        title: "Security & Scalability Architecture",
        description: "Build secure, scalable foundations for growth.",
      },
    ],
    cta: {
      title: "Ready to build a smarter technology strategy?",
      buttonText: "Schedule Consultation",
    },
  },
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    logger.info("API: Fetching service detail", { slug })

    const service = servicesData[slug]

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    logger.error("API: Error fetching service detail", { error })
    return NextResponse.json({ error: "Failed to fetch service" }, { status: 500 })
  }
}
