import type React from "react"
import { Inter } from "next/font/google"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

