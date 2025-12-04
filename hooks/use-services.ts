import { useQuery } from "@tanstack/react-query"
import { serviceService } from "@/lib/services"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"

export function useServices() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.services.lists(),
    queryFn: () => serviceService.getAllServices(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load services")
  }

  return query
}

export function useServiceBySlug(slug: string) {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.services.detail(slug),
    queryFn: () => serviceService.getServiceBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load service details")
  }

  return query
}
