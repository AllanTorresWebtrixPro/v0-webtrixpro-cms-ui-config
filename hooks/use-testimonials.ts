import { useQuery } from "@tanstack/react-query"
import { testimonialService } from "@/lib/services"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"

export function useTestimonials() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.testimonials.lists(),
    queryFn: () => testimonialService.getTestimonials(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (query.error) {
    handleError(query.error as Error, "Failed to load testimonials")
  }

  return query
}
