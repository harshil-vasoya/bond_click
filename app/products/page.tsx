"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ScrollAnimation, { fadeInUp } from "@/components/animations/scroll-animation";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Stone Adhesive",
      category: "Premium",
      rating: 5,
      image: "/photos_1.jpg",
      description: "Premium quality adhesive for professional use. Water resistant and easy to apply.",
      features: ["Water Resistant", "High Strength", "Easy Application", "Extended Open Time"],
      price: "₹350.00",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Tile Adhesive",
      category: "Professional",
      rating: 4,
      image: "/photos_2.jpg",
      description: "Professional grade tile adhesive for all types of tiles. Enhanced bonding strength.",
      features: ["Anti-Slip", "Crack Resistant", "Interior & Exterior", "Quick Setting"],
      price: "₹300.00",
      badge: "New",
    },
    {
      id: 3,
      name: "Floor Adhesive",
      category: "Standard",
      rating: 4,
      image: "/photos_3.jpeg",
      description: "Standard grade adhesive for basic tiling needs. Reliable and easy to use.",
      features: ["Durable Bond", "Cost Effective", "Easy Mixing", "Good Coverage"],
      price: "₹250.00",
      badge: "Popular",
    },
  ];

  return (
    <div className="px-4 md:!px-0">
      {/* Page Header */}
      <div className="container mx-auto p-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Products</h1>
            <div className="breadcrumb">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-white">Products</span>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto !px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollAnimation key={index} variant={fadeInUp} delay={index * 0.1}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-primary text-white text-sm px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Rating */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-primary font-medium">{product.category}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
