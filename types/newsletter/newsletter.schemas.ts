import { z } from "zod"

export const createNewsletterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().optional(),
})

export const updateNewsletterSchema = createNewsletterSchema.partial().extend({
  isActive: z.boolean().optional(),
})

export type CreateNewsletterInput = z.infer<typeof createNewsletterSchema>
export type UpdateNewsletterInput = z.infer<typeof updateNewsletterSchema>
