export const queryKeys = {
  contacts: {
    all: ["contacts"] as const,
    lists: () => [...queryKeys.contacts.all, "list"] as const,
    list: (filters?: string) => [...queryKeys.contacts.lists(), { filters }] as const,
    details: () => [...queryKeys.contacts.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.contacts.details(), id] as const,
  },
  newsletter: {
    all: ["newsletter"] as const,
    lists: () => [...queryKeys.newsletter.all, "list"] as const,
    list: (filters?: string) => [...queryKeys.newsletter.lists(), { filters }] as const,
  },
  testimonials: {
    all: ["testimonials"] as const,
    lists: () => [...queryKeys.testimonials.all, "list"] as const,
    list: (filters?: string) => [...queryKeys.testimonials.lists(), { filters }] as const,
    details: () => [...queryKeys.testimonials.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.testimonials.details(), id] as const,
  },
  projects: {
    all: ["projects"] as const,
    lists: () => [...queryKeys.projects.all, "list"] as const,
    list: (filters?: string) => [...queryKeys.projects.lists(), { filters }] as const,
    details: () => [...queryKeys.projects.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.projects.details(), id] as const,
  },
  homepage: {
    all: ["homepage"] as const,
    data: () => [...queryKeys.homepage.all, "data"] as const,
  },
  about: {
    all: ["about"] as const,
    data: () => [...queryKeys.about.all, "data"] as const,
  },
  services: {
    all: ["services"] as const,
    lists: () => [...queryKeys.services.all, "list"] as const,
    details: () => [...queryKeys.services.all, "detail"] as const,
    detail: (slug: string) => [...queryKeys.services.details(), slug] as const,
  },
  portfolio: {
    all: ["portfolio"] as const,
    lists: () => [...queryKeys.portfolio.all, "list"] as const,
    details: () => [...queryKeys.portfolio.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.portfolio.details(), id] as const,
  },
}
