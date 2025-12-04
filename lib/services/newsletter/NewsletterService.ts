import { logger } from "@/lib/logger"
import { BaseService } from "../base/BaseService"
import type {
  NewsletterSubscription,
  CreateNewsletterInput,
  UpdateNewsletterInput,
} from "@/types/newsletter/newsletter.types"

export class NewsletterService extends BaseService<
  NewsletterSubscription,
  CreateNewsletterInput,
  UpdateNewsletterInput
> {
  protected getBasePath(): string {
    return "/api/v1/newsletter"
  }

  async subscribe(data: CreateNewsletterInput): Promise<NewsletterSubscription> {
    logger.debug("[NewsletterService] Subscribing to newsletter:", data)
    try {
      return await this.create(data)
    } catch (error) {
      logger.error("[NewsletterService] Error subscribing to newsletter:", error)
      throw error
    }
  }

  async unsubscribe(email: string): Promise<void> {
    logger.debug("[NewsletterService] Unsubscribing from newsletter:", email)
    try {
      const subscriptions = await this.list()
      const subscription = subscriptions.find((sub) => sub.email === email)
      if (subscription) {
        await this.update(subscription.id, { isActive: false })
      }
    } catch (error) {
      logger.error("[NewsletterService] Error unsubscribing from newsletter:", error)
      throw error
    }
  }
}

export const newsletterService = new NewsletterService()
