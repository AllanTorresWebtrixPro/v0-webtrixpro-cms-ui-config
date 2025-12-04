import { BaseService } from "../base/BaseService"
import type { Project, ProjectDetail } from "@/types/portfolio/portfolio.types"

class PortfolioService extends BaseService {
  constructor() {
    super("Portfolio")
  }

  async getAllProjects(): Promise<Project[]> {
    this.logger.info("Fetching all projects")
    return this.get<Project[]>("/api/v1/portfolio")
  }

  async getProjectById(id: string): Promise<ProjectDetail> {
    this.logger.info("Fetching project by id", { id })
    return this.get<ProjectDetail>(`/api/v1/portfolio/${id}`)
  }
}

export const portfolioService = new PortfolioService()
