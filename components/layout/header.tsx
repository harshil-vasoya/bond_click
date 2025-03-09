"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const closeDropdown = () => setActiveDropdown(null)

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  const productCategories = [
    { name: "Three Star", href: "/products/1" },
    { name: "Two Star", href: "/products/2" },
    { name: "One Star", href: "/products/3" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-md" : "py-5 bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -40 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src="/logo.svg" alt="Bond Click Logo" width={40} height={40} />
              </motion.div>
              <motion.div
                initial={{ y: 40 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src="/logo.svg" alt="Bond Click Logo" width={40} height={40} />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wide text-gray-800">BOND CLICK</span>
              <span className="text-xs tracking-wider text-primary">WE BUILD YOUR DREAM</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`nav-link px-4 py-2 font-medium transition-colors ${
                isActive("/") ? "text-primary after:transform-none" : "text-gray-700 hover:text-primary"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className={`nav-link px-4 py-2 font-medium transition-colors ${
                isActive("/about-us") ? "text-primary after:transform-none" : "text-gray-700 hover:text-primary"
              }`}
            >
              ABOUT US
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("products")}
                className={`flex items-center px-4 py-2 font-medium transition-colors ${
                  isActive("/products") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                PRODUCTS
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Active indicator for products */}
              {isActive("/products") && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>}

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50"
                  >
                    <div className="py-1">
                      <Link
                        href="/products"
                        className={`block px-4 py-2 text-sm ${
                          pathname === "/products"
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-gray-700 hover:bg-primary hover:text-white"
                        }`}
                        onClick={closeDropdown}
                      >
                        All Products
                      </Link>
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === category.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 hover:bg-primary hover:text-white"
                          }`}
                          onClick={closeDropdown}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`nav-link px-4 py-2 font-medium transition-colors ${
                isActive("/blog") ? "text-primary after:transform-none" : "text-gray-700 hover:text-primary"
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/contact-us"
              className={`ml-2 relative overflow-hidden group ${
                isActive("/contact-us") ? "ring-2 ring-primary rounded-md" : ""
              }`}
            >
              <span className="relative z-10 px-6 py-2.5 font-medium text-white rounded-md inline-block transition-colors bg-primary group-hover:text-white">
                Contact us
              </span>
              <span className="absolute inset-0 rounded-md bg-primary-dark scale-0 group-hover:scale-100 transition-transform origin-bottom-right duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white z-40 md:hidden"
              >
                <div className="flex flex-col p-8 h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <Image src="/logo.svg" alt="Bond Click Logo" width={40} height={40} />
                      <div className="flex flex-col">
                        <span className="font-bold text-xl">BOND CLICK</span>
                        <span className="text-xs">WE BUILD YOUR DREAM</span>
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-6 mt-8">
                    <Link
                      href="/"
                      className={`text-2xl font-medium ${isActive("/") ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HOME
                      {isActive("/") && <div className="h-0.5 w-12 bg-primary mt-2"></div>}
                    </Link>
                    <Link
                      href="/about-us"
                      className={`text-2xl font-medium ${isActive("/about-us") ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ABOUT US
                      {isActive("/about-us") && <div className="h-0.5 w-12 bg-primary mt-2"></div>}
                    </Link>

                    {/* Mobile Products Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown("mobile-products")}
                        className={`flex items-center text-2xl font-medium ${isActive("/products") ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                      >
                        PRODUCTS
                        <ChevronDown
                          size={20}
                          className={`ml-2 transition-transform ${activeDropdown === "mobile-products" ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isActive("/products") && <div className="h-0.5 w-12 bg-primary mt-2"></div>}

                      <AnimatePresence>
                        {activeDropdown === "mobile-products" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-4 space-y-2 mt-2">
                              <Link
                                href="/products"
                                className={`block text-lg ${pathname === "/products" ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                All Products
                              </Link>
                              {productCategories.map((category) => (
                                <Link
                                  key={category.name}
                                  href={category.href}
                                  className={`block text-lg ${pathname === category.href ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/blog"
                      className={`text-2xl font-medium ${isActive("/blog") ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BLOG
                      {isActive("/blog") && <div className="h-0.5 w-12 bg-primary mt-2"></div>}
                    </Link>
                    <Link
                      href="/contact-us"
                      className={`inline-block text-white px-6 py-3 rounded-md text-xl font-medium transition-colors mt-4 ${
                        isActive("/contact-us")
                          ? "bg-primary-dark ring-2 ring-primary"
                          : "bg-primary hover:bg-primary-dark"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact us
                    </Link>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bond Click Industries</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

