"use client"
import Link from "next/link"
import { ArrowRight, Home, Star } from "lucide-react"
import ScrollAnimation, { fadeInUp } from "@/components/animations/scroll-animation"
import StaggerContainer from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import TiltCard from "@/components/animations/tilt-card"
import AnimatedText from "@/components/animations/animated-text"

const products = [
  {
    id: 1,
    name: "Three Star",
    type: "Stone Adhesive",
    description: "Premium quality adhesive for stone and heavy tiles. Maximum strength and durability.",
    weight: "20kg",
    color: "primary",
    stars: 3,
    features: ["Water Resistant", "Heavy Duty", "Maximum Strength"],
    certifications: ["ISO", "CE", "Quality"],
  },
  {
    id: 2,
    name: "Two Star",
    type: "Tile Adhesive",
    description: "Professional grade tile adhesive for all types of tiles. Enhanced bonding strength.",
    weight: "20kg",
    color: "secondary",
    stars: 2,
    features: ["Water Resistant", "Strong Bond", "Versatile"],
    certifications: ["ISO", "CE", "Quality"],
  },
  {
    id: 3,
    name: "One Star",
    type: "Floor Adhesive",
    description: "Standard grade adhesive for basic tiling needs. Reliable and easy to use.",
    weight: "20kg",
    color: "tertiary",
    stars: 1,
    features: ["Water Resistant", "Easy Apply", "Durable"],
    certifications: ["ISO", "CE", "Quality"],
  },
]

export default function Products() {
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <AnimatedText text="Our Products" className="text-3xl md:text-4xl font-bold mb-4 text-white" />
          <div className="breadcrumb">
            <Link href="/">
              <Home size={16} />
            </Link>
            <span>&gt;</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Professional Grade Adhesives</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Discover our range of high-quality adhesives designed for professional use. From stone to tile
              applications, we have the perfect solution for your needs.
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <TiltCard>
                  <div
                    className={`product-card ${product.stars === 3 ? "three-star" : product.stars === 2 ? "two-star" : "one-star"}`}
                  >
                    <div className="stripe" />
                    <div className="content">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: product.stars }).map((_, i) => (
                          <Star key={i} size={16} className={`fill-${product.color} text-${product.color}`} />
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                      <p className="text-lg text-gray-800 mb-4">{product.type}</p>

                      <div className="space-y-4">
                        <p className="text-gray-600">{product.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, index) => (
                            <span
                              key={index}
                              className={`text-xs px-2 py-1 rounded-full bg-${product.color}/10 text-${product.color}`}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-gray-600">
                            Net Weight: <span className="font-semibold">{product.weight}</span>
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className={`inline-flex items-center text-${product.color} hover:underline`}
                          >
                            View Details <ArrowRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}

