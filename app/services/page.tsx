import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Services Overview Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Our <span className="text-primary">Services</span>.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-12">
            Comprehensive technology solutions designed to transform your business through intelligent automation,
            custom development, and strategic consulting.
          </p>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents Development */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden bg-card">
                <img src="/ai-agents-working.png" alt="AI Agents Development" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold">
                <span className="text-primary">AI-Agents</span> Development.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Supercharge Your Workflow with Cutting-Edge AI Agents.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our AI agents automate complex workflows, streamline operations, and deliver real-time insights. From
                intelligent chatbots to automated business processes, we build AI solutions that work 24/7 to enhance
                productivity and reduce costs.
              </p>
              <Link href="/services/ai-agents">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Core Service Components */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Intelligent Workflow Automation</h3>
              <p className="text-sm text-secondary-foreground/70">Automate repetitive tasks with AI-powered agents</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">24/7 Intelligent Support</h3>
              <p className="text-sm text-secondary-foreground/70">
                AI chatbots that provide instant customer assistance
              </p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Business AI Agent Integrations</h3>
              <p className="text-sm text-secondary-foreground/70">
                Connect AI agents to your existing business systems
              </p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Automated Test Function</h3>
              <p className="text-sm text-secondary-foreground/70">AI-powered quality assurance and testing</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                <span className="text-primary">Mobile Apps</span> Development.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Responsive, Intuitive Mobile Apps that Elevate User Experience.
              </p>
              <p className="mb-6 text-muted-foreground">
                We create native and cross-platform mobile applications that deliver exceptional user experiences. Our
                mobile solutions help businesses reach customers wherever they are, with seamless performance across iOS
                and Android devices.
              </p>
              <Link href="/services/mobile-app">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden bg-card">
                <img
                  src="/mobile-app-development.png"
                  alt="Mobile App Development"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">iOS & Android App Development</h3>
              <p className="text-sm text-secondary-foreground/70">Native apps for maximum performance</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">System & API Integrations</h3>
              <p className="text-sm text-secondary-foreground/70">Connect your mobile app to existing systems</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Performance & Scalability Optimization</h3>
              <p className="text-sm text-secondary-foreground/70">Built to handle growth and high traffic</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Testing & QA</h3>
              <p className="text-sm text-secondary-foreground/70">Comprehensive testing for quality assurance</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Web App Development */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden bg-card">
                <img src="/web-app-development.jpg" alt="Web App Development" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold">
                <span className="text-primary">Web Apps</span> Development.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Modern Web Applications Built for Performance and Scale.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our web applications combine cutting-edge technology with intuitive design to deliver powerful solutions
                that drive business growth. From custom dashboards to complex enterprise systems, we build web apps that
                scale with your needs.
              </p>
              <Link href="/services/web-app">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Custom Web Application Development</h3>
              <p className="text-sm text-secondary-foreground/70">Tailored solutions for your unique needs</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Secure & Scalable Architecture</h3>
              <p className="text-sm text-secondary-foreground/70">Enterprise-grade security and performance</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Integration & API Connectivity</h3>
              <p className="text-sm text-secondary-foreground/70">Seamless integration with third-party services</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Reactive Development & Automation</h3>
              <p className="text-sm text-secondary-foreground/70">Real-time updates and automated workflows</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Strategy Consulting */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                <span className="text-primary">Technology Strategy</span> Consulting.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Strategic Guidance to Modernize and Transform Your Business.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our technology consulting services help businesses navigate complex technology decisions, optimize
                operations, and build strategies for sustainable growth. We align technology investments with business
                objectives to maximize ROI.
              </p>
              <Link href="/services/technology-strategy">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden bg-card">
                <img
                  src="/professional-business-meeting.png"
                  alt="Technology Strategy Consulting"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Technology Roadmap Development</h3>
              <p className="text-sm text-secondary-foreground/70">Strategic planning for technology investments</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Automation & Efficiency Analysis</h3>
              <p className="text-sm text-secondary-foreground/70">Identify opportunities for improvement</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Business Architecture & Integration</h3>
              <p className="text-sm text-secondary-foreground/70">Design scalable technology ecosystems</p>
            </Card>

            <Card className="bg-secondary text-secondary-foreground p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">IT Operations Enhancement</h3>
              <p className="text-sm text-secondary-foreground/70">Optimize infrastructure and processes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-accent">Key</span> Benefits.
            </h2>
            <p className="text-lg">Why choose our services</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Driving growth by automating operations, accelerating development & future proofing business",
                icon: "🚀",
              },
              {
                title: "Automate repetitive tasks, accelerate development, and future-proof your technology stack",
                icon: "⚡",
              },
              { title: "Improve operational efficiency, reduce costs, and enhance customer satisfaction", icon: "💰" },
              { title: "Access to expert developers and strategic advisors", icon: "👥" },
              { title: "Rapid development and deployment cycles", icon: "⏱️" },
              { title: "Scalable solutions that grow with your business", icon: "📈" },
            ].map((benefit, i) => (
              <Card key={i} className="bg-white p-6 text-foreground">
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <p className="text-sm">{benefit.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Ready to <span className="text-primary">transform</span> your <span className="italic">business</span>?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Let's discuss how our services can help you achieve your business goals through intelligent automation and
          strategic technology solutions.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <Footer />
    </div>
  )
}
