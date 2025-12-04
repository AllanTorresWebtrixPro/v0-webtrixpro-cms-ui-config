import { logger } from "@/lib/logger"
import { customFetch } from "@/lib/custom-fetch"
import type { Project, ProjectDetail } from "@/types/portfolio/portfolio.types"

class PortfolioService {
  async getAllProjects(): Promise<Project[]> {
    logger.debug("[PortfolioService] Fetching all projects")
    try {
      return await customFetch<Project[]>("/api/v1/portfolio")
    } catch (error) {
      logger.error("[PortfolioService] Error fetching all projects:", error)
      throw error
    }
  }

  async getProjectById(id: string): Promise<ProjectDetail> {
    logger.debug("[PortfolioService] Fetching project by id:", id)
    try {
      return await customFetch<ProjectDetail>(`/api/v1/portfolio/${id}`)
    } catch (error) {
      logger.error("[PortfolioService] Error fetching project by id:", error)
      throw error
    }
  }
}

export const portfolioService = new PortfolioService()
