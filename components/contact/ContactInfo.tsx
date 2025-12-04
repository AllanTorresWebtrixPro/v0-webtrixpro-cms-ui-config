import type React from "react"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

interface ContactInfoItem {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    title: "Find Us",
    content: (
      <>
        450 N. Park Rd Suite 608
        <br />
        Hollywood, FL 33021
      </>
    ),
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    title: "Call Us",
    content: (
      <>
        (305) 792-0680
        <br />
        Toll Free: 877-726-5238
      </>
    ),
  },
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    title: "Email Us",
    content: "info@webtrixpro.com",
  },
]

export function ContactInfo() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold">Let's Connect</h2>
        <p className="mb-8 text-muted-foreground">Find us, follow us, or drop a line — we're always open to connect.</p>

        <div className="space-y-6">
          {contactInfoItems.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-accent p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <Card className="bg-primary p-6 text-primary-foreground">
        <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
