"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, MessageSquare, User, Calendar, Search, Filter } from "lucide-react"
import { fadeInUp } from "@/components/animations/scroll-animation"
import StaggerContainer from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const posts = [
    {
      id: 1,
      title: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      date: "October 19, 2022",
      author: "admin",
      comments: 5,
      category: "Travel",
      excerpt:
        "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.",
      image: "/placeholder.svg?height=400&width=600&text=Egypt",
    },
    {
      id: 2,
      title: "The Road to Adventure: Embarking on New Horizons",
      date: "October 19, 2022",
      author: "admin",
      comments: 3,
      category: "Adventure",
      excerpt:
        "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.",
      image: "/placeholder.svg?height=400&width=600&text=Adventure",
    },
    {
      id: 3,
      title: "Journeys of Discovery: Uncovering Hidden Treasures",
      date: "October 19, 2022",
      author: "admin",
      comments: 7,
      category: "Discovery",
      excerpt:
        "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.",
      image: "/placeholder.svg?height=400&width=600&text=Discovery",
    },
    {
      id: 4,
      title: "Sustainable Construction: Building for the Future",
      date: "November 5, 2022",
      author: "admin",
      comments: 4,
      category: "Construction",
      excerpt:
        "Exploring eco-friendly materials and sustainable building practices that are shaping the future of construction. Learn how green building techniques can reduce environmental impact.",
      image: "/placeholder.svg?height=400&width=600&text=Sustainable",
    },
    {
      id: 5,
      title: "Innovations in Adhesive Technology: What's New",
      date: "November 12, 2022",
      author: "admin",
      comments: 2,
      category: "Technology",
      excerpt:
        "Discover the latest breakthroughs in adhesive technology and how they're revolutionizing construction methods. From nano-adhesives to smart bonding solutions.",
      image: "/placeholder.svg?height=400&width=600&text=Innovation",
    },
    {
      id: 6,
      title: "DIY Home Renovation: Tips from the Experts",
      date: "November 25, 2022",
      author: "admin",
      comments: 9,
      category: "DIY",
      excerpt:
        "Professional advice for your home renovation projects. Learn the secrets of successful DIY renovations and avoid common pitfalls with our expert guidance.",
      image: "/placeholder.svg?height=400&width=600&text=DIY",
    },
  ]

  const categories = ["All", "Travel", "Adventure", "Discovery", "Construction", "Technology", "DIY"]

  // Filter posts based on search query and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <div className="breadcrumb">
            <Link href="/">
              <Home size={16} />
            </Link>
            <span>&gt;</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="flex items-center w-full md:w-auto">
              <Filter size={18} className="mr-2 text-gray-500" />
              <span className="mr-2 text-sm md:text-base">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3 gap-2">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>{post.comments} Comments</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-all text-sm mt-auto self-start"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any posts matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative inline-flex items-center px-4 py-2 border border-primary bg-primary text-sm font-medium text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

