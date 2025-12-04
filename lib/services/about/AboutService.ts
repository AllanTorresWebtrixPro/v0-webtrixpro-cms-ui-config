import { BaseService } from "../base/BaseService"
import type { AboutData } from "@/types/about/about.types"

class AboutService extends BaseService {
  constructor() {
    super("About")
  }

  async getAboutData(): Promise<AboutData> {
    this.logger.info("Fetching about data")
    return this.get<AboutData>("/api/v1/about")
  }
}

export const aboutService = new AboutService()
