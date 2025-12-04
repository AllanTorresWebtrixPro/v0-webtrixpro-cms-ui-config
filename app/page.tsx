"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Play } from "lucide-react"
import { useHomepage } from "@/hooks/use-homepage"
import { LoadingSpinner } from "@/components/shared/LoadingSpinner"
import { ErrorState } from "@/components/shared/ErrorState"

export default function HomePage() {
  const { data: homepage, isLoading, error, refetch } = useHomepage()

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

  if (error || !homepage) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <ErrorState
            title="Failed to load homepage"
            message="We couldn't load the homepage data. Please try again."
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
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
          {homepage.hero.title}{" "}
          <span className="relative">
            <span className="relative z-10 bg-accent px-2 text-accent-foreground">{homepage.hero.highlightedText}</span>
          </span>
          {homepage.hero.subtitle}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">{homepage.hero.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href={homepage.hero.ctaButtons.primary.href}>
              {homepage.hero.ctaButtons.primary.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={homepage.hero.ctaButtons.secondary.href}>{homepage.hero.ctaButtons.secondary.text}</a>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              What We <span className="text-primary">Do</span>.
            </h2>
            <p className="text-secondary-foreground/80">Turning Business Challenges into Automated AI Solutions</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homepage.services.map((service, index) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-secondary-foreground/5 border-secondary-foreground/10 p-6 hover:border-primary transition-all"
              >
                <div className="mb-4 h-40 overflow-hidden rounded-lg bg-secondary-foreground/10">
                  <img
                    src={`/.jpg?height=160&width=280&query=${service.title}`}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {String(index + 1).padStart(2, "0")}. {service.title}.
                </h3>
                <p className="mb-4 text-sm text-secondary-foreground/70">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href={`/services/${service.slug}`}>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Our <span className="text-primary">Solution</span>.
            </h2>
            <p className="mb-6 text-muted-foreground">
              We build intelligent systems that simplify workflows and amplify growth.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <img
                  src="/business-team-collaboration.png"
                  alt="Team collaboration"
                  className="h-64 w-full rounded-lg object-cover"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="/services">See More Here</a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-bold">
              How <span className="text-primary">You Benefit</span>.
            </h2>
            <p className="mb-8 text-muted-foreground">
              Driving growth by automating operations, accelerating development, and empowering your business.
            </p>

            <div className="space-y-4">
              {homepage.benefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Recognized for <span className="text-primary">Excellence</span>,<br />
              Trusted for <span className="text-primary">Results</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Honored by industry-leading platforms for innovation, performance, and client satisfaction.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {homepage.awards.map((award) => (
              <div key={award.id} className="flex h-24 w-32 items-center justify-center rounded-lg bg-card">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold">{award.issuer}</div>
                  <div className="text-xs text-muted-foreground">{award.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Who We <span className="text-primary">Are</span>.
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">{homepage.story.title}</p>
            <p className="mb-6 text-muted-foreground">{homepage.story.description}</p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/about">Read More</a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src="/professional-business-meeting.png"
                alt="WebtrixPro team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90">
                  <Play className="h-6 w-6 text-primary-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              What <span className="text-accent">Our Client Say</span>.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                See Our Reviews on Clutch
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <a href="/testimonials">See All Testimonials</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homepage.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white p-6 text-foreground">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-primary text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Why <span className="text-primary">Us</span>.
            </h2>
            <p className="mb-8 text-lg">
              Where Experience meets <span className="text-accent font-semibold">intelligent innovation</span>.
            </p>
            <p className="mb-6 text-muted-foreground">
              With over 20 years of expertise, we combine strategic consulting and AI-powered software development to
              deliver real, measurable results. Our clients trust us to deliver transparent, quality solutions that help
              businesses grow faster and with greater efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {homepage.stats.map((stat, index) => (
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
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">
              How <span className="text-primary">We Do It</span>.
            </h2>
            <p className="mb-12 text-lg">
              Powered by Strategy. <span className="text-accent font-semibold">Delivered Through Process</span>.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {homepage.process.slice(0, 7).map((step, index) => (
                <Card key={step.id} className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">{homepage.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">{homepage.cta.subtitle}</p>
          <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90" asChild>
            <a href="/contact">
              {homepage.cta.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
