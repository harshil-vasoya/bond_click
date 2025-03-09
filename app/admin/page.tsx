import { Package, FileText, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Products",
            value: "24",
            icon: Package,
            color: "bg-blue-500",
            trend: { type: "up", value: "12%" },
          },
          {
            title: "Total Blog Posts",
            value: "15",
            icon: FileText,
            color: "bg-green-500",
            trend: { type: "up", value: "8%" },
          },
          {
            title: "Total Users",
            value: "156",
            icon: Users,
            color: "bg-purple-500",
            trend: { type: "up", value: "24%" },
          },
          {
            title: "Total Revenue",
            value: "₹45,200",
            icon: DollarSign,
            color: "bg-yellow-500",
            trend: { type: "down", value: "3%" },
          },
        ].map((item, index) => {
          const Icon = item.icon
          const TrendIcon = item.trend.type === "up" ? TrendingUp : TrendingDown

          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 mb-1">{item.title}</p>
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                </div>
                <div className={`${item.color} p-3 rounded-full text-white`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendIcon size={16} className={item.trend.type === "up" ? "text-green-500" : "text-red-500"} />
                <span className={`ml-1 ${item.trend.type === "up" ? "text-green-500" : "text-red-500"}`}>
                  {item.trend.value}
                </span>
                <span className="ml-1 text-gray-500">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Recent Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Name</th>
                  <th className="py-3 text-left">Category</th>
                  <th className="py-3 text-left">Price</th>
                  <th className="py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Tile Adhesive", category: "Adhesive", price: "₹350", status: "Active" },
                  { name: "Waterproofing", category: "Chemical", price: "₹480", status: "Active" },
                  { name: "Epoxy Grout", category: "Grout", price: "₹520", status: "Out of Stock" },
                  { name: "Floor Hardener", category: "Hardener", price: "₹290", status: "Active" },
                ].map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">{product.name}</td>
                    <td className="py-3">{product.category}</td>
                    <td className="py-3">{product.price}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Recent Blog Posts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Title</th>
                  <th className="py-3 text-left">Author</th>
                  <th className="py-3 text-left">Date</th>
                  <th className="py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    title: "Wonders of Ancient Civilizations",
                    author: "Admin",
                    date: "Oct 19, 2022",
                    status: "Published",
                  },
                  { title: "The Road to Adventure", author: "Admin", date: "Oct 19, 2022", status: "Published" },
                  { title: "Journeys of Discovery", author: "Admin", date: "Oct 19, 2022", status: "Published" },
                  { title: "Travel Tips for Beginners", author: "Admin", date: "Oct 25, 2022", status: "Draft" },
                ].map((post, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">{post.title}</td>
                    <td className="py-3">{post.author}</td>
                    <td className="py-3">{post.date}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

