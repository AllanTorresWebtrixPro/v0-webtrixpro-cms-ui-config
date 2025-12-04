import { logger } from "@/lib/logger"
import { customFetch } from "@/lib/custom-fetch"
import type { TestimonialData } from "@/types/testimonial/testimonial.types"

class TestimonialService {
  async getTestimonials(): Promise<TestimonialData> {
    logger.debug("[TestimonialService] Fetching testimonials")
    try {
      return await customFetch<TestimonialData>("/api/v1/testimonials")
    } catch (error) {
      logger.error("[TestimonialService] Error fetching testimonials:", error)
      throw error
    }
  }
}

export const testimonialService = new TestimonialService()
