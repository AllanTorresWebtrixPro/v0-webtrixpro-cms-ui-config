export interface ProjectDetail {
  id: string
  slug: string
  title: string
  category: string
  client: string
  description: string
  image: string
  technologies: string[]
  overview: string
  challenge: string
  solution: string
  impact: string
  results: Array<{
    metric: string
    value: string
  }>
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
}
