import { logger } from "@/lib/logger"
import { BaseService } from "../base/BaseService"
import type { Contact, CreateContactInput, UpdateContactInput } from "@/types/contact"

export class ContactService extends BaseService<Contact, CreateContactInput, UpdateContactInput> {
  protected getBasePath(): string {
    return "/api/v1/contacts"
  }

  async getByEmail(email: string): Promise<Contact | null> {
    logger.debug("[ContactService] Getting contact by email:", email)
    try {
      const result = await this.list()
      return result.find((contact) => contact.email === email) || null
    } catch (error) {
      logger.error("[ContactService] Error getting contact by email:", error)
      throw error
    }
  }

  async getByStatus(status: "new" | "contacted" | "resolved"): Promise<Contact[]> {
    logger.debug("[ContactService] Getting contacts by status:", status)
    try {
      const result = await this.list()
      return result.filter((contact) => contact.status === status)
    } catch (error) {
      logger.error("[ContactService] Error getting contacts by status:", error)
      throw error
    }
  }
}

export const contactService = new ContactService()
