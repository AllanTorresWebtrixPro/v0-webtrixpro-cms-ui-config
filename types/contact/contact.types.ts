import { z } from "zod"

// Zod validation schemas
export const createContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export const updateContactSchema = createContactSchema.partial().extend({
  status: z.enum(["new", "contacted", "resolved"]).optional(),
})

// TypeScript interfaces and types
export interface Contact {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  createdAt: string
  status: "new" | "contacted" | "resolved"
}

export type CreateContactInput = z.infer<typeof createContactSchema>
export type UpdateContactInput = z.infer<typeof updateContactSchema>
