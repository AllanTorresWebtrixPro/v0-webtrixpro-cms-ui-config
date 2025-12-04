import { logger } from "@/lib/logger"
import { customFetch } from "@/lib/custom-fetch"
import type { AboutData } from "@/types/about/about.types"

class AboutService {
  async getAboutData(): Promise<AboutData> {
    logger.debug("[AboutService] Fetching about data")
    try {
      return await customFetch<AboutData>("/api/v1/about")
    } catch (error) {
      logger.error("[AboutService] Error fetching about data:", error)
      throw error
    }
  }
}

export const aboutService = new AboutService()
