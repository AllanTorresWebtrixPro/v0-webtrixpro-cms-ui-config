"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { customFetch } from "@/lib/custom-fetch"
import type { Testimonial } from "@/types/testimonial/testimonial.types"

export function useTestimonials() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.testimonials.lists(),
    queryFn: async () => {
      try {
        return await customFetch<Testimonial[]>("/api/v1/testimonials")
      } catch (error) {
        handleError(error as Error, "Failed to load testimonials")
        throw error
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
