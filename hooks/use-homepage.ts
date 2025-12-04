import { useQuery } from "@tanstack/react-query"
import { homepageService } from "@/lib/services"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"

export function useHomepage() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.homepage.data(),
    queryFn: () => homepageService.getHomepageData(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load homepage data")
  }

  return query
}
