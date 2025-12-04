"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Contact <span className="text-primary">Us</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We would love to <span className="text-accent font-semibold">hear from you</span>.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(305) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="mb-6 text-2xl font-bold">Let's Connect</h2>
              <p className="mb-8 text-muted-foreground">
                Find us, follow us, or drop a line — we're always open to connect.
              </p>

              <div className="space-y-6">
                {/* Find Us */}
                <Card className="border-l-4 border-l-accent p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold">Find Us</h3>
                      <p className="text-sm text-muted-foreground">
                        450 N. Park Rd Suite 608
                        <br />
                        Hollywood, FL 33021
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Call Us */}
                <Card className="border-l-4 border-l-accent p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        (305) 792-0680
                        <br />
                        Toll Free: 877-726-5238
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Email Us */}
                <Card className="border-l-4 border-l-accent p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold">Email Us</h3>
                      <p className="text-sm text-muted-foreground">info@webtrixpro.com</p>
                    </div>
                  </div>
                </Card>
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
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Visit Our <span className="text-primary">Office</span>.
            </h2>
            <p className="text-muted-foreground">Located in the heart of Hollywood, Florida</p>
          </div>

          {/* Map Placeholder */}
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg">
            <div className="relative h-[500px] w-full bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6789!2d-80.1437!3d26.0112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzQwLjMiTiA4MMKwMDgnMzcuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
              {/* Overlay marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
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
            Ready to Start Your <span className="italic">Project</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Schedule a free consultation to discuss how we can help transform your business through intelligent
            technology solutions.
          </p>
          <Button size="lg" variant="outline" className="border-white bg-white text-primary hover:bg-white/90">
            Book a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
