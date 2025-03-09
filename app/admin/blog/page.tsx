"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Filter } from "lucide-react"

export default function AdminBlog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")

  // Mock data for blog posts
  const posts = [
    {
      id: 1,
      title: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      author: "Admin",
      date: "Oct 19, 2022",
      status: "Published",
      comments: 5,
    },
    {
      id: 2,
      title: "The Road to Adventure: Embarking on New Horizons",
      author: "Admin",
      date: "Oct 19, 2022",
      status: "Published",
      comments: 3,
    },
    {
      id: 3,
      title: "Journeys of Discovery: Uncovering Hidden Treasures",
      author: "Admin",
      date: "Oct 19, 2022",
      status: "Published",
      comments: 7,
    },
    {
      id: 4,
      title: "Travel Tips for Beginners: Essential Guide",
      author: "Admin",
      date: "Oct 25, 2022",
      status: "Draft",
      comments: 0,
    },
    {
      id: 5,
      title: "Top 10 Destinations for 2023",
      author: "Admin",
      date: "Nov 02, 2022",
      status: "Draft",
      comments: 0,
    },
    {
      id: 6,
      title: "How to Pack for Long Trips",
      author: "Admin",
      date: "Nov 10, 2022",
      status: "Scheduled",
      comments: 0,
    },
  ]

  const statuses = ["All", "Published", "Draft", "Scheduled"]

  // Filter posts based on search query and status
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "All" || post.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Add Post
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="flex items-center">
            <Filter size={18} className="mr-2 text-gray-500" />
            <span className="mr-2">Filter:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Author</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Comments</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{post.id}</td>
                  <td className="py-3 px-4">{post.title}</td>
                  <td className="py-3 px-4">{post.author}</td>
                  <td className="py-3 px-4">{post.date}</td>
                  <td className="py-3 px-4">{post.comments}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : post.status === "Draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Link href={`/admin/blog/${post.id}`} className="p-1 text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </Link>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-4">
            <p className="text-gray-500">No posts found</p>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-500">
            Showing {filteredPosts.length} of {posts.length} posts
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white">Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-primary text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

