import { NextResponse } from "next/server"
import type { TestimonialData } from "@/types/testimonial/testimonial.types"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("API: Fetching testimonials")

    const data: TestimonialData = {
      featured: [
        {
          id: "1",
          name: "Douglas Larsen",
          company: "Shallow Waters",
          role: "CEO",
          content:
            "Our relationship with WebtrixPro goes back 15 years. We initially came to them for web services, website software, and from there, we added more websites, and then even a lot more beyond basic websites.",
          rating: 5,
          date: "2024-01-15",
        },
        {
          id: "2",
          name: "Barton Taylor",
          company: "Hollywood Children Center",
          role: "Director",
          content:
            "Working with WebtrixPro to develop our custom software Playbook was a game-changer for our business. As a company in the auto collision industry, we needed a new roadmap to organize and streamline our workflows.",
          rating: 5,
          date: "2024-01-10",
        },
      ],
      all: [
        {
          id: "1",
          name: "Douglas Larsen",
          company: "Shallow Waters",
          role: "CEO",
          content:
            "Our relationship with WebtrixPro goes back 15 years. We initially came to them for web services, website software, and from there, we added more websites, and then even a lot more beyond basic websites.",
          rating: 5,
          date: "2024-01-15",
        },
        {
          id: "2",
          name: "Barton Taylor",
          company: "Hollywood Children Center",
          role: "Director",
          content:
            "Working with WebtrixPro to develop our custom software Playbook was a game-changer for our business. As a company in the auto collision industry, we needed a new roadmap to organize and streamline our workflows.",
          rating: 5,
          date: "2024-01-10",
        },
        {
          id: "3",
          name: "Lior Barhai",
          company: "Emorica",
          role: "Founder & CEO",
          content:
            "It was an easy decision for us to choose WebtrixPro to develop our food truck portal. They came highly recommended by another entrepreneur, and they provided us with excellent service.",
          rating: 5,
          date: "2023-12-20",
        },
        {
          id: "4",
          name: "Lauren McCulloch",
          company: "Flourish GlobalPowereed",
          role: "Founder",
          content:
            "WebtrixPro has been an informal partner with Luthuli at all our needs. They provide outstanding project management and use their tools and discipline for tracking all of our requests.",
          rating: 5,
          date: "2023-12-15",
        },
        {
          id: "5",
          name: "Santiago Seeber",
          company: "Nicholas Water",
          role: "Managing Member",
          content:
            "The main impact in terms of dollars WebtrixPro had on our business is through their work for our Admin and Classworks sites who are using the management system they developed for us.",
          rating: 5,
          date: "2023-12-10",
        },
      ],
      videoTestimonial: {
        name: "Santiago G Seeber",
        company: "Nicholas Waters",
        role: "Managing Member",
        videoUrl: "https://www.youtube.com/embed/placeholder",
        thumbnail: "/placeholder.svg?height=400&width=600",
      },
    }

    return NextResponse.json(data)
  } catch (error) {
    logger.error("API: Error fetching testimonials", { error })
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}
