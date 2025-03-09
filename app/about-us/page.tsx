"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Home, Users, Package, Award, MapPin } from "lucide-react"
import ScrollAnimation, {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  zoomIn,
} from "@/components/animations/scroll-animation"
import StaggerContainer from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <div>
      {/* Page Header with Animation */}
      <div className="page-header">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInDown}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <div className="breadcrumb">
              <Link href="/">
                <Home size={16} />
              </Link>
              <span>&gt;</span>
              <span>About Us</span>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* About Section with Animation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant={fadeInLeft} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="About Image 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[200px] mt-8">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="About Image 2"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[200px] col-span-2">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="About Image 3"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <ScrollAnimation variant={zoomIn} delay={0.3}>
                <div className="bg-primary text-white p-6 rounded-lg mt-4">
                  <div className="text-3xl font-bold">25</div>
                  <div>Years Of Experience</div>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>

            <ScrollAnimation variant={fadeInRight} className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">WHY CHOOSE US</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Where Wanderlust Meets Dream Destinations</h3>
              <p className="text-gray-600 mb-6">
                The BOND CLICK name itself derived from construction & Cement which give us a driving strength to serve
                the construction industry at large since 2015. We, BOND CLICK are leader in developing and providing
                custom made constructive solution for almost all type of construction projects.
              </p>
              <p className="text-gray-600 mb-6">
                Our products are available through a well organised chain of Super Distributors, Area Distributors &
                Authorised Dealer for Trade Market. We also cater to the construction projects by public sector as well
                as private sector through our network.
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div className="flex items-start" variants={fadeInUp}>
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      alt="Passport Plus"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Passport Plus</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-2" />
                        <span className="text-sm">Expedited Visa Processing</span>
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-2" />
                        <span className="text-sm">Worldwide Visa Assistance</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={fadeInUp}>
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      alt="Global Entry"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Entry</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-2" />
                        <span className="text-sm">Seamless TSA PreCheck</span>
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-2" />
                        <span className="text-sm">Priority Pass Assistance</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </StaggerContainer>

              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium">
                Read More
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Animation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">PROCESS OVERVIEW</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why us?</h3>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "01",
                title: "Voyager Agency",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
              },
              {
                icon: "02",
                title: "International Access Visas",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
              },
              {
                icon: "03",
                title: "Gateway to Global Citizenship",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-sm" variants={fadeInUp}>
                <div className="text-3xl font-bold text-gray-200 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="About Info 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="About Info 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="About Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">About us</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros justo, posuere lobortis viverra
                laoreet augue mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="text-center">
                <Link
                  href="/contact-us"
                  className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-all"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Our Achievements</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                value: "10k+",
                label: "Happy Clients",
                color: "bg-white/20",
              },
              {
                icon: <Package className="w-10 h-10 md:w-12 md:h-12" />,
                value: "20+",
                label: "Products",
                color: "bg-secondary/20",
              },
              {
                icon: <Award className="w-10 h-10 md:w-12 md:h-12" />,
                value: "5k+",
                label: "Projects",
                color: "bg-white/20",
              },
              {
                icon: <MapPin className="w-10 h-10 md:w-12 md:h-12" />,
                value: "100+",
                label: "Distributors",
                color: "bg-secondary/20",
              },
            ].map((stat, index) => (
              <ScrollAnimation key={index} variant={zoomIn} delay={index * 0.1} className="flex flex-col items-center">
                <div className={`${stat.color} p-4 md:p-6 rounded-full mb-4 text-white`}>{stat.icon}</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-sm md:text-base lg:text-lg text-white/90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-16 text-center">
            <ScrollAnimation variant={fadeInUp}>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-all"
              >
                Work With Us
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt={`Partner ${item}`}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

