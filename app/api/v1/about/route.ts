import { NextResponse } from "next/server"
import type { AboutData } from "@/types/about/about.types"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("API: Fetching about data")

    const data: AboutData = {
      title: "About WebtrixPro",
      subtitle: "Simplifying Technology. Amplifying Business.",
      description:
        "We're a boutique AI-powered software development and technology consulting agency dedicated to helping businesses work smarter. For more than two decades, our team of expert engineers has partnered with forward-thinking organizations to eliminate inefficiencies, automate operations, and unlock sustainable growth.",
      stats: [
        { value: "20+", label: "Years of Experience", color: "green" },
        { value: "200+", label: "Happy Customers", color: "yellow" },
        { value: "100%", label: "Client Satisfaction", color: "blue" },
        { value: "50+", label: "Expert Developers", color: "gray" },
      ],
      story: {
        title: "Our Story",
        content:
          "Founded in 2004, WebtrixPro has grown into a boutique technology partner with two decades of experience in AI-powered automation, custom software development, and strategic technology consulting. Our expertise spans mobile app development, web application development, and intelligent automation that helps businesses work smarter. Today, we combine two decades of industry knowledge with bleeding-edge innovation to eliminate inefficiencies, modernize operations, and create scalable digital solutions that drive real growth.",
        videoUrl: "https://www.youtube.com/embed/placeholder",
      },
      leadership: [
        {
          id: "1",
          name: "Assaf Shami",
          role: "Founder & CEO",
          bio: "Technology visionary with over 20 years of experience leading digital transformation initiatives.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: "2",
          name: "Joe Kaire",
          role: "CTO",
          bio: "Expert in AI and machine learning with a passion for building intelligent systems.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: "3",
          name: "Allan Torress",
          role: "Full Stack Lead Engineer",
          bio: "Full-stack architect specializing in scalable web and mobile applications.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: "4",
          name: "Yochai Kariv",
          role: "Business Development Executive",
          bio: "Strategic business leader focused on client success and growth.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: "5",
          name: "Michael Gokhler",
          role: "Head of Digital Transformation",
          bio: "Change management expert helping organizations adopt new technologies.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: "6",
          name: "Eugene Pogrensky",
          role: "Project Manager",
          bio: "Experienced project leader ensuring on-time, on-budget delivery.",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
      visionMission: {
        vision: {
          title: "Our Vision",
          description:
            "To redefine how businesses operate by making intelligent automation and cutting-edge technology accessible to every organization, empowering them to scale sustainably, focus on meaningful work, and lead with innovation in their industries.",
          icon: "eye",
        },
        mission: {
          title: "Our Mission",
          description:
            "Our mission is to help businesses save time, reduce inefficiencies, and drive growth through AI-powered automation, custom software, and strategic consulting.",
          icon: "target",
        },
      },
    }

    return NextResponse.json(data)
  } catch (error) {
    logger.error("API: Error fetching about data", { error })
    return NextResponse.json({ error: "Failed to fetch about data" }, { status: 500 })
  }
}
