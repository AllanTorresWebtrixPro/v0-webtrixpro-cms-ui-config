import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-1">
              <span className="text-xl font-bold">
                <span className="text-primary">W</span>
                <span className="text-white">ebtrix</span>
                <span className="text-primary">Pro.</span>
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Hollywood Office:</p>
                  <p>450 N. Park Rd Suite 608</p>
                  <p>Hollywood, FL 33021</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p>(305) 792-0680</p>
                  <p>Toll Free: 877-726-5238</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>contact@webtrixpro.com</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/charity" className="hover:text-primary transition-colors">
                  Charity Login
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ai-agents" className="hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app" className="hover:text-primary transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-app" className="hover:text-primary transition-colors">
                  Web App Development
                </Link>
              </li>
              <li>
                <Link href="/services/technology-strategy" className="hover:text-primary transition-colors">
                  Technology Strategy Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">NEWSLETTER</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter and stay updated!</p>

            <div className="space-y-3">
              <Input
                placeholder="First Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                placeholder="Last Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">Send</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm">2004-2025 WebtrixPro. All rights reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="text-white hover:text-primary transition-colors">
              G
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              f
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
