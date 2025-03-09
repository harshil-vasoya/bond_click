"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Trash2 } from "lucide-react"

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isNewProduct = params.id === "new"

  const [product, setProduct] = useState({
    name: "",
    category: "Adhesive",
    price: "",
    description: "",
    stock: "",
    status: "Active",
  })

  const [isLoading, setIsLoading] = useState(!isNewProduct)

  useEffect(() => {
    if (!isNewProduct) {
      // In a real app, you would fetch the product data from an API
      // For now, we'll simulate a delay and use mock data
      setTimeout(() => {
        setProduct({
          name: "Tile Adhesive One Star",
          category: "Adhesive",
          price: "350",
          description: "Premium quality tile adhesive for all types of tiles. Water resistant and easy to apply.",
          stock: "45",
          status: "Active",
        })
        setIsLoading(false)
      }, 500)
    }
  }, [isNewProduct])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send the data to an API
    console.log("Submitting product:", product)

    // Simulate a successful save
    setTimeout(() => {
      router.push("/admin/products")
    }, 500)
  }

  const categories = ["Adhesive", "Chemical", "Grout", "Hardener", "Cement"]
  const statuses = ["Active", "Out of Stock", "Low Stock", "Discontinued"]

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="mr-4 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">{isNewProduct ? "Add New Product" : "Edit Product"}</h1>
      </div>

      {isLoading ? (
        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-center">
          <p>Loading product data...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={product.status}
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
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={product.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <div className="flex justify-between">
            <div>
              {!isNewProduct && (
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                >
                  <Trash2 size={18} className="mr-2" />
                  Delete Product
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
                Save Product
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

