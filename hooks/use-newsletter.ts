"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { queryKeys } from "@/lib/query-keys"
import { customFetch } from "@/lib/custom-fetch"
import type { CreateNewsletterInput, NewsletterSubscription } from "@/types/newsletter/newsletter.types"

export function useNewsletter() {
  const { handleFetchError, handleCrudError, handleCrudSuccess } = useGlobalErrorHandler()
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: queryKeys.newsletter.list(),
    queryFn: async () => {
      try {
        return await customFetch<NewsletterSubscription[]>("/api/v1/newsletter")
      } catch (error) {
        handleFetchError(error, "newsletter subscriptions")
        throw error
      }
    },
  })

  const subscribeMutation = useMutation({
    mutationFn: async (data: CreateNewsletterInput) => {
      try {
        const result = await customFetch<NewsletterSubscription>("/api/v1/newsletter", {
          method: "POST",
          body: JSON.stringify(data),
        })
        handleCrudSuccess("create", "newsletter subscription", data.email)
        return result
      } catch (error) {
        handleCrudError(error, "create", "newsletter subscription", data.email)
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.newsletter.list() })
    },
  })

  const unsubscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      try {
        await customFetch(`/api/v1/newsletter/${email}`, {
          method: "DELETE",
        })
        handleCrudSuccess("delete", "newsletter subscription", email)
      } catch (error) {
        handleCrudError(error, "delete", "newsletter subscription", email)
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.newsletter.list() })
    },
  })

  return {
    query,
    subscribeMutation,
    unsubscribeMutation,
  }
}
