"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, User, Calendar, Star } from "lucide-react"
import ScrollAnimation, {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  zoomIn,
  fadeInDown,
} from "@/components/animations/scroll-animation"

export default function Home() {
  // Reference for the container
  const containerRef = useRef(null)

  // Setup smooth scroll behavior
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = "smooth"

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="overflow-x-hidden" ref={containerRef}>
      {/* Hero Section with Animation - Improved Responsiveness */}
      <section className="relative min-h-[500px] md:min-h-[600px] w-full">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0">
          <Image src="/hero-section.svg" alt="Bond Click Hero" fill className="object-cover hidden md:block" priority />

          {/* Mobile Image (sm and below) */}
          <Image
            src="/hero-section-mobile.svg"
            alt="Bond Click Hero"
            fill
            className="object-cover block md:hidden"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center pt-4 md:py-16">
          <ScrollAnimation variant={fadeInDown} threshold={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
              We Build Your Dream
            </h1>
          </ScrollAnimation>
          <ScrollAnimation variant={fadeInUp} delay={0.1} threshold={0.1}>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 md:mb-8 max-w-2xl">
              Leader in developing and providing custom made constructive solutions for all types of construction
              projects.
            </p>
          </ScrollAnimation>
          <ScrollAnimation variant={fadeInUp} delay={0.2} threshold={0.1}>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/products"
                className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base"
              >
                Explore Products
              </Link>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Products with Animation - Improved Responsiveness */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Featured Products</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                We are specialized in Tile Adhesive, ready mix mortar, Epoxy Grouts, Waterproofing Chemicals,
                Engineering Grouts and speciality chemicals for repairs and rehabilitation of Construction.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Product 1: Three Star */}
            <ScrollAnimation variant={fadeInUp} delay={0.1} threshold={0.1}>
              <div className="product-card three-star h-full shadow-md">
                <div className="stripe" />
                <div className="content h-full flex flex-col">
                  <div className="flex-1">
                    <div className="h-48 sm:h-56 md:h-64 relative mb-4">
                      <Image src={`/photos_1.jpg`} alt="Three Star" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Stone Adhesive</h3>
                    <div className="flex items-center mb-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Premium quality adhesive for professional use. Water resistant and easy to apply.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">₹350.00</span>
                    <Link href="/products/1" className="flex items-center text-primary hover:underline">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Product 2: Two Star */}
            <ScrollAnimation variant={fadeInUp} delay={0.2} threshold={0.1}>
              <div className="product-card two-star h-full shadow-md">
                <div className="stripe" />
                <div className="content h-full flex flex-col">
                  <div className="flex-1">
                    <div className="h-48 sm:h-56 md:h-64 relative mb-4">
                      <Image src={`/photos_2.jpg`} alt="Two Star" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Tile Adhesive</h3>
                    <div className="flex items-center mb-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <Star size={16} className="text-gray-300" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Professional grade tile adhesive for all types of tiles. Enhanced bonding strength.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">₹350.00</span>
                    <Link href="/products/2" className="flex items-center text-primary hover:underline">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Product 3: One Star */}
            <ScrollAnimation variant={fadeInUp} delay={0.3} threshold={0.1}>
              <div className="product-card one-star h-full shadow-md">
                <div className="stripe" />
                <div className="content h-full flex flex-col">
                  <div className="flex-1">
                    <div className="h-48 sm:h-56 md:h-64 relative mb-4">
                      <Image src={`/photos_3.jpeg`} alt="One Star" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Floor Adhesiver</h3>
                    <div className="flex items-center mb-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <Star size={16} className="text-gray-300" />
                      <Star size={16} className="text-gray-300" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      Standard grade adhesive for basic tiling needs. Reliable and easy to use.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">₹350.00</span>
                    <Link href="/products/3" className="flex items-center text-primary hover:underline">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/products"
                className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base"
              >
                View All Products
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section with Animation - Improved Responsiveness */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollAnimation variant={fadeInLeft} threshold={0.1}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Bond Click</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  The BOND CLICK name itself derived from construction & Cement which give us a driving strength to
                  serve the construction industry at large since 2015. We, BOND CLICK are leader in developing and
                  providing custom made constructive solution for almost all type of construction projects.
                </p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Our products are available through a well organised chain of Super Distributors, Area Distributors &
                  Authorised Dealer for Trade Market. We also cater to the construction projects by public sector as
                  well as private sector through our network.
                </p>
                <div className="space-y-3 mb-6 md:mb-8">
                  {["Tile Adhesive", "Epoxy Grouts", "Engineering Grouts", "Waterproofing Chemicals"].map(
                    (item, index) => (
                      <div key={index} className="flex items-start">
                        <Check size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <Link
                  href="/about-us"
                  className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant={fadeInRight} className="mt-6 lg:mt-0" threshold={0.1}>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="About Bond Click"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation - Improved Responsiveness */}
      <section className="py-10 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            {[
              { value: "10k+", label: "Happy Clients" },
              { value: "20+", label: "Products" },
              { value: "5k+", label: "Projects" },
              { value: "100+", label: "Distributors" },
            ].map((stat, index) => (
              <ScrollAnimation key={index} variant={zoomIn} delay={index * 0.05} threshold={0.1}>
                <div className="px-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-base sm:text-lg">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section with Animation - Improved Responsiveness */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Latest Blog Posts</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                Stay updated with our latest news, tips, and insights about construction materials and techniques.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                title: "Wonders of Ancient Civilizations: A Journey Through Egypt",
                date: "October 19, 2022",
                author: "admin",
                comments: 5,
                category: "Travel",
                excerpt:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
                image: "/placeholder.svg?height=240&width=400&text=Egypt",
              },
              {
                id: 2,
                title: "The Road to Adventure: Embarking on New Horizons",
                date: "October 19, 2022",
                author: "admin",
                comments: 3,
                category: "Adventure",
                excerpt:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
                image: "/placeholder.svg?height=240&width=400&text=Adventure",
              },
              {
                id: 3,
                title: "Journeys of Discovery: Uncovering Hidden Treasures",
                date: "October 19, 2022",
                author: "admin",
                comments: 7,
                category: "Discovery",
                excerpt:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
                image: "/placeholder.svg?height=240&width=400&text=Discovery",
              },
            ].map((post, index) => (
              <ScrollAnimation
                key={index}
                variant={fadeInUp}
                delay={index * 0.1}
                threshold={0.1}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
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
                  </div>

                  <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:underline text-sm mt-auto self-start"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/blog"
                className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base"
              >
                View All Posts
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact CTA with Animation - Improved Responsiveness */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch With Us</h2>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    Have questions about our products or services? Contact us today and our team will be happy to assist
                    you.
                  </p>
                  <div className="flex items-center mb-4">
                    <Phone className="text-primary mr-2 sm:mr-3" size={18} />
                    <span className="text-base sm:text-lg font-medium">+91 77 108 76 108</span>
                  </div>
                  <Link
                    href="/contact-us"
                    className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base"
                  >
                    Contact Us
                  </Link>
                </div>
                <ScrollAnimation variant={fadeInRight} delay={0.1} threshold={0.1} className="mt-4 md:mt-0">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                    <Image
                      src="/contact-us.svg"
                      alt="Contact Us"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

