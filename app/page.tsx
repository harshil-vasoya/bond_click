"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, User, Calendar, Star } from "lucide-react";
import ScrollAnimation, {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  zoomIn,
  fadeInDown,
} from "@/components/animations/scroll-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FAQItem from "./components/FAQItem";

export default function Home() {
  // Reference for the container
  const containerRef = useRef(null);
  // Add slider ref
  const sliderRef = useRef<Slider>(null);
  const testimonialSliderRef = useRef<Slider>(null);

  // Setup smooth scroll behavior
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="overflow-x-hidden" ref={containerRef}>
      {/* Hero Section with Animation - Improved Responsiveness */}
      <section className="relative min-h-[500px] md:min-h-[600px] w-full">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/hero-section.webp"
            alt="Bond Click Hero"
            fill
            className="object-cover hidden md:block"
            priority
          />

          {/* Mobile Image (sm and below) */}
          <Image
            src="/hero-section-mobile.webp"
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
                className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base">
                Explore Products
              </Link>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
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
                    )
                  )}
                </div>
                <Link
                  href="/about-us"
                  className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base">
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

      {/* Our Popular Products Section */}
      <section className="pt-12 md:pt-16 bg-white">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm text-primary font-medium mb-2 block">SUPPORTING COACHING</span>
              <h2 className="text-3xl md:text-4xl font-bold">Our popular products</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...sliderSettings} className="product-slider -mx-4">
            {[
              {
                title: "TOFEL Coaching",
                description: "There are many variati of passages of engineer",
                image: "/placeholder.svg",
              },
              {
                title: "IELTS Coaching",
                description: "There are many variati of passages of engineer",
                image: "/placeholder.svg",
              },
              {
                title: "OET Coaching",
                description: "There are many variati of passages of engineer",
                image: "/placeholder.svg",
              },
              {
                title: "PTE Coaching",
                description: "There are many variati of passages of engineer",
                image: "/placeholder.svg",
              },
            ].map((product, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:cursor-pointer">
                  <div className="relative h-64">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Featured Products with Animation - Improved Responsiveness */}
      {/* <section className="py-12 md:py-16 bg-gray-50">
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
            <ScrollAnimation variant={fadeInUp} delay={0.1} threshold={0.1}>
              <div className="product-card three-star h-full shadow-md">
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

            <ScrollAnimation variant={fadeInUp} delay={0.2} threshold={0.1}>
              <div className="product-card two-star h-full shadow-md">
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

            <ScrollAnimation variant={fadeInUp} delay={0.3} threshold={0.1}>
              <div className="product-card one-star h-full shadow-md">
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
                className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base">
                View All Products
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why us ?</h2>
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

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Happy customers</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Customer Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Customer"
                alt="Happy Customer"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side - Testimonial Slider */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="mb-8">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 24H6C6 14 10 10 18 10V16C14 16 14 18 14 24ZM32 24H24C24 14 28 10 36 10V16C32 16 32 18 32 24Z"
                    fill="white"
                  />
                </svg>
              </div>

              <Slider ref={testimonialSliderRef} {...testimonialSettings} className="testimonial-slider">
                {[
                  {
                    quote:
                      "We have been operating for over an providin top-notch services to our clients and build strong track record in the industry.We have been operating for over a decad providi ina top-notch We have been operating",
                    author: "Albert Flores",
                    position: "Web Designer",
                    image: "/placeholder.svg?height=80&width=80",
                  },
                  {
                    quote:
                      "Outstanding service and exceptional quality. The team's dedication to excellence is evident in every aspect of their work. Highly recommended for anyone seeking top-tier solutions.",
                    author: "Sarah Johnson",
                    position: "Project Manager",
                    image: "/placeholder.svg?height=80&width=80",
                  },
                  {
                    quote:
                      "Professional, reliable, and innovative. Working with this team has been a game-changer for our projects. Their expertise and attention to detail are unmatched.",
                    author: "Michael Chen",
                    position: "Architecture Lead",
                    image: "/placeholder.svg?height=80&width=80",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="focus:outline-none">
                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">{testimonial.quote}</p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-white/80">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => testimonialSliderRef.current?.slickPrev()}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white rotate-180" />
                </button>
                <button
                  onClick={() => testimonialSliderRef.current?.slickNext()}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - FAQs */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Frequently asked questions</h2>

              <div className="space-y-6">
                {[
                  {
                    name: "Courtney Henry",
                    role: "Medical Assistant",
                    answer:
                      "We offer a comprehensive range of adhesives including Stone Adhesive, Tile Adhesive, and Floor Adhesive. Each product is specially formulated for specific applications.",
                  },
                  {
                    name: "Courtney Henry",
                    role: "Marketing Coordinator",
                    answer:
                      "Our adhesives typically take 24-48 hours to fully cure, depending on environmental conditions such as temperature and humidity.",
                  },
                  {
                    name: "Albert Flores",
                    role: "Web Designer",
                    answer:
                      "Yes, we provide comprehensive technical support for all our products. Our team of experts is available to guide you through the application process.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <button
                      onClick={() => {
                        const items = document.querySelectorAll(".faq-content");
                        const arrows = document.querySelectorAll(".faq-arrow");
                        items[index].classList.toggle("hidden");
                        arrows[index].classList.toggle("rotate-90");
                      }}
                      className="w-full flex items-center justify-between text-left group">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{faq.name}</h3>
                        <p className="text-gray-600">{faq.role}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-50 transition-colors">
                        <ArrowRight className="faq-arrow w-5 h-5 text-gray-400 transition-transform duration-200" />
                      </div>
                    </button>
                    <div className="faq-content hidden mt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image and Social Links */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=FAQ"
                  alt="FAQ Section"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
                className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
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
                    className="inline-flex items-center text-primary hover:underline text-sm mt-auto self-start">
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
                className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium inline-block text-sm sm:text-base">
                View All Posts
              </Link>
            </div>
          </ScrollAnimation>
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
