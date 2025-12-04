export interface HeroSection {
  title: string
  subtitle: string
  highlightedText: string
  description: string
  ctaButtons: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
}

export interface ServiceCard {
  id: string
  slug: string
  icon: string
  title: string
  description: string
}

export interface BenefitItem {
  icon: string
  title: string
  description: string
}

export interface Award {
  id: string
  name: string
  issuer: string
  year: number
  logo?: string
}

export interface TestimonialPreview {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  logo?: string
}

export interface Stat {
  value: string
  label: string
  color: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
}

export interface HomepageData {
  hero: HeroSection
  services: ServiceCard[]
  benefits: BenefitItem[]
  awards: Award[]
  story: {
    title: string
    description: string
    videoUrl: string
  }
  testimonials: TestimonialPreview[]
  stats: Stat[]
  process: ProcessStep[]
  cta: {
    title: string
    subtitle: string
    buttonText: string
  }
}
