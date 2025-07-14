"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, ExternalLink, Clock } from "lucide-react"
import type { NewsArticle, User } from "@/lib/types"

interface NewsCardProps {
  article: NewsArticle
  user: User | null
}

export function NewsCard({ article, user }: NewsCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(article.likes || 0)

  const handleLike = () => {
    if (!user) return

    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: article.url,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(article.url)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          {formatDate(article.publishedAt)}
          <span className="mx-2">•</span>
          <span>{article.source}</span>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              disabled={!user}
              className={`flex items-center space-x-1 ${isLiked ? "text-red-500" : "text-gray-500"}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              <span>{likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-1 text-gray-500"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(article.url, "_blank")}
            className="flex items-center space-x-1"
          >
            <span>Read More</span>
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
