import { NextResponse } from "next/server"
import type { HomepageData } from "@/types/homepage/homepage.types"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("API: Fetching homepage data")

    const data: HomepageData = {
      hero: {
        title: "Empowering businesses to",
        highlightedText: "work smarter",
        subtitle: ", not harder.",
        description:
          "We help businesses work smarter through AI-powered automation, intelligent systems, and strategic technology that drive real, measurable growth.",
        ctaButtons: {
          primary: { text: "Get Started", href: "/contact" },
          secondary: { text: "Book a Call", href: "/contact" },
        },
      },
      services: [
        {
          id: "1",
          slug: "ai-agents",
          icon: "bot",
          title: "AI Agents Development",
          description:
            "Transform your operations with intelligent AI agents capable of automating complex tasks, making decisions, and learning from interactions.",
        },
        {
          id: "2",
          slug: "mobile-apps",
          icon: "smartphone",
          title: "Mobile App Development",
          description:
            "Custom mobile solutions for iOS and Android that engage users and drive business growth with seamless experiences.",
        },
        {
          id: "3",
          slug: "web-apps",
          icon: "globe",
          title: "Web App Development",
          description:
            "Scalable web applications built with modern technologies that power your business operations efficiently.",
        },
        {
          id: "4",
          slug: "technology-strategy",
          icon: "lightbulb",
          title: "Technology Strategy Consulting",
          description: "Expert guidance to align your technology investments with business goals and maximize ROI.",
        },
      ],
      benefits: [
        {
          icon: "trending-up",
          title: "Driving Growth",
          description: "By automating repetitive tasks and accelerating decision-making.",
        },
        {
          icon: "target",
          title: "Improving Productivity",
          description: "Through intelligent systems that work smarter, not harder.",
        },
        {
          icon: "dollar-sign",
          title: "Reducing Costs",
          description: "By streamlining operations and eliminating inefficiencies.",
        },
        {
          icon: "clock",
          title: "Saving Time",
          description: "With automated workflows and intelligent process optimization.",
        },
      ],
      awards: [
        { id: "1", name: "Clutch Top Developer", issuer: "Clutch", year: 2024 },
        { id: "2", name: "Clutch Top Developer", issuer: "Clutch", year: 2023 },
        { id: "3", name: "Clutch Top Developer", issuer: "Clutch", year: 2022 },
        { id: "4", name: "Clutch Top Developer", issuer: "Clutch", year: 2021 },
        { id: "5", name: "Clutch Top Developer", issuer: "Clutch", year: 2020 },
      ],
      story: {
        title: "Who We Are",
        description:
          "Founded in 2004, WebtrixPro has grown into a boutique technology partner specializing in AI-powered automation, custom software development, and strategic technology solutions. Our 20 years of experience and commitment to innovation help businesses work smarter.",
        videoUrl: "https://www.youtube.com/embed/placeholder",
      },
      testimonials: [
        {
          id: "1",
          name: "Douglas Larsen",
          company: "Shallow Waters",
          role: "CEO",
          content:
            "Working with WebtrixPro over the past 15 years has been transformational for our business. Their intelligent systems and automation solutions have helped us scale efficiently.",
          rating: 5,
        },
        {
          id: "2",
          name: "Barton Taylor",
          company: "Hollywood Children Center",
          role: "Director",
          content:
            "The custom software solution WebtrixPro developed has revolutionized how we manage our center. Their attention to detail and ongoing support is exceptional.",
          rating: 5,
        },
      ],
      stats: [
        { value: "20+", label: "Years Experience", color: "green" },
        { value: "200+", label: "Happy Customers", color: "yellow" },
        { value: "100%", label: "Client Satisfaction", color: "blue" },
        { value: "50+", label: "Expert Developers", color: "gray" },
      ],
      process: [
        {
          id: "1",
          title: "Discovery",
          description: "We analyze your business challenges and identify automation opportunities.",
        },
        {
          id: "2",
          title: "Strategy",
          description: "We develop a comprehensive technology roadmap aligned with your goals.",
        },
        {
          id: "3",
          title: "Design",
          description: "We create intuitive user experiences and system architectures.",
        },
        {
          id: "4",
          title: "Development",
          description: "We build robust, scalable solutions using cutting-edge technologies.",
        },
        {
          id: "5",
          title: "Testing",
          description: "We ensure quality through rigorous testing and validation.",
        },
        {
          id: "6",
          title: "Deployment",
          description: "We launch your solution with comprehensive support and training.",
        },
        {
          id: "7",
          title: "Support",
          description: "We provide ongoing maintenance and continuous improvements.",
        },
      ],
      cta: {
        title: "Ready to Turn Your Vision into Reality?",
        subtitle: "Let's start mapping your next digital project with clarity, speed, and measurable impact.",
        buttonText: "Start Your Project Now",
      },
    }

    return NextResponse.json(data)
  } catch (error) {
    logger.error("API: Error fetching homepage data", { error })
    return NextResponse.json({ error: "Failed to fetch homepage data" }, { status: 500 })
  }
}
