"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, FileText, Users, Settings, LogOut } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Package, label: "Products", href: "/admin/products" },
    { icon: FileText, label: "Blog Posts", href: "/admin/blog" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  return (
    <div className="w-64 bg-white h-screen shadow-md fixed">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Bond Click Admin</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
          <li className="pt-4 mt-4 border-t">
            <Link
              href="/admin/logout"
              className="flex items-center p-3 text-red-500 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOut size={18} className="mr-3" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

