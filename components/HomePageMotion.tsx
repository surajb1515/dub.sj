"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code, Users, Link2, CheckCircle, Star, ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function HomePageComponent() {
  const [url, setUrl] = useState("")

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant URL shortening with global CDN for fastest redirects",
    },
    {
      icon: Code,
      title: "API Access",
      description: "Integrate with your applications using our comprehensive REST API",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and manage links with your team members seamlessly",
    },
  ]

  const stats = [
    { value: "10M+", label: "Links Shortened" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ]

  const benefits = [
    { icon: CheckCircle, text: "Free Forever" },
    { icon: CheckCircle, text: "No Registration Required" },
    { icon: Star, text: "Open Source" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-2">
          <Link2 className="h-6 w-6" />
          <span className="text-xl font-bold">Dubsj</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-black text-white hover:bg-gray-800" asChild>
            <a href="/dashboard">Get Started</a>
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <Badge variant="outline" className="mb-6">
            <Star className="h-3 w-3 mr-1" />
            Open Source URL Shortener
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance"
        >
          Shorten Your Links with Ease
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty"
        >
          Dubsj is the open-source application for managing your favorite links. Create short, memorable URLs with
          powerful analytics and customization options.
        </motion.p>

        {/* URL Shortener Form */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
        >
          <Input
            type="url"
            placeholder="https://your-long-url.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <motion.div {...scaleOnHover}>
            <Button className="bg-black text-white hover:bg-gray-800 px-6" asChild>
              <a href="/dashboard">
                Shorten URL
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex items-center gap-2 text-gray-600">
              <benefit.icon className="h-4 w-4 text-green-500" />
              <span>{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Link Management</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and track your shortened URLs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust Dubsj for their link management needs
          </p>
          <motion.div {...scaleOnHover}>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8" asChild>
              <a href="/dashboard">
                Start Shortening URLs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="h-5 w-5" />
                <span className="font-bold">Dubsj</span>
              </div>
              <p className="text-gray-600 text-sm">The open-source URL shortener for modern teams</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Features</div>
                <div>Pricing</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>About</div>
                <div>Blog</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Privacy</div>
                <div>Terms</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
