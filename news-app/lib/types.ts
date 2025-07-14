export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  url: string
  imageUrl: string
  source: string
  category: string
  publishedAt: string
  likes?: number
}

export interface User {
  id: string
  name: string
  email: string
  preferences: {
    categories: string[]
    notifications: boolean
  }
}
