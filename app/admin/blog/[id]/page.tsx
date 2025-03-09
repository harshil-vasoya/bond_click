"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Trash2, Image } from "lucide-react"

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isNewPost = params.id === "new"

  const [post, setPost] = useState({
    title: "",
    content: "",
    excerpt: "",
    status: "Draft",
    publishDate: "",
  })

  const [isLoading, setIsLoading] = useState(!isNewPost)

  useEffect(() => {
    if (!isNewPost) {
      // In a real app, you would fetch the post data from an API
      // For now, we'll simulate a delay and use mock data
      setTimeout(() => {
        setPost({
          title: "Wonders of Ancient Civilizations: A Journey Through Egypt",
          content:
            "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere.\n\nAliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere.",
          excerpt:
            "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.",
          status: "Published",
          publishDate: "2022-10-19",
        })
        setIsLoading(false)
      }, 500)
    }
  }, [isNewPost])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send the data to an API
    console.log("Submitting post:", post)

    // Simulate a successful save
    setTimeout(() => {
      router.push("/admin/blog")
    }, 500)
  }

  const statuses = ["Draft", "Published", "Scheduled"]

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="mr-4 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">{isNewPost ? "Add New Blog Post" : "Edit Blog Post"}</h1>
      </div>

      {isLoading ? (
        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-center">
          <p>Loading post data...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={post.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-1">
                Publish Date
              </label>
              <input
                type="date"
                id="publishDate"
                name="publishDate"
                value={post.publishDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              value={post.excerpt}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              value={post.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
            <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
              <Image size={48} className="text-gray-400 mb-2" />
              <p className="text-gray-500 mb-2">Drag and drop an image here, or click to select a file</p>
              <input type="file" className="hidden" id="featured-image" />
              <label
                htmlFor="featured-image"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Select Image
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              {!isNewPost && (
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                >
                  <Trash2 size={18} className="mr-2" />
                  Delete Post
                </button>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                <Save size={18} className="mr-2" />
                {post.status === "Draft" ? "Save Draft" : "Publish Post"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

