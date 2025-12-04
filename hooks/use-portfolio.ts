"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { customFetch } from "@/lib/custom-fetch"
import type { Portfolio } from "@/types/portfolio/portfolio.types"

export function usePortfolio() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.portfolio.lists(),
    queryFn: async () => {
      try {
        return await customFetch<Portfolio[]>("/api/v1/portfolio")
      } catch (error) {
        handleError(error as Error, "Failed to load portfolio projects")
        throw error
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}

export function useProjectById(id: string) {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.portfolio.detail(id),
    queryFn: async () => {
      try {
        return await customFetch<Portfolio>(`/api/v1/portfolio/${id}`)
      } catch (error) {
        handleError(error as Error, "Failed to load project details")
        throw error
      }
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
