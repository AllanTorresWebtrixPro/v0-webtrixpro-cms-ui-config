"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { MapPin } from "lucide-react"

export default function ContactPage() {
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
          <ContactForm />

          <ContactInfo />
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
