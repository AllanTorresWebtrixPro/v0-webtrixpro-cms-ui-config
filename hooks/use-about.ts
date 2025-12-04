import { useQuery } from "@tanstack/react-query"
import { aboutService } from "@/lib/services"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"

export function useAbout() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.about.data(),
    queryFn: () => aboutService.getAboutData(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load about data")
  }

  return query
}
