export interface NewsletterSubscription {
  id: string
  firstName: string
  lastName: string
  email: string
  country?: string
  createdAt: string
  isActive: boolean
}

export interface CreateNewsletterInput {
  firstName: string
  lastName: string
  email: string
  country?: string
}

export interface UpdateNewsletterInput {
  firstName?: string
  lastName?: string
  email?: string
  country?: string
  isActive?: boolean
}
