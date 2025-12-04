"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { customFetch } from "@/lib/custom-fetch"
import type { HomepageData } from "@/types/homepage/homepage.types"

export function useHomepage() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.homepage.data(),
    queryFn: async () => {
      try {
        return await customFetch<HomepageData>("/api/v1/homepage")
      } catch (error) {
        handleError(error as Error, "Failed to load homepage data")
        throw error
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
