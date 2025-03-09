"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, Phone } from "lucide-react"
import { sendContactEmail } from "@/lib/actions"
import ScrollAnimation, { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animations/scroll-animation"
import AnimatedText from "@/components/animations/animated-text"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendContactEmail(formData)
      setSubmitMessage("Your message has been sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container mx-auto px-4">
          <AnimatedText text="Contact Us" className="text-3xl md:text-4xl font-bold mb-4 text-white" />
          <div className="breadcrumb">
            <Link href="/">
              <Home size={16} />
            </Link>
            <span>&gt;</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollAnimation variant={fadeInLeft} className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Get In Touch With Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? Contact us today and our team will be happy to assist
                you. We're here to provide you with the information and support you need for your construction projects.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
              <p className="text-gray-600 mb-8">
                We offer a wide range of construction materials and solutions to meet your project needs. Our expert
                team is ready to help you find the right products for your specific requirements.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-bold">Product Consultation:</span>
                  <span className="ml-2 text-gray-600">
                    Get expert advice on the best products for your construction needs
                  </span>
                </div>
                <div>
                  <span className="font-bold">Technical Support:</span>
                  <span className="ml-2 text-gray-600">
                    Receive guidance on product application and usage techniques
                  </span>
                </div>
                <div>
                  <span className="font-bold">Custom Solutions:</span>
                  <span className="ml-2 text-gray-600">
                    We develop tailored solutions for unique construction challenges
                  </span>
                </div>
              </div>

              <ScrollAnimation variant={fadeInUp}>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitMessage && (
                    <div className={`mt-4 ${submitMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </ScrollAnimation>
            </ScrollAnimation>

            <ScrollAnimation variant={fadeInRight} className="lg:col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-6">GET IN TOUCH</h3>
                <div className="flex justify-center mb-6">
                  <div className="bg-primary rounded-full p-4">
                    <Phone className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-center mb-2">For fast service</p>
                <p className="text-center text-xl font-bold mb-6">(+91) 77 108 76 108</p>

                <ScrollAnimation variant={fadeInUp} delay={0.3}>
                  <div className="mt-8 space-y-4">
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-gray-600">bondclick77@gmail.com</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-bold mb-1">Visit Us</h4>
                      <p className="text-gray-600">Rajkot, Gujarat, India</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-bold mb-1">Working Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}

