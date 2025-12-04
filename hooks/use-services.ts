"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/lib/query-keys"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { customFetch } from "@/lib/custom-fetch"
import type { Service } from "@/types/service/service.types"

export function useServices() {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.services.lists(),
    queryFn: async () => {
      try {
        return await customFetch<Service[]>("/api/v1/services")
      } catch (error) {
        handleError(error as Error, "Failed to load services")
        throw error
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}

export function useServiceBySlug(slug: string) {
  const { handleError } = useGlobalErrorHandler()

  const query = useQuery({
    queryKey: queryKeys.services.detail(slug),
    queryFn: async () => {
      try {
        return await customFetch<Service>(`/api/v1/services/${slug}`)
      } catch (error) {
        handleError(error as Error, "Failed to load service details")
        throw error
      }
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
