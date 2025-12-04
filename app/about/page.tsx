import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Target, Compass, ArrowRight } from "lucide-react"

const leadershipTeam = [
  {
    name: "Assaf Shami",
    role: "Founder & CEO",
    bio: "Visionary leader with 20+ years of experience in software development and business strategy.",
    image: "/placeholder.svg?key=assaf",
  },
  {
    name: "Joe Kaire",
    role: "CTO",
    bio: "Technology expert specializing in AI, cloud architecture, and scalable solutions.",
    image: "/placeholder.svg?key=joe",
  },
  {
    name: "Allan Torress",
    role: "VP, Global Lead Engineer",
    bio: "Engineering leader driving technical excellence and innovation across all projects.",
    image: "/placeholder.svg?key=allan",
  },
  {
    name: "Yochai Kariv",
    role: "Business Development Executive",
    bio: "Strategic growth expert focused on building lasting client relationships.",
    image: "/placeholder.svg?key=yochai",
  },
  {
    name: "Michael Gokhler",
    role: "Head Of Digital Transformation",
    bio: "Digital transformation specialist helping businesses modernize their operations.",
    image: "/placeholder.svg?key=michael",
  },
  {
    name: "Eugene Pogrensky",
    role: "Project Manager",
    bio: "Experienced PM ensuring seamless project delivery and client satisfaction.",
    image: "/placeholder.svg?key=eugene",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold">
              About <span className="text-primary">WebtrixPro</span>.
            </h1>
            <p className="mb-6 text-2xl font-semibold">
              Simplifying Technology. <span className="text-accent">Amplifying Business</span>.
            </p>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We're a boutique AI-powered software development and technology consulting agency dedicated to helping
              businesses work smarter. For more than two decades, we've specialized in custom software development, AI
              agents, mobile and web applications, and strategic technology consulting. From Hollywood, Florida, we
              serve clients nationwide, delivering measurable results through intelligent automation, bespoke
              development, and strategic consulting that gives you competitive edge without breaking the bank.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              By combining strategic innovation, and automation, we amplify complexity, accelerate performance, and free
              our clients to focus on what truly matters. We don't just deliver technology; we deliver clarity,
              efficiency, and a smarter way of work.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="bg-primary p-6 text-center text-primary-foreground">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">Years of Experience</div>
              </Card>
              <Card className="bg-accent p-6 text-center text-accent-foreground">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm">Satisfied Customer</div>
              </Card>
              <Card className="bg-primary p-6 text-center text-primary-foreground">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </Card>
              <Card className="bg-secondary p-6 text-center text-secondary-foreground">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm">Expert Developers</div>
              </Card>
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
                Our <span className="text-primary">Story</span>.
              </h2>
              <p className="mb-6 text-secondary-foreground/80 leading-relaxed">
                Founded in 2004, WebtrixPro has grown into a boutique technology partner for businesses nationwide. We
                started with a simple vision: to make technology work for businesses, not the other way around.
              </p>
              <p className="mb-6 text-secondary-foreground/80 leading-relaxed">
                Over two decades later, we combine AI-powered automation, custom software development, and strategic
                technology consulting to help businesses streamline operations, modernize their processes, and drive
                real growth — all while minimizing inefficiencies and delivering clear, measurable outcomes.
              </p>
              <p className="mb-8 text-secondary-foreground/80 leading-relaxed">
                Our mission is to help businesses operate smarter, not harder, through AI-powered automation, custom
                software, and strategic consulting that drives meaningful, sustainable results.
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
          {leadershipTeam.map((member, i) => (
            <Card key={i} className="overflow-hidden hover:border-primary transition-colors">
              <div className="h-64 bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
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
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed">
                To redefine how businesses operate by making intelligent technology accessible to every organization,
                empowering them to scale with confidence, innovate at speed, and leave manual work behind.
              </p>
            </Card>

            {/* Our Mission */}
            <Card className="bg-primary p-8 text-primary-foreground">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed">
                Our mission is to help businesses save time, reduce inefficiencies, and drive growth through AI-powered
                automation, custom software, and strategic consulting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Why Choose <span className="text-primary">Us</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Where Experience meets <span className="text-accent font-semibold">intelligent innovation</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <div className="mb-4 text-4xl">🎯</div>
            <h3 className="mb-3 text-xl font-bold">20+ Years of Expertise</h3>
            <p className="text-sm text-muted-foreground">
              Two decades of proven success delivering technology solutions that drive real business results.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 text-4xl">🤖</div>
            <h3 className="mb-3 text-xl font-bold">AI-Powered Solutions</h3>
            <p className="text-sm text-muted-foreground">
              Cutting-edge AI and automation technologies that streamline operations and boost productivity.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 text-4xl">💼</div>
            <h3 className="mb-3 text-xl font-bold">Strategic Partnership</h3>
            <p className="text-sm text-muted-foreground">
              We become an extension of your team, invested in your long-term success and growth.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-3 text-xl font-bold">Rapid Development</h3>
            <p className="text-sm text-muted-foreground">
              Agile methodologies and efficient processes ensure fast time-to-market without compromising quality.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="mb-3 text-xl font-bold">Cost-Effective</h3>
            <p className="text-sm text-muted-foreground">
              Deliver powerful solutions that maximize ROI while minimizing upfront investment and ongoing costs.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 text-4xl">🏆</div>
            <h3 className="mb-3 text-xl font-bold">Proven Track Record</h3>
            <p className="text-sm text-muted-foreground">
              200+ satisfied clients and 100% customer satisfaction rate speak to our commitment to excellence.
            </p>
          </Card>
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
            <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
