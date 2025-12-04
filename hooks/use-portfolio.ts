import { useQuery } from "@tanstack/react-query"
import { portfolioService } from "@/lib/services"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"

export function usePortfolio() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.portfolio.lists(),
    queryFn: () => portfolioService.getAllProjects(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load portfolio projects")
  }

  return query
}

export function useProjectById(id: string) {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.portfolio.detail(id),
    queryFn: () => portfolioService.getProjectById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load project details")
  }

  return query
}
