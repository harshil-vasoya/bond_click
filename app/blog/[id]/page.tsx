"use client"

import Image from "next/image"
import Link from "next/link"
import { Home, MessageSquare, User, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import ScrollAnimation, { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animations/scroll-animation"
import { useState } from "react"

export default function BlogDetail({ params }: { params: { id: string } }) {
  const [copied, setCopied] = useState(false)

  // In a real app, you would fetch this data from an API or database
  const post = {
    id: params.id,
    title: "Unity Bridge Visa Consultants",
    date: "October 30, 2024",
    author: "admin",
    comments: 5,
    category: "Construction",
    image: "/placeholder.svg?height=600&width=1200&text=Featured+Image",
    content: [
      "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere.",
      "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere.",
    ],
    quote:
      "With a commitment to driving technological revolution, our IT solutions and tour design services are the cornerstone of your digital progression. We transcend boundaries enabling businesses to not",
    quoteAuthor: "Stanlo Iainto",
    quoteTitle: "Author®",
    section: {
      title: "Explore Beyond Boundaries Wanderlust Unleashed",
      content:
        "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.Aliquam.",
      tips: ["Mistakes To Avoid", "Your Startup", "Know About Fonts"],
      image: "/placeholder.svg?height=400&width=400&text=Section+Image",
    },
    conclusion:
      "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere",
    tags: ["Spa Retreats", "Wine Tours", "Travel Pack"],
    relatedPosts: [
      {
        id: 1,
        title: "Wonders of Ancient Civilizations",
        image: "/placeholder.svg?height=300&width=400&text=Related+1",
      },
      {
        id: 2,
        title: "The Road to Adventure",
        image: "/placeholder.svg?height=300&width=400&text=Related+2",
      },
      {
        id: 3,
        title: "Journeys of Discovery",
        image: "/placeholder.svg?height=300&width=400&text=Related+3",
      },
    ],
  }

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Details</h1>
          <div className="breadcrumb">
            <Link href="/">
              <Home size={16} />
            </Link>
            <span>&gt;</span>
            <Link href="/blog">Blog</Link>
            <span>&gt;</span>
            <span>Blog Details</span>
          </div>
        </div>
      </div>

      {/* Blog Detail */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation variant={fadeInUp}>
              <div className="bg-gray-100 h-[300px] sm:h-[400px] md:h-[500px] relative rounded-lg overflow-hidden mb-8">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-2">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>By {post.author}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <MessageSquare size={14} className="mr-1" />
                  <span>Comments ({post.comments})</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

              <div className="prose prose-lg max-w-none mb-8">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <ScrollAnimation variant={fadeInLeft} className="md:col-span-1">
                <div className="bg-gray-100 h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={post.section.image || "/placeholder.svg"}
                    alt="Blog Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant={fadeInRight} className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">{post.section.title}</h2>
                <p className="text-gray-600 mb-6">{post.section.content}</p>
                <ul className="space-y-2 mb-6">
                  {post.section.tips.map((tip, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>

            <ScrollAnimation variant={fadeInUp}>
              <blockquote className="border-l-4 border-primary pl-4 py-2 my-8 bg-gray-50 rounded-r-lg">
                <p className="text-lg italic mb-4">{post.quote}</p>
                <div className="flex items-center">
                  <span className="font-bold">{post.quoteAuthor}</span>
                  <span className="mx-2">-</span>
                  <span>{post.quoteTitle}</span>
                </div>
              </blockquote>

              <h2 className="text-2xl font-bold mb-4">Roam The Globe Write Your Story</h2>
              <p className="text-gray-600 mb-8">{post.conclusion}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-b border-gray-200 py-6 my-8">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="text-gray-700 font-medium mb-4 sm:mb-0">Share this post:</div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      <Facebook size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      <Linkedin size={16} />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors relative"
                      onClick={copyToClipboard}
                    >
                      <Share2 size={16} />
                      {copied && (
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

