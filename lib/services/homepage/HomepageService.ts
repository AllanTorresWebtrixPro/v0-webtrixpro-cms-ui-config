import { logger } from "@/lib/logger"
import { customFetch } from "@/lib/custom-fetch"
import type { HomepageData } from "@/types/homepage/homepage.types"

class HomepageService {
  async getHomepageData(): Promise<HomepageData> {
    logger.debug("[HomepageService] Fetching homepage data")
    try {
      return await customFetch<HomepageData>("/api/v1/homepage")
    } catch (error) {
      logger.error("[HomepageService] Error fetching homepage data:", error)
      throw error
    }
  }
}

export const homepageService = new HomepageService()
