import { toast } from "sonner"
import { logger } from "@/lib/logger"

type CrudAction = "create" | "update" | "delete"

export function useGlobalErrorHandler() {
  const handleFetchError = (error: unknown, resourceType: string) => {
    logger.error(`[useGlobalErrorHandler] Fetch error for ${resourceType}:`, error)

    const message = error instanceof Error ? error.message : "An error occurred while fetching data"
    toast.error(`Failed to load ${resourceType}`, {
      description: message,
    })
  }

  const handleCrudError = (error: unknown, action: CrudAction, resourceType: string, resourceName?: string) => {
    logger.error(`[useGlobalErrorHandler] ${action} error for ${resourceType}:`, error)

    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    const actionText = action === "create" ? "create" : action === "update" ? "update" : "delete"
    const resourceText = resourceName ? `${resourceType} "${resourceName}"` : resourceType

    toast.error(`Failed to ${actionText} ${resourceText}`, {
      description: message,
    })
  }

  const handleCrudSuccess = (action: CrudAction, resourceType: string, resourceName?: string) => {
    const actionText = action === "create" ? "created" : action === "update" ? "updated" : "deleted"
    const resourceText = resourceName ? `${resourceType} "${resourceName}"` : resourceType

    logger.info(`[useGlobalErrorHandler] Successfully ${actionText} ${resourceText}`)

    toast.success(`Successfully ${actionText} ${resourceText}`)
  }

  return {
    handleFetchError,
    handleCrudError,
    handleCrudSuccess,
  }
}
