"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeDropdown = () => setActiveDropdown(null);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const productCategories = [
    { name: "Three Star", href: "/products/1" },
    { name: "Two Star", href: "/products/2" },
    { name: "One Star", href: "/products/3" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 md:!px-0 ${
          scrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.05)]" : "py-5 bg-white/90"
        }`}>
        <div className="container mx-auto !px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-auto h-auto">
                <Image src="/logo.svg" alt="Bond Click Logo" width={50} height={50} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl tracking-wide text-gray-800">BOND CLICK</span>
                <span className="text-xs tracking-wider text-primary">WE BUILD YOUR DREAM</span>
              </div>
            </Link>

            {/* Mobile Menu Button in Header */}
            <button
              className="md:hidden z-50 w-12 h-12 flex items-center justify-center rounded-md bg-primary text-white shadow-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center">
                <li className="group relative px-1">
                  <Link
                    href="/"
                    className={`relative block px-4 py-2 font-medium text-sm tracking-wider transition-colors ${
                      isActive("/") ? "text-primary" : "text-gray-700 group-hover:text-primary"
                    }`}>
                    <span className="relative z-10">HOME</span>
                    <span
                      className={`absolute inset-x-3 bottom-1.5 h-[2px] origin-left transform transition-transform duration-300 ${
                        isActive("/") ? "scale-x-100 bg-primary" : "scale-x-0 bg-primary group-hover:scale-x-100"
                      }`}></span>
                  </Link>
                </li>

                <li className="group relative px-1">
                  <Link
                    href="/about-us"
                    className={`relative block px-4 py-2 font-medium text-sm tracking-wider transition-colors ${
                      isActive("/about-us") ? "text-primary" : "text-gray-700 group-hover:text-primary"
                    }`}>
                    <span className="relative z-10">ABOUT US</span>
                    <span
                      className={`absolute inset-x-3 bottom-1.5 h-[2px] origin-left transform transition-transform duration-300 ${
                        isActive("/about-us")
                          ? "scale-x-100 bg-primary"
                          : "scale-x-0 bg-primary group-hover:scale-x-100"
                      }`}></span>
                  </Link>
                </li>

                {/* Products Dropdown */}
                <li className="group relative px-1">
                  <button
                    onClick={() => toggleDropdown("products")}
                    className={`relative flex items-center px-4 py-2 font-medium text-sm tracking-wider transition-colors ${
                      isActive("/products") ? "text-primary" : "text-gray-700 group-hover:text-primary"
                    }`}>
                    <span className="relative z-10">PRODUCTS</span>
                    <ChevronDown
                      size={14}
                      className={`ml-1.5 transition-transform duration-300 ${
                        activeDropdown === "products" ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute inset-x-3 bottom-1.5 h-[2px] origin-left transform transition-transform duration-300 ${
                        isActive("/products")
                          ? "scale-x-100 bg-primary"
                          : "scale-x-0 bg-primary group-hover:scale-x-100"
                      }`}></span>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-100">
                        <div className="py-1">
                          <Link
                            href="/products"
                            className={`block px-4 py-2.5 text-sm ${
                              pathname === "/products"
                                ? "bg-primary/5 text-primary font-medium"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                            }`}
                            onClick={closeDropdown}>
                            All Products
                          </Link>
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className={`block px-4 py-2.5 text-sm ${
                                pathname === category.href
                                  ? "bg-primary/5 text-primary font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                              }`}
                              onClick={closeDropdown}>
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li className="group relative px-1">
                  <Link
                    href="/blog"
                    className={`relative block px-4 py-2 font-medium text-sm tracking-wider transition-colors ${
                      isActive("/blog") ? "text-primary" : "text-gray-700 group-hover:text-primary"
                    }`}>
                    <span className="relative z-10">BLOG</span>
                    <span
                      className={`absolute inset-x-3 bottom-1.5 h-[2px] origin-left transform transition-transform duration-300 ${
                        isActive("/blog") ? "scale-x-100 bg-primary" : "scale-x-0 bg-primary group-hover:scale-x-100"
                      }`}></span>
                  </Link>
                </li>

                <li className="ml-3">
                  <Link
                    href="/contact-us"
                    className={`relative overflow-hidden group ${isActive("/contact-us") ? "ring-primary" : ""}`}>
                    <motion.span
                      className="relative z-10 px-6 py-2 font-medium text-white rounded-md inline-block transition-colors bg-primary text-sm tracking-wider"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 1 }}>
                      Contact us
                    </motion.span>
                    <span className="absolute inset-0 rounded-md bg-primary-dark scale-0 group-hover:scale-100 transition-transform origin-bottom duration-300"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 z-[90] md:hidden">
            <div className="flex flex-col p-6 h-full overflow-y-auto">
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative w-auto h-auto">
                    <Image src="/logo.svg" alt="Bond Click Logo" width={50} height={50} className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">BOND CLICK</span>
                    <span className="text-xs text-primary">WE BUILD YOUR DREAM</span>
                  </div>
                </Link>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu">
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-5 mt-4">
                {[
                  { name: "HOME", path: "/" },
                  { name: "ABOUT US", path: "/about-us" },
                  { name: "BLOG", path: "/blog" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-xl font-medium py-2 px-3 rounded-md transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-primary/5"
                        : "text-gray-800 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}

                {/* Products Dropdown */}
                <div className="py-2 px-3 rounded-md">
                  <button
                    onClick={() => toggleDropdown("mobile-products")}
                    className={`flex items-center justify-between w-full text-xl font-medium ${
                      isActive("/products") ? "text-primary" : "text-gray-800 hover:text-primary"
                    }`}>
                    <span>PRODUCTS</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeDropdown === "mobile-products" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Active indicator removed */}

                  <AnimatePresence>
                    {activeDropdown === "mobile-products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <div className="py-3 pl-4 space-y-4 mt-3 border-l-2 border-primary/20">
                          <Link
                            href="/products"
                            className={`block text-lg ${
                              pathname === "/products" ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                            }`}
                            onClick={() => setIsMenuOpen(false)}>
                            All Products
                          </Link>
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className={`block text-lg ${
                                pathname === category.href
                                  ? "text-primary font-medium"
                                  : "text-gray-600 hover:text-primary"
                              }`}
                              onClick={() => setIsMenuOpen(false)}>
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Button */}
                <div className="pt-6 mt-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center w-full text-white px-6 py-3 rounded-md text-lg font-medium bg-primary hover:bg-primary-dark transition-colors shadow-sm"
                    onClick={() => setIsMenuOpen(false)}>
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto">
                <div className="border-t border-gray-100 pt-6 mt-10">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bond Click Industries</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
