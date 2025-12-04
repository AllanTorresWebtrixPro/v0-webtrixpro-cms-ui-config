export interface LeadershipMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export interface VisionMission {
  vision: {
    title: string
    description: string
    icon: string
  }
  mission: {
    title: string
    description: string
    icon: string
  }
}

export interface AboutData {
  title: string
  subtitle: string
  description: string
  stats: Array<{
    value: string
    label: string
    color: string
  }>
  story: {
    title: string
    content: string
    videoUrl: string
  }
  leadership: LeadershipMember[]
  visionMission: VisionMission
}
