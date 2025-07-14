"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { NewsGrid } from "@/components/news-grid"
import { SearchFilters } from "@/components/search-filters"
import { AuthModal } from "@/components/auth-modal"
import { mockNewsData } from "@/lib/mock-data"
import type { NewsArticle, User } from "@/lib/types"

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null)
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [sortBy, setSortBy] = useState<string>("publishedAt")
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("newsapp_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Load articles (simulating API call)
  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true)
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setArticles(mockNewsData)
      setFilteredArticles(mockNewsData)
      setLoading(false)
    }
    loadArticles()
  }, [])

  // Filter and search articles
  useEffect(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Sort articles
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "publishedAt") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

    setFilteredArticles(filtered)
  }, [articles, selectedCategory, searchQuery, sortBy])

  const handleLogin = (userData: User) => {
    setUser(userData)
    localStorage.setItem("newsapp_user", JSON.stringify(userData))
    setShowAuthModal(false)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("newsapp_user")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogin={() => setShowAuthModal(true)} onLogout={handleLogout} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Latest News</h1>
          <p className="text-gray-600">Stay updated with the latest news from around the world</p>
        </div>

        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <NewsGrid articles={filteredArticles} loading={loading} user={user} />
      </main>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />}
    </div>
  )
}
