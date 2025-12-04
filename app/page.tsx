import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
          Empowering businesses to{" "}
          <span className="relative">
            <span className="relative z-10 bg-accent px-2 text-accent-foreground">work smarter</span>
          </span>
          , not harder.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          We help businesses work smarter through AI-powered automation, custom software, and strategic technology
          consulting. From intelligent agents to bespoke software, we deliver real, measurable, and practical growth
          with less upfront dollars and achieve more with less.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* What We Do Section */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              What We <span className="text-primary">Do</span>.
            </h2>
            <p className="text-secondary-foreground/80">
              Turning Business Challenges into Automated AI Automation Solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Service Card 1 */}
            <Card className="group relative overflow-hidden bg-secondary-foreground/5 border-secondary-foreground/10 p-6 hover:border-primary transition-all">
              <div className="mb-4 h-40 overflow-hidden rounded-lg bg-secondary-foreground/10">
                <img
                  src="/ai-robot-assistant.png"
                  alt="Technology Strategy Consulting"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">01. Technology Strategy Consulting.</h3>
              <p className="mb-4 text-sm text-secondary-foreground/70">
                Aligning technology with your business goals by streamlining operations, reducing costs, and fostering
                innovation through tailored strategic planning.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Service Card 2 */}
            <Card className="group relative overflow-hidden bg-secondary-foreground/5 border-secondary-foreground/10 p-6 hover:border-primary transition-all">
              <div className="mb-4 h-40 overflow-hidden rounded-lg bg-secondary-foreground/10">
                <img
                  src="/ai-agents-working.png"
                  alt="AI Agents Development"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">02. AI-Agents Development.</h3>
              <p className="mb-4 text-sm text-secondary-foreground/70">
                Enhancing our platform with intelligent bots, virtual assistants, and smart automation that boost
                efficiency and drive productivity.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Service Card 3 */}
            <Card className="group relative overflow-hidden bg-secondary-foreground/5 border-secondary-foreground/10 p-6 hover:border-primary transition-all">
              <div className="mb-4 h-40 overflow-hidden rounded-lg bg-secondary-foreground/10">
                <img
                  src="/mobile-app-development.png"
                  alt="Mobile Apps Development"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">03. Mobile Apps Development.</h3>
              <p className="mb-4 text-sm text-secondary-foreground/70">
                Empowering businesses through innovative native and cross-platform mobile apps that deliver exceptional
                user experiences.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Service Card 4 */}
            <Card className="group relative overflow-hidden bg-secondary-foreground/5 border-secondary-foreground/10 p-6 hover:border-primary transition-all">
              <div className="mb-4 h-40 overflow-hidden rounded-lg bg-secondary-foreground/10">
                <img
                  src="/web-app-development.jpg"
                  alt="Web Apps Development"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">04. Web Apps Development.</h3>
              <p className="mb-4 text-sm text-secondary-foreground/70">
                Empowering businesses to modernize applications and elevate efficiency with real-time insights and
                seamless accessibility.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
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

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">See More Here</Button>
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
              <Card className="border-l-4 border-l-primary bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Scalability</h3>
                    <p className="text-sm text-muted-foreground">
                      Scale operations efficiently without proportional cost increases
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-l-primary bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Improve Productivity</h3>
                    <p className="text-sm text-muted-foreground">
                      Automate repetitive tasks and focus on strategic growth
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-l-primary bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Cost Reduction</h3>
                    <p className="text-sm text-muted-foreground">
                      Minimize operational costs through intelligent automation
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-l-primary bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Time Savings</h3>
                    <p className="text-sm text-muted-foreground">
                      Free up valuable time for innovation and strategic planning
                    </p>
                  </div>
                </div>
              </Card>
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
              Honored by industry-leading platforms for innovation, performance, and client satisfaction. Intelligence
              shaping the future.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline">2020</Button>
              <Button variant="outline">2023</Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">See Latest</Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex h-24 w-32 items-center justify-center rounded-lg bg-card">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold">CLUTCH</div>
                  <div className="text-xs text-muted-foreground">2024</div>
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
            <p className="mb-4 text-lg font-semibold text-primary">Combining Technology. Amplifying Business.</p>
            <p className="mb-6 text-muted-foreground">
              We're a boutique AI-powered software and consulting agency specializing in custom software development,
              including innovative web and mobile applications, AI agents, and strategic technology consulting. Based in
              Florida, we empower clients nationwide to work smarter and deliver measurable results.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
          </div>

          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
              <img src="/professional-business-meeting.png" alt="WebtrixPro team" className="h-full w-full object-cover" />
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
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                See Our Reviews on Clutch
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                See All Testimonials
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Douglas Larsen", company: "Shallow Waters", logo: "SW" },
              { name: "Barton Taylor", company: "Hollywood Children Center", logo: "HC" },
              { name: "Lior Barhai", company: "Emorice", logo: "EM" },
              { name: "Lauren McCulloch", company: "Plumber Group/Powest", logo: "PG" },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white p-6 text-foreground">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-primary text-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Their relationship with WebtrixPro goes back 15 years. We couldn't develop a better website without
                  them. They are professional and responsive..."
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
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
              deliver real, measurable results. Our clients trust us to deliver transparent, we help businesses grow
              faster and with greater efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary p-6 text-center text-primary-foreground">
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm">Years of Experience</div>
            </Card>
            <Card className="bg-accent p-6 text-center text-accent-foreground">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-sm">Satisfied Customer</div>
            </Card>
            <Card className="bg-primary p-6 text-center text-primary-foreground">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </Card>
            <Card className="bg-secondary p-6 text-center text-secondary-foreground">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Expert Developers</div>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">
              How <span className="text-primary">We Do It</span>.
            </h2>
            <p className="mb-12 text-lg">
              Powered by Strategy. <span className="text-accent font-semibold">Delivered Through Process</span>.
            </p>
            <p className="mx-auto max-w-3xl text-muted-foreground mb-12">
              The DNA of WebtrixPro is proven 6-step framework that revolutionizes strategic planning, agile
              development, intelligent technology solutions, and seamless deployment — all designed to give you
              exceptional results.
            </p>

            <div className="relative mx-auto max-w-2xl">
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Center Circle */}
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <span className="text-xl font-bold">Process</span>
                  </div>

                  {/* Surrounding Circles - positioned around the center */}
                  {[
                    { label: "Discovery", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-24" },
                    { label: "Planning", position: "top-8 right-0 translate-x-24" },
                    { label: "Design", position: "bottom-8 right-0 translate-x-24" },
                    { label: "Development", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-24" },
                    { label: "Testing", position: "bottom-8 left-0 -translate-x-24" },
                    { label: "Deployment", position: "top-8 left-0 -translate-x-24" },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={`absolute flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold ${step.position}`}
                    >
                      {step.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Turn Your <span className="italic">Vision into Reality</span>?
          </h2>
          <p className="mb-8 text-lg">
            Let's start mapping your next digital project with clarity, speed, and measurable impact.
          </p>
          <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90">
            Start Your Project Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
