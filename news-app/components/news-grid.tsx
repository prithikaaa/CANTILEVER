import { NewsCard } from "@/components/news-card"
import type { NewsArticle, User } from "@/lib/types"
import { Loader2 } from "lucide-react"

interface NewsGridProps {
  articles: NewsArticle[]
  loading: boolean
  user: User | null
}

export function NewsGrid({ articles, loading, user }: NewsGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading news articles...</span>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} user={user} />
      ))}
    </div>
  )
}
