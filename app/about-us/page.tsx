"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Home, Users, Package, Award, MapPin, Target, Compass, ArrowRight, Phone } from "lucide-react";
import ScrollAnimation, {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  zoomIn,
  fadeInRight,
} from "@/components/animations/scroll-animation";
import StaggerContainer from "@/components/animations/stagger-container";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="px-4 md:!px-0">
      {/* Page Header with Animation */}
      <div className="container mx-auto p-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <ScrollAnimation variant={fadeInDown}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Us</h1>
            <div className="breadcrumb">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-white">About Us</span>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ">
            {/* Left side with image and experience badge */}
            <ScrollAnimation variant={fadeInLeft} threshold={0.1} className="h-full">
              <div className="lg:col-span-5 h-full">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Main image */}
                  <div className="col-span-12 lg:col-span-8 h-full row-span-2">
                    <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-primary/30">
                      <Image
                        src="/placeholder.svg?height=600&width=400&text=Construction+Expertise"
                        alt="Construction Expertise"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Experience box */}
                  <div className="col-span-12 lg:col-span-4">
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 h-full flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:16px_16px] bg-[position:0_0,8px_8px]"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-baseline gap-1">
                          <div className="text-7xl font-bold text-white mb-2 leading-none">25</div>
                          <div className="text-2xl text-white/80">+</div>
                        </div>
                        <div className="text-lg font-medium text-white/90">
                          Years Of
                          <br />
                          <span className="text-2xl font-semibold">Experience</span>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Second image */}
                  <div className="col-span-12 lg:col-span-4">
                    <div className="relative h-full min-h-[150px] rounded-xl overflow-hidden bg-gray-800">
                      <Image
                        src="/placeholder.svg?height=300&width=200&text=Quality"
                        alt="Quality Materials"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right side content */}
            <ScrollAnimation variant={fadeInRight} threshold={0.1}>
              <div>
                <span className="text-sm text-primary font-medium mb-2 block">WHY CHOOSE US</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">About us ?</h2>
                <p className="text-gray-600 mb-8">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
                  duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis
                  sollicitudin dignissim habitant. Egestas nulla
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Passport Plus Card */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Image src="/passport-icon.svg" alt="Passport Plus" width={32} height={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Passport Plus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <Check size={20} className="text-primary mr-2" />
                        Beyond Border Immigration
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check size={20} className="text-primary mr-2" />
                        Worldwide Visa Assistance
                      </li>
                    </ul>
                  </div>

                  {/* Global Entry Card */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Image src="/global-icon.svg" alt="Global Entry" width={32} height={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Global Entry</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <Check size={20} className="text-primary mr-2" />
                        GlobeTrot Visa Services
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check size={20} className="text-primary mr-2" />
                        Infinity Visa Solutions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 items-center">
                  <Link href="/read-more" className="text-primary font-medium hover:underline inline-flex items-center">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link href="tel:(808)555-0111" className="inline-flex items-center text-gray-600">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                      <Phone className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm">Need help?</div>
                      <div className="font-medium">(808) 555-0111</div>
                    </div>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimation variant={fadeInDown}>
              <span className="text-sm text-primary font-medium flex items-center justify-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl font-bold mb-6">Building Excellence, Delivering Trust</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With years of expertise in construction materials and solutions, we've earned our reputation through
                innovation, quality, and unwavering commitment to our clients' success.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Premium Quality Products",
                description:
                  "Our construction materials meet the highest industry standards, ensuring durability and performance in every project.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15L8.5 9.5L12 4L15.5 9.5L12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 20H4L8.5 9.5L12 15L15.5 9.5L20 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Technical Expertise",
                description:
                  "Our team of experts provides comprehensive technical support and innovative solutions for complex construction challenges.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Nationwide Network",
                description:
                  "With our extensive distribution network, we ensure timely delivery and support across the country.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22V12H15V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} variant={fadeInUp} delay={index * 0.2} className="group">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <span className="text-6xl font-bold text-gray-100">{item.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollAnimation variant={fadeInUp}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
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
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-primary">
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
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-secondary">
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
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-all">
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
                className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-all">
                Work With Us
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact CTA with Animation - Improved Responsiveness */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
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
                    className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base">
                    Contact Us
                  </Link>
                </div>
                <ScrollAnimation variant={fadeInRight} delay={0.1} threshold={0.1} className="mt-4 md:mt-0">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                    <Image src="/map1.svg" alt="Contact Us" fill className="object-contain rounded-lg" />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
