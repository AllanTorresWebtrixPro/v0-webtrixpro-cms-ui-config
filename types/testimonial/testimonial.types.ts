export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  logo?: string
  image?: string
  date: string
}

export interface TestimonialData {
  featured: Testimonial[]
  all: Testimonial[]
  videoTestimonial: {
    name: string
    company: string
    role: string
    videoUrl: string
    thumbnail: string
  }
}
