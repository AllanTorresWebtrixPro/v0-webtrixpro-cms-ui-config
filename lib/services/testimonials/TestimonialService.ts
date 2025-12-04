import { BaseService } from "../base/BaseService"
import type { TestimonialData } from "@/types/testimonial/testimonial.types"

class TestimonialService extends BaseService {
  constructor() {
    super("Testimonial")
  }

  async getTestimonials(): Promise<TestimonialData> {
    this.logger.info("Fetching testimonials")
    return this.get<TestimonialData>("/api/v1/testimonials")
  }
}

export const testimonialService = new TestimonialService()
