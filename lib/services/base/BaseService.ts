import { customFetch } from "@/lib/custom-fetch"
import { logger } from "@/lib/logger"

export abstract class BaseService<T, CreateInput, UpdateInput> {
  protected abstract getBasePath(): string

  async list(): Promise<T[]> {
    logger.debug(`[${this.constructor.name}] Listing items`)
    try {
      return await customFetch<T[]>(this.getBasePath())
    } catch (error) {
      logger.error(`[${this.constructor.name}] Error listing items:`, error)
      throw error
    }
  }

  async get(id: string): Promise<T> {
    logger.debug(`[${this.constructor.name}] Getting item:`, id)
    try {
      return await customFetch<T>(`${this.getBasePath()}/${id}`)
    } catch (error) {
      logger.error(`[${this.constructor.name}] Error getting item:`, error)
      throw error
    }
  }

  async create(data: CreateInput): Promise<T> {
    logger.debug(`[${this.constructor.name}] Creating item:`, data)
    try {
      return await customFetch<T>(this.getBasePath(), {
        method: "POST",
        body: JSON.stringify(data),
      })
    } catch (error) {
      logger.error(`[${this.constructor.name}] Error creating item:`, error)
      throw error
    }
  }

  async update(id: string, data: UpdateInput): Promise<T> {
    logger.debug(`[${this.constructor.name}] Updating item:`, id, data)
    try {
      return await customFetch<T>(`${this.getBasePath()}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      })
    } catch (error) {
      logger.error(`[${this.constructor.name}] Error updating item:`, error)
      throw error
    }
  }

  async delete(id: string): Promise<void> {
    logger.debug(`[${this.constructor.name}] Deleting item:`, id)
    try {
      await customFetch<void>(`${this.getBasePath()}/${id}`, {
        method: "DELETE",
      })
    } catch (error) {
      logger.error(`[${this.constructor.name}] Error deleting item:`, error)
      throw error
    }
  }
}
