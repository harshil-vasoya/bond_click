"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Home, Users, Package, Award, MapPin, Target, Compass } from "lucide-react"
import ScrollAnimation, { fadeInDown, fadeInUp, fadeInLeft, zoomIn } from "@/components/animations/scroll-animation"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            {/* Photos Column - 5 columns on large screens */}
            <ScrollAnimation variant={fadeInLeft} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Construction"
                      alt="Construction"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Materials"
                      alt="Materials"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=500&width=300&text=Solutions"
                      alt="Solutions"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Content Column - 7 columns on large screens */}
            <div className="lg:col-span-7">
              <ScrollAnimation variant={fadeInUp}>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Construction Solutions Experts</h3>
              </ScrollAnimation>

              <ScrollAnimation variant={fadeInUp} delay={0.1}>
                <p className="text-gray-700 mb-6">
                  The BOND CLICK name itself derived from construction & Cement which give us a driving strength to
                  serve the construction industry at large since 2015. We, BOND CLICK are leader in developing and
                  providing custom made constructive solution for almost all type of construction projects with
                  unmatched high performance construction products with industry best technical support combined with
                  customer services.
                </p>
                <p className="text-gray-700 mb-6">
                  We are specialized in Tile Adhesive, ready mix mortar, Epoxy Grouts, Waterproofing Chemicals,
                  Engineering Grouts and speciality chemicals for repairs and rehabilitation of Construction.
                </p>
                <p className="text-gray-700 mb-6">
                  BOND CLICK has strong standing in the market with backbone of highly talented skilled chemists and
                  engineers. We have conviction to be a leader in this field by building reputation for innovation,
                  dedicated human resource to serve our clients, unmatched quality experience to the users of our
                  products, knowledge enhancing technical support to architects, engineers, contractors and ultimate
                  decision makers like builders and investors.
                </p>
              </ScrollAnimation>

              <ScrollAnimation variant={fadeInUp} delay={0.2}>
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-4">Our Product Categories</h4>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp}>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>TILE & STONE Adhesive</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Epoxy Grouts</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Deco. White Cement</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Engineering Grouts</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Waterproofing Chemicals</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Floor Hardner</span>
                        </li>
                        <li className="flex items-center">
                          <Check size={18} className="text-primary mr-3" />
                          <span>Ready Mis Plaster & Mortars</span>
                        </li>
                      </ul>
                    </motion.div>
                  </StaggerContainer>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant={fadeInUp} delay={0.3} className="text-center">
                <Link
                  href="/products"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium inline-block"
                >
                  View Our Products
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">OUR FACILITIES</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Multi-Location Manufacturing</h3>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "01",
                title: "Himatnagar, Gujarat",
                description:
                  "Our primary manufacturing facility is located in Himatnagar, Gujarat State, equipped with state-of-the-art technology for producing high-quality construction materials.",
              },
              {
                icon: "02",
                title: "Vapi, Gujarat",
                description:
                  "Our Vapi facility (currently under implementation) will expand our production capacity to meet growing demand across western India.",
              },
              {
                icon: "03",
                title: "Bhiwandi, Maharashtra",
                description:
                  "Our upcoming facility in Bhiwandi, Maharashtra State (under implementation) will strengthen our presence in the western region of India.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-sm" variants={fadeInUp}>
                <div className="text-3xl font-bold text-gray-200 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <ScrollAnimation variant={fadeInUp} delay={0.3} className="mt-8 text-center">
            <p className="text-gray-700 italic">
              We are also exploring to export our products to South Africa, Dubai and Nepal.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision & Mission Section with Single Photo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">OUR VISION & MISSION</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Building a Sustainable Future</h3>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column - Spans 5 columns on large screens */}
            <ScrollAnimation variant={fadeInLeft} className="lg:col-span-5">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image src="/about-us-4.svg" alt="Construction Workers" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-bold text-xl">BOND CLICK</div>
                  <div className="text-white/80 text-sm">WE BUILD YOUR DREAM</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Content Column - Spans 7 columns on large screens */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <ScrollAnimation
                  variant={fadeInUp}
                  delay={0.1}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-primary"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Vision</h4>
                  </div>
                  <p className="text-gray-700">
                    To develop, manufacture and supply innovative construction material and chemicals that enhance
                    productivity, workability and durability which will contribute to sustainable development.
                  </p>
                </ScrollAnimation>

                {/* Mission Card */}
                <ScrollAnimation
                  variant={fadeInUp}
                  delay={0.2}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-secondary"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <Compass className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold">Mission</h4>
                  </div>
                  <p className="text-gray-700">
                    We would have a pan India multi-locational manufacturing and distribution network by 2027. Become
                    the tile adhesive master and leader.
                  </p>
                </ScrollAnimation>
              </div>

              <ScrollAnimation variant={fadeInUp} delay={0.3} className="mt-8">
                <p className="text-gray-700 mb-6">
                  Our continuous commitment to words customer support by working in symphony with architects, structural
                  and civil engineers, contractors, applicator to understand their needs and requirements for cutting
                  edge technical solution to their unique and diverse requirements of every stage and type of
                  construction activity.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-all"
                >
                  Work With Us
                </Link>
              </ScrollAnimation>
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

      {/* Distribution Network Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Distribution Network</h2>
          </ScrollAnimation>

          <ScrollAnimation variant={fadeInUp} delay={0.1}>
            <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
              Our products are available through a well organised chain of Super Distributors, Area Distributors &
              Authorised Dealer for Trade Market. We also cater to the construction projects by public sector as well as
              private sector through our network.
            </p>
          </ScrollAnimation>

          <ScrollAnimation variant={fadeInUp} delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                "Super Distributors",
                "Area Distributors",
                "Authorised Dealers",
                "Project Partners",
                "Retail Network",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 hover:bg-primary hover:text-white p-4 rounded-lg transition-all duration-300 w-[150px] h-[100px] flex items-center justify-center">
                    <span className="font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

