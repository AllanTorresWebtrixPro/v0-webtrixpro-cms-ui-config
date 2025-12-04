"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  title?: string
  message?: string
  error?: Error | unknown
  onRetry?: () => void
}

export function ErrorState({
  title = "Something went wrong",
  message = "An error occurred while loading the data.",
  error,
  onRetry,
}: ErrorStateProps) {
  const errorMessage = error instanceof Error ? error.message : String(error)

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 text-red-500">
        <AlertCircle className="h-16 w-16" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-2 max-w-md text-sm text-gray-600">{message}</p>
      {error && <p className="mb-6 max-w-md text-xs text-gray-500 font-mono bg-gray-100 p-2 rounded">{errorMessage}</p>}
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  )
}
