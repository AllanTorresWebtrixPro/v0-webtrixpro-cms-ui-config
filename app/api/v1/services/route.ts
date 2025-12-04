import { NextResponse } from "next/server"
import type { Service } from "@/types/service/service.types"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("API: Fetching services list")

    const services: Service[] = [
      {
        id: "1",
        slug: "ai-agents",
        title: "AI Agents Development",
        description:
          "Transform your operations with intelligent AI agents capable of automating complex tasks, making decisions, and learning from interactions.",
        icon: "bot",
        image: "/ai-agents-working.png",
      },
      {
        id: "2",
        slug: "mobile-apps",
        title: "Mobile App Development",
        description: "Custom mobile solutions for iOS and Android that engage users and drive business growth.",
        icon: "smartphone",
        image: "/mobile-app-development.png",
      },
      {
        id: "3",
        slug: "web-apps",
        title: "Web App Development",
        description: "Scalable web applications built with modern technologies that power your business operations.",
        icon: "globe",
        image: "/web-app-development.jpg",
      },
      {
        id: "4",
        slug: "technology-strategy",
        title: "Technology Strategy Consulting",
        description: "Expert guidance to align your technology investments with business goals and maximize ROI.",
        icon: "lightbulb",
        image: "/business-team-collaboration.png",
      },
    ]

    return NextResponse.json(services)
  } catch (error) {
    logger.error("API: Error fetching services", { error })
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
  }
}
