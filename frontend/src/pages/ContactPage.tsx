import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-emerald-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Get in <span className="text-amber-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Have questions, feedback, or need support? We're here to help and would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Restaurant Partnership</option>
                      <option>Technical Support</option>
                      <option>Delivery Issue</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8 text-pretty">
                    Reach out to us through any of these channels. We're available 24/7 to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-600">
                            123 Food Street
                            <br />
                            Culinary District
                            <br />
                            New York, NY 10001
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <p className="text-gray-600">
                            Customer Support: (555) 123-4567
                            <br />
                            Restaurant Partners: (555) 123-4568
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <p className="text-gray-600">
                            General: hello@foodhub.com
                            <br />
                            Support: support@foodhub.com
                            <br />
                            Partners: partners@foodhub.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Support Hours</h3>
                          <p className="text-gray-600">
                            24/7 Customer Support
                            <br />
                            Live Chat Available
                            <br />
                            Average Response: 2 minutes
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
