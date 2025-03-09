"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Filter } from "lucide-react"

export default function AdminProducts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Mock data for products
  const products = [
    { id: 1, name: "Tile Adhesive One Star", category: "Adhesive", price: "₹350", status: "Active", stock: 45 },
    { id: 2, name: "Tile Adhesive Two Star", category: "Adhesive", price: "₹450", status: "Active", stock: 32 },
    { id: 3, name: "Tile Adhesive Three Star", category: "Adhesive", price: "₹550", status: "Active", stock: 28 },
    { id: 4, name: "Waterproofing LWP", category: "Chemical", price: "₹480", status: "Active", stock: 15 },
    { id: 5, name: "Waterproofing SBR", category: "Chemical", price: "₹520", status: "Active", stock: 20 },
    { id: 6, name: "Epoxy Grout", category: "Grout", price: "₹520", status: "Out of Stock", stock: 0 },
    { id: 7, name: "Tile Grout", category: "Grout", price: "₹320", status: "Active", stock: 50 },
    { id: 8, name: "Floor Hardener", category: "Hardener", price: "₹290", status: "Active", stock: 18 },
    { id: 9, name: "White Cement", category: "Cement", price: "₹180", status: "Low Stock", stock: 5 },
    { id: 10, name: "Block Jointer", category: "Adhesive", price: "₹420", status: "Active", stock: 25 },
  ]

  const categories = ["All", "Adhesive", "Chemical", "Grout", "Hardener", "Cement"]

  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/admin/products/new"
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
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
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
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
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{product.id}</td>
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : product.status === "Out of Stock"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Link href={`/admin/products/${product.id}`} className="p-1 text-blue-600 hover:text-blue-800">
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-4">
            <p className="text-gray-500">No products found</p>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
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

