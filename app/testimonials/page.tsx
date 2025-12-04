import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Play } from "lucide-react"

const testimonials = [
  {
    name: "Douglas Larsen",
    role: "CEO",
    company: "Shallow Waters",
    logo: "SW",
    color: "bg-blue-600",
    rating: 5,
    text: "Their relationship with WebtrixPro goes back 15 years. We couldn't develop a better website without them. We added three websites, and from there, we added two websites, which are the basis of our restaurant chain. They are professional and responsive, and they have been a pillar to our growth. We got approached every day by different people that said, 'we can help with website development, and they have been a great asset, and we are very interested in taking those relationships with WebtrixPro to the next level.' I would highly recommend them.",
  },
  {
    name: "Barton Taylor",
    role: "Director",
    company: "Hollywood Children Center",
    logo: "HC",
    color: "bg-red-600",
    rating: 5,
    text: "Working with WebtrixPro to develop our custom software flipbook was a game-changer for our business. As a company in the auto collision industry, we needed a new roadmap to improve and streamline our workflow, making our processes more efficient and cost-effective. WebtrixPro delivered exactly what we needed, creating a fully functional prototype that brought our vision to life. The website is simple to use from a UX standpoint, yet incredibly powerful under the hood. It included several wireframes and a fully functional prototype that was easy to use and has significantly increased efficiency, reduce errors, and improve customer satisfaction. We highly recommend WebtrixPro for any business looking to enhance their operations through technology.",
  },
  {
    name: "Lior Barhai",
    role: "Founder",
    company: "Emorice",
    logo: "EM",
    color: "bg-teal-600",
    rating: 5,
    text: "It was an easy decision for us to choose WebtrixPro to develop our cloud-based mobile app. Their team is excellent in technology. The communication was always seamless, and they kept us up-to-date throughout. They also provide our clients with a high-end portal, which provides real-time access to project information and deliverables. We are very happy with the progress of our mobile application project, you may have decided when you are working them for any web or mobile application project, I can highly recommend them.",
  },
  {
    name: "Lauren McCulloch",
    role: "Operations Manager",
    company: "Plumber Group/Powest",
    logo: "PG",
    color: "bg-purple-600",
    rating: 5,
    text: "WebtrixPro has been an integral partner with Luftest all of our requests. They provided outstanding project management and use tools such as Basecamp that streamline our collaboration. Their attention to detail and proactive communication ensured that we were always aligned on project goals. The platform they built for us has become a central hub for our operations, and we couldn't be happier with the results.",
  },
  {
    name: "Santiago Seeber",
    role: "CEO",
    company: "Nicholas Weins",
    logo: "NW",
    color: "bg-green-600",
    rating: 5,
    text: "The main impact in terms of dollars WebtrixPro had on our business was increasing the lead flow for our Admin and Salespeople who are using the shopping cart. WebtrixPro did an amazing job at understanding our business needs. They knew exactly what we wanted and translated that understanding into better and more efficient communications, and we are still better shape.",
  },
  {
    name: "Michael Wendrew",
    role: "Partner",
    company: "Pyrite Hills Business Network",
    logo: "PH",
    color: "bg-amber-600",
    rating: 5,
    text: "We chose WebtrixPro because of their professionalism, quality of work and customer service. Everything about how they work above and beyond to make sure we were happy with their work. The final project came out great, but I liked most the timely manner in which we were able to get in touch with them. I would highly recommend them.",
  },
  {
    name: "Jeniffer Viscarra",
    role: "Founder",
    company: "FindOut",
    logo: "FO",
    color: "bg-yellow-600",
    rating: 5,
    text: "I am extremely satisfied with the service and professionalism from WebtrixPro. I can attest that they are extremely detail-oriented and supportive during the entire process I had kept. It is a project where I kept completely out of my element. I always felt supported and in good hands. Most importantly, my end product has provided that I am very proud of it and look forward to display it to anyone I know.",
  },
  {
    name: "Dr. Elise Kramer Roumli",
    role: "Founder",
    company: "Second Harvest Food Bank",
    logo: "SH",
    color: "bg-cyan-600",
    rating: 5,
    text: "I have worked at many project management companies but decided WebtrixPro was one of the best because of their thoroughness. For a while, and even a lot of their work that I liked. They were very professional and responsive, and not one of their main tasks needed to be redone for quality.",
  },
  {
    name: "Lee Ferry",
    role: "CEO",
    company: "Hanover Winds",
    logo: "HW",
    color: "bg-indigo-600",
    rating: 5,
    text: "Honestly about WebtrixPro is the best software development company around since they have the entire web application development process, to deliver our very successful what is needed to stay on track and within budget. That shows excellent collaboration skills and makes working with them throughout the project and answered my questions we had.",
  },
  {
    name: "Dr. Graham Mouw",
    role: "Medical Spine Institute",
    company: "Medical Spine Institute",
    logo: "MS",
    color: "bg-pink-600",
    rating: 5,
    text: "I have been a supporter of WebtrixPro for many years. They helped set up my website and mobile apps. They are professional, prompt, and excellent in every way. Most importantly they are on your side to do things done in an efficient and expedited manner with top quality. I can't recommend them highly enough.",
  },
  {
    name: "Russell Feder",
    role: "CEO",
    company: "Shipping-Storm Capital",
    logo: "SS",
    color: "bg-rose-600",
    rating: 5,
    text: "Lots of small details added up to make this web platform and app possible. The team at WebtrixPro was always very attentive, kind, and always made time for anything we needed, even at my day. They are a very professional team and willing to do it to its full potential.",
  },
  {
    name: "Leigh Seidner",
    role: "Director",
    company: "Our Community App Meeting Place 1",
    logo: "OC",
    color: "bg-violet-600",
    rating: 5,
    text: "Outstanding is what I would use WebtrixPro, for their work ethic and their product outcome. Our company needed a web built for specific needs. From day one it was made easy for our industry. WebtrixPro team has excellent organizing our project from start to completion. I guarantee I will be using them again and would recommend them to anyone I know.",
  },
  {
    name: "Anne Mortomore",
    role: "Owner",
    company: "March Brisk Bakeri",
    logo: "MB",
    color: "bg-emerald-600",
    rating: 5,
    text: "The Webtrix Team is always on deck to help us when we need them. They are part of the MAFO team!",
  },
  {
    name: "Dan Abraham",
    role: "Partner",
    company: "Scarlett Law",
    logo: "SL",
    color: "bg-orange-600",
    rating: 5,
    text: "As a constantly evolving and a collaborative with the CRPI, Assaf Shami and his team delivered a spectacular work product from our law office. Their work was clear, effective, and our online reboot, was dependable. We wholeheartedly believe and hire a great company I highly endorse Assaf and his team!",
  },
  {
    name: "Olga Smith",
    role: "CEO",
    company: "Hollywood Pictures",
    logo: "HP",
    color: "bg-lime-600",
    rating: 5,
    text: "Webtrix Pro is a professional and highly motivated team! We are so glad we found them! Need us, we were looking for a reasonably-priced design team to help us bring to life this website and a mobile application!",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold">
              What <span className="text-primary">Our Client Say</span>.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
              Trusted by <span className="text-accent font-semibold">smart businesses</span> that expect results.
            </p>
            <p className="mx-auto max-w-3xl text-muted-foreground mb-8">
              We don't just make empty promises, our buzzwords, real outcomes that make their business run smarter,
              faster, and more efficiently. Here is what our clients say about the solutions we've built for them:
              investing in powerful automation, custom software, real-time technology consultation, and strategic
              solutions that actually solve the needle.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                See Our Reviews on Clutch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Watch <span className="text-primary">Testimonials</span>.
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-full min-h-[400px] bg-primary">
                <img
                  src="/placeholder.svg?key=video1"
                  alt="Client testimonial video"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <Button size="icon" className="mb-4 h-20 w-20 rounded-full bg-primary hover:bg-primary/90">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </Button>
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">We have friendly family</p>
                    <p className="text-lg font-semibold">environment with WebtrixPro.</p>
                    <p className="mt-4 text-sm">
                      "When there is any problems, we just pick
                      <br />
                      up the phone to see and solve the problems in a<br />
                      timely manner, and that's something that is very
                      <br />
                      hard to find."
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 bg-primary text-primary-foreground">
                <div className="mb-4">
                  <div className="mb-2 text-2xl font-bold">WebtrixPro.</div>
                  <p className="text-sm opacity-90">Smart Software. AI-Powered</p>
                </div>
                <div className="mb-6 rounded-lg bg-primary-foreground/10 p-4">
                  <div className="mb-2 font-bold">Santiago G Seeber</div>
                  <div className="text-sm opacity-90">Nicholas Weins</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-white p-6 text-foreground">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded ${testimonial.color} text-white font-bold text-lg`}
                    >
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Turn Your <span className="italic">Vision into Reality</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Let's start mapping your next digital project with clarity, speed, and measurable impact.
          </p>
          <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90">
            Start Your Project Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
