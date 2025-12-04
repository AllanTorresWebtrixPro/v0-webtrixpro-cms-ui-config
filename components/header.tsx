import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold">
              <span className="text-primary">W</span>
              <span className="text-foreground">ebtrix</span>
              <span className="text-primary">Pro.</span>
            </span>
          </div>
          <span className="text-xs text-muted-foreground">Smart Software. AI-Powered</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services.
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Portfolio.
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Testimonials.
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About.
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact.
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="mr-2 h-4 w-4" />
            877-726-5238
          </Button>
          <Button variant="outline" className="hidden md:inline-flex bg-transparent">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  )
}
