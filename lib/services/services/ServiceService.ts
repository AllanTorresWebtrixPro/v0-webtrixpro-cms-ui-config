import { BaseService } from "../base/BaseService"
import type { Service, ServiceDetail } from "@/types/service/service.types"

class ServiceService extends BaseService {
  constructor() {
    super("Service")
  }

  async getAllServices(): Promise<Service[]> {
    this.logger.info("Fetching all services")
    return this.get<Service[]>("/api/v1/services")
  }

  async getServiceBySlug(slug: string): Promise<ServiceDetail> {
    this.logger.info("Fetching service by slug", { slug })
    return this.get<ServiceDetail>(`/api/v1/services/${slug}`)
  }
}

export const serviceService = new ServiceService()
