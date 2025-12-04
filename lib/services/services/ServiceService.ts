import { logger } from "@/lib/logger"
import { customFetch } from "@/lib/custom-fetch"
import type { Service, ServiceDetail } from "@/types/service/service.types"

class ServiceService {
  async getAllServices(): Promise<Service[]> {
    logger.debug("[ServiceService] Fetching all services")
    try {
      return await customFetch<Service[]>("/api/v1/services")
    } catch (error) {
      logger.error("[ServiceService] Error fetching all services:", error)
      throw error
    }
  }

  async getServiceBySlug(slug: string): Promise<ServiceDetail> {
    logger.debug("[ServiceService] Fetching service by slug:", slug)
    try {
      return await customFetch<ServiceDetail>(`/api/v1/services/${slug}`)
    } catch (error) {
      logger.error("[ServiceService] Error fetching service by slug:", error)
      throw error
    }
  }
}

export const serviceService = new ServiceService()
