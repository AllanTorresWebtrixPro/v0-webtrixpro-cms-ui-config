"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { customFetch } from "@/lib/custom-fetch"
import type { AboutData } from "@/types/about/about.types"

export function useAbout() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.about.data(),
    queryFn: async () => {
      try {
        return await customFetch<AboutData>("/api/v1/about")
      } catch (error) {
        handleError(error as Error, "Failed to load about data")
        throw error
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
