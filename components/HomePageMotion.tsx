"use client"

import { JSX, SVGProps, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Code, Shield, Link2, CheckCircle, Star, ArrowRight, Infinity, Crown, Sparkles } from "lucide-react"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"





export default function HomePage() {
  const [url, setUrl] = useState("")


  const navigation = [
    // {
    //   name: 'Facebook',
    //   href: '#',
    //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
    //       <path
    //         fillRule='evenodd'
    //         d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    //         clipRule='evenodd'
    //       />
    //     </svg>
    //   )
    // },
    // {
    //   name: 'Instagram',
    //   href: '#',
    //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
    //       <path
    //         fillRule='evenodd'
    //         d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
    //         clipRule='evenodd'
    //       />
    //     </svg>
    //   )
    // },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/surajbhardwaj15/',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
          <path
            fill='currentColor'
            d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
          ></path>
        </svg>
      )
    },
    {
      name: 'X',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/surajb1515',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      )
    },
    // {
    //   name: 'YouTube',
    //   href: '#',
    //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
    //       <path
    //         fillRule='evenodd'
    //         d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
    //         clipRule='evenodd'
    //       />
    //     </svg>
    //   )
    // }
  ]


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
                    <a href="/sign-in">
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

      <footer className='py-8'>
        <div className='container max-w-3xl'>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='flex justify-center space-x-6 md:order-2'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon aria-hidden='true' className='h-5 w-5' />
                </a>
              ))}
            </div>
            <div className='mt-8 md:order-1 md:mt-0'>
              <p className='text-center text-xs leading-5 text-muted-foreground'>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
