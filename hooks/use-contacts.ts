"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useGlobalErrorHandler } from "./use-global-error-handler"
import { queryKeys } from "@/lib/query-keys"
import { customFetch } from "@/lib/custom-fetch"
import type { CreateContactInput, UpdateContactInput, Contact } from "@/types/contact"

export function useContacts() {
  const { handleFetchError, handleCrudError, handleCrudSuccess } = useGlobalErrorHandler()
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: queryKeys.contacts.list(),
    queryFn: async () => {
      try {
        return await customFetch<Contact[]>("/api/v1/contacts")
      } catch (error) {
        handleFetchError(error, "contacts")
        throw error
      }
    },
  })

  const createMutation = useMutation({
    mutationFn: async (data: CreateContactInput) => {
      try {
        const result = await customFetch<Contact>("/api/v1/contacts", {
          method: "POST",
          body: JSON.stringify(data),
        })
        handleCrudSuccess("create", "contact", `${data.firstName} ${data.lastName}`)
        return result
      } catch (error) {
        handleCrudError(error, "create", "contact", `${data.firstName} ${data.lastName}`)
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.list() })
    },
  })

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateContactInput }) => {
      try {
        const result = await customFetch<Contact>(`/api/v1/contacts/${id}`, {
          method: "PUT",
          body: JSON.stringify(data),
        })
        handleCrudSuccess("update", "contact", result.id)
        return result
      } catch (error) {
        handleCrudError(error, "update", "contact", id)
        throw error
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.list() })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      try {
        await customFetch(`/api/v1/contacts/${id}`, {
          method: "DELETE",
        })
        handleCrudSuccess("delete", "contact", id)
      } catch (error) {
        handleCrudError(error, "delete", "contact", id)
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.list() })
    },
  })

  return {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
  }
}

export function useContact(id: string) {
  const { handleFetchError } = useGlobalErrorHandler()

  return useQuery({
    queryKey: queryKeys.contacts.detail(id),
    queryFn: async () => {
      try {
        return await customFetch<Contact>(`/api/v1/contacts/${id}`)
      } catch (error) {
        handleFetchError(error, "contact")
        throw error
      }
    },
    enabled: !!id,
  })
}
