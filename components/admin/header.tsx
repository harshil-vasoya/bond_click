"use client"

import { useState } from "react"
import { Bell, User, Search } from "lucide-react"

export default function AdminHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
            <User size={16} />
          </div>
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  )
}

