"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Target, Eye, ArrowRight } from "lucide-react"
import { useAbout } from "@/hooks/use-about"
import { LoadingSpinner } from "@/components/shared/LoadingSpinner"
import { ErrorState } from "@/components/shared/ErrorState"

export default function AboutPage() {
  const { data: about, isLoading, error, refetch } = useAbout()

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <LoadingSpinner size="lg" />
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !about) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <ErrorState
            title="Failed to load about page"
            message="We couldn't load the about page data. Please try again."
            onRetry={() => refetch()}
          />
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold">
              {about.title.split(" ")[0]} <span className="text-primary">{about.title.split(" ")[1]}</span>.
            </h1>
            <p className="mb-6 text-2xl font-semibold">{about.subtitle}</p>
            <p className="mb-8 text-muted-foreground leading-relaxed">{about.description}</p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center ${
                    stat.color === "green"
                      ? "bg-primary text-primary-foreground"
                      : stat.color === "yellow"
                        ? "bg-accent text-accent-foreground"
                        : stat.color === "blue"
                          ? "bg-blue-600 text-white"
                          : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">
                {about.story.title.split(" ")[0]}{" "}
                <span className="text-primary">{about.story.title.split(" ")[1]}</span>.
              </h2>
              <p className="mb-8 text-secondary-foreground/80 leading-relaxed whitespace-pre-line">
                {about.story.content}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src="/professional-business-meeting.png"
                  alt="WebtrixPro team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button size="icon" className="h-20 w-20 rounded-full bg-primary hover:bg-primary/90">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            The <span className="text-primary">Leadership Team</span>.
          </h2>
          <p className="text-muted-foreground">Meet the experts driving innovation and excellence</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {about.leadership.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:border-primary transition-colors">
              <div className="h-64 bg-muted">
                <img
                  src={member.image || "/placeholder.svg?height=256&width=400"}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-3 text-sm text-primary font-semibold">{member.role}</p>
                <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Our Vision */}
            <Card className="bg-primary p-8 text-primary-foreground">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{about.visionMission.vision.title}</h3>
              <p className="leading-relaxed">{about.visionMission.vision.description}</p>
            </Card>

            {/* Our Mission */}
            <Card className="bg-primary p-8 text-primary-foreground">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{about.visionMission.mission.title}</h3>
              <p className="leading-relaxed">{about.visionMission.mission.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to work <span className="italic">smarter</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Partner with WebtrixPro and transform your business through intelligent technology solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <a href="/portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
