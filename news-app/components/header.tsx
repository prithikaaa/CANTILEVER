"use client"

import { Button } from "@/components/ui/button"
import { User, LogOut, Newspaper } from "lucide-react"
import type { User as UserType } from "@/lib/types"

interface HeaderProps {
  user: UserType | null
  onLogin: () => void
  onLogout: () => void
}

export function Header({ user, onLogin, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NewsHub</h1>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Welcome, {user.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <Button onClick={onLogin}>Login / Register</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
