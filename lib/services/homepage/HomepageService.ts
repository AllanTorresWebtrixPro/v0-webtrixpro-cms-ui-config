import { BaseService } from "../base/BaseService"
import type { HomepageData } from "@/types/homepage/homepage.types"

class HomepageService extends BaseService {
  constructor() {
    super("Homepage")
  }

  async getHomepageData(): Promise<HomepageData> {
    this.logger.info("Fetching homepage data")
    return this.get<HomepageData>("/api/v1/homepage")
  }
}

export const homepageService = new HomepageService()
