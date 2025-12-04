import type React from "react"
import { FileQuestion } from "lucide-react"

interface EmptyStateProps {
  title?: string
  message?: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

export function EmptyState({
  title = "No data found",
  message = "There are no items to display at this time.",
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 text-gray-400">{icon || <FileQuestion className="h-16 w-16" />}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-gray-600">{message}</p>
      {action && <div>{action}</div>}
    </div>
  )
}
