"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code, Shield, Link2, CheckCircle, Star, ArrowRight, Infinity, Crown, Sparkles } from "lucide-react"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"





export default function HomePage() {
  const [url, setUrl] = useState("")

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant URL shortening with global CDN for fastest redirects",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    },
    {
      icon: Code,
      title: "Convex-Powered Storage",
      description: "URLs are securely stored and managed using Convex’s scalable, real-time database service.",
      gradient: "from-blue-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with privacy-first approach and data protection",
      gradient: "from-green-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
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
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href={'/'}>
          <div className="flex items-center gap-2">
            <Link2 className="h-6 w-6" />
            <span className="text-xl font-bold">Dubsj</span>
          </div>
        </Link>

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
          <SignedOut>
            <Button asChild>
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div>
          <Badge variant="outline" className="mb-6">
            <Star className="h-3 w-3 mr-1" />
            Open Source URL Shortener
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Shorten Your Links with Ease</h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Dubsj is the open-source application for managing your favorite links. Create short, memorable URLs with
          powerful analytics and customization options.
        </p>

        {/* URL Shortener Form */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Input
            type="url"
            placeholder="https://your-long-url.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 py-1"
          />
          <div>
            <Button className="bg-black text-white hover:bg-gray-800 px-6" asChild>
              <a href="/sign-in">
                Shorten URL
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {/* 
            <SignedOut>
              <Button asChild>
                <SignInButton />
              </Button>
            </SignedOut> */}
          </div>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <benefit.icon className="h-4 w-4 text-green-500" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Link Management</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and track your shortened URLs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <Card
                className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${feature.bgColor} overflow-hidden relative group`}
              >
                <CardContent className="p-8 relative z-10">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
                {/* Floating decoration */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="h-8 w-8 text-gray-400" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-white/50 backdrop-blur-sm">
              <Star className="h-3 w-3 mr-1" />
              About Dubsj
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Built for Developers, by Developers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Dubsj was born from the need for a simple, powerful, and transparent URL shortening solution that respects
              your privacy and gives you complete control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that URL shortening should be simple, fast, and accessible to everyone. That's why we built
                Dubsj as an open-source platform that prioritizes user privacy, performance, and ease of use.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike other URL shorteners that track your data or limit your usage, Dubsj gives you complete control
                over your links with enterprise-grade features available to everyone, completely free.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Open Source
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Privacy First
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Developer Friendly
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Why Choose Dubsj?</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Privacy Focused",
                    desc: "No tracking, no data collection, your links stay private",
                  },
                  { icon: Code, title: "Open Source", desc: "Transparent code, community-driven development" },
                  { icon: Zap, title: "Lightning Fast", desc: "Global CDN ensures your links redirect instantly" },
                  { icon: CheckCircle, title: "Always Free", desc: "All features available forever, no hidden costs" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">{item.title}</h5>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Thousands of developers, marketers, and businesses trust Dubsj for their link management needs. Be part of
              a community that values transparency, privacy, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                View on GitHub
                <Code className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Read Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <Badge variant="outline" className="mb-6 bg-white/50 backdrop-blur-sm">
              <Crown className="h-3 w-3 mr-1" />
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Free Forever, No Strings Attached</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Enjoy all premium features without any cost. Open source means open access for everyone.
            </p>
          </div>

          <div className="relative">
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-2 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl overflow-hidden">
              <CardContent className="p-8 text-center relative">
                {/* Floating infinity symbol */}
                <div className="absolute top-4 right-4">
                  <Infinity className="h-6 w-6 text-blue-400 opacity-30" />
                </div>

                <div className="mb-6">
                  <div className="text-6xl font-bold text-gray-900 mb-2">$0</div>
                  <div className="text-gray-600">Forever & Always</div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Unlimited URL shortening",
                    "Advanced analytics",
                    "Custom short domains",
                    "API access",
                    "No ads or tracking",
                    "Open source transparency",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                    asChild
                  >
                    <a href="/dashboard">
                      Start Using Dubsj
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>







      {/* Stats Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust Dubsj for their link management needs
          </p>
          <div>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8" asChild>
              <a href="/sign-in">
                Start Shortening URLs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
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
