export interface ServiceDetail {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  benefits: Array<{
    icon: string
    title: string
    description: string
  }>
  components: Array<{
    icon: string
    title: string
    description: string
  }>
  cta: {
    title: string
    buttonText: string
  }
}

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  image: string
}
