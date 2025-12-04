import { NextResponse } from "next/server"
import type { Project } from "@/types/portfolio/portfolio.types"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("API: Fetching portfolio projects")

    const projects: Project[] = [
      {
        id: "1",
        slug: "shallow-waters",
        title: "Shallow Waters",
        category: "E-commerce",
        description: "Modern e-commerce platform with AI-powered recommendations and inventory management.",
        image: "/modern-ecommerce-website.png",
        technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        id: "2",
        slug: "church-management",
        title: "Nicholas Water Church",
        category: "CRM",
        description: "Comprehensive church management system with member portal and donation tracking.",
        image: "/church-management-dashboard.png",
        technologies: ["React", "TypeScript", "Express", "MongoDB"],
      },
      {
        id: "3",
        slug: "orange-brook",
        title: "Orange Brook Golf & Country Club",
        category: "Web Portal",
        description: "Member portal and tee time booking system for private golf club.",
        image: "/creative-portfolio-website.png",
        technologies: ["Vue.js", "Laravel", "MySQL"],
      },
      {
        id: "4",
        slug: "community-app",
        title: "Our Community App Meeting Place",
        category: "Mobile App",
        description: "Community engagement platform with event management and social features.",
        image: "/community-platform-interface.png",
        technologies: ["React Native", "Firebase", "Node.js"],
      },
      {
        id: "5",
        slug: "findmylocal",
        title: "FindMyLocal",
        category: "Mobile App",
        description: "Location-based discovery app connecting users with local businesses.",
        image: "/mobile-app-interface-local-discovery.jpg",
        technologies: ["Flutter", "Google Maps API", "Firebase"],
      },
      {
        id: "6",
        slug: "homeace-works",
        title: "HomeAce Works",
        category: "Real Estate",
        description: "Property management and real estate listing platform with virtual tours.",
        image: "/real-estate-property-website.jpg",
        technologies: ["Next.js", "Prisma", "PostgreSQL"],
      },
      {
        id: "7",
        slug: "i70-rent-a-car",
        title: "I70 Rent A Car",
        category: "Booking System",
        description: "Vehicle rental platform with real-time availability and booking management.",
        image: "/analytics-dashboard-ai.jpg",
        technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      },
      {
        id: "8",
        slug: "give-proceeds",
        title: "Give Proceeds",
        category: "E-commerce",
        description: "Charitable shopping platform connecting purchases with nonprofit donations.",
        image: "/charity-shopping-platform.jpg",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
      },
      {
        id: "9",
        slug: "enviories",
        title: "Enviories",
        category: "AI Platform",
        description: "AI-powered environmental data analytics and reporting platform.",
        image: "/analytics-dashboard-ai.jpg",
        technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
      },
    ]

    return NextResponse.json(projects)
  } catch (error) {
    logger.error("API: Error fetching portfolio", { error })
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 })
  }
}
