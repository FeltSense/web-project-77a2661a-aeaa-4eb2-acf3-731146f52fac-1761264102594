'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const form = e.currentTarget as HTMLFormElement

    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      projectType: (form.querySelector('#projectType') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
      source: 'Catalyst Creative Studio Contact Form',
    }

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.',
      })
      form.reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="transition-all duration-500" id="brand-text">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Catalyst <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Creative</span>
            </h1>
            <p className="text-xs text-purple-300 -mt-1 font-medium">Studio</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-white hover:text-pink-400 transition-all duration-300 font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="px-4 py-2 text-white hover:text-pink-400 transition-all duration-300 font-medium relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="px-4 py-2 text-white hover:text-pink-400 transition-all duration-300 font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="px-4 py-2 text-white hover:text-pink-400 transition-all duration-300 font-medium relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300" id="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-gradient-to-b from-indigo-900 to-purple-900 shadow-2xl" id="mobile-menu">
    <div className="px-4 pt-2 pb-6 space-y-2">
      <a href="#home" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const brandText = document.getElementById('brand-text');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.classList.remove('py-6');
          navContent.classList.add('py-3');
          brandText.querySelector('h1').classList.remove('text-2xl');
          brandText.querySelector('h1').classList.add('text-xl');
        } else {
          navContent.classList.remove('py-3');
          navContent.classList.add('py-6');
          brandText.querySelector('h1').classList.remove('text-xl');
          brandText.querySelector('h1').classList.add('text-2xl');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-coral-500 opacity-50 animate-gradient-shift"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-600 via-blue-500 to-pink-500 opacity-40 animate-gradient-pulse"></div>
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
    
    {/* Floating Badge */}
    <div className="mb-8 animate-float">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-2xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Award-Winning Creative Agency
      </span>
    </div>

    {/* Main Heading with Floating Words */}
    <div className="text-center max-w-5xl mx-auto mb-6">
      <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400 animate-float" style={{animationDelay: '0s'}}>
          Catalyst
        </span>
        <br />
        <span className="inline-block text-white animate-float" style={{animationDelay: '0.2s'}}>
          Creative
        </span>
        {' '}
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-300 to-purple-400 animate-float" style={{animationDelay: '0.4s'}}>
          Studio
        </span>
      </h1>
    </div>

    {/* Subheading */}
    <p className="text-xl md:text-2xl text-cyan-100 font-light max-w-3xl mx-auto text-center mb-4 leading-relaxed animate-float" style={{animationDelay: '0.6s'}}>
      We ignite brand transformations through
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"> radical creativity</span>,
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300"> strategic innovation</span>, and
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"> data-driven design</span>
    </p>

    {/* Description */}
    <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto text-center mb-12 animate-float" style={{animationDelay: '0.8s'}}>
      From disruptive campaigns to immersive brand experiences, we catalyze growth for ambitious brands ready to dominate their markets.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-float" style={{animationDelay: '1s'}}>
      <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-white text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
        <span className="relative z-10">Start Your Transformation</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-bold text-white text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl">
        View Our Work
      </button>
    </div>

    {/* Floating Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
      <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float hover:bg-white/10 transition-all duration-300" style={{animationDelay: '1.2s'}}>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400 mb-2">250+</div>
        <div className="text-sm text-slate-300 font-medium">Brands Ignited</div>
      </div>
      <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float hover:bg-white/10 transition-all duration-300" style={{animationDelay: '1.4s'}}>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-pink-400 mb-2">15+</div>
        <div className="text-sm text-slate-300 font-medium">Industry Awards</div>
      </div>
      <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float hover:bg-white/10 transition-all duration-300" style={{animationDelay: '1.6s'}}>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-400 mb-2">3.2B</div>
        <div className="text-sm text-slate-300 font-medium">Impressions Generated</div>
      </div>
      <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float hover:bg-white/10 transition-all duration-300" style={{animationDelay: '1.8s'}}>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-2">98%</div>
        <div className="text-sm text-slate-300 font-medium">Client Retention</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes gradient-pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.6; }
    }
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-gradient-shift {
      animation: gradient-shift 15s ease infinite;
    }
    .animate-gradient-pulse {
      animation: gradient-pulse 8s ease infinite;
    }
    .animate-blob {
      animation: blob 20s infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Creative Services That Drive Results
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Catalyst Creative Studio delivers award-winning creative work with proven ROI through our collaborative, data-driven approach
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
      
      {/* Large Card - Brand Strategy */}
      <div className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
        <div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4">Brand Strategy & Identity</h3>
          <p className="text-purple-100 text-lg mb-6">
            End-to-end brand development from strategy to execution. Our experienced team of specialists creates cohesive brand identities that resonate with your target audience and stand out in competitive markets.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-purple-100">
              <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
              Brand positioning & messaging
            </li>
            <li className="flex items-center text-purple-100">
              <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
              Visual identity systems
            </li>
            <li className="flex items-center text-purple-100">
              <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
              Brand guidelines & asset libraries
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-sm text-purple-200">Trusted by 200+ brands across multiple industries</p>
        </div>
      </div>

      {/* Tall Card - Digital Marketing */}
      <div className="md:col-span-2 md:row-span-3 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col">
        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Marketing Excellence</h3>
        <p className="text-gray-600 mb-6 flex-grow">
          Data-driven digital campaigns that deliver measurable results. Catalyst Creative Studio combines creative excellence with analytics to maximize your marketing ROI.
        </p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Social Media Campaigns</h4>
            <p className="text-sm text-gray-600">Engaging content that builds communities</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Performance Marketing</h4>
            <p className="text-sm text-gray-600">PPC, SEO, and conversion optimization</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Email Marketing</h4>
            <p className="text-sm text-gray-600">Automated campaigns that convert</p>
          </div>
        </div>
      </div>

      {/* Wide Card - Content Production */}
      <div className="md:col-span-4 md:row-span-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center">
        <div className="flex-shrink-0 mr-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-3">Content Production Studio</h3>
          <p className="text-blue-100 mb-4">
            Award-winning video, photography, and multimedia content. Our collaborative process puts your vision first while leveraging our creative expertise across all disciplines.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Video Production</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Photography</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Animation</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Podcasts</span>
          </div>
        </div>
      </div>

      {/* Square Card - Creative Consulting */}
      <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
        <div>
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Creative Consulting</h3>
          <p className="text-orange-100 mb-6">
            Strategic guidance from our experienced team of specialists. We bring diverse portfolio insights from multiple industries to solve your unique creative challenges.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-50">Campaign strategy & planning</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-50">Creative audits & optimization</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-50">Team training & workshops</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Wide Short Card - Web & App Design */}
      <div className="md:col-span-4 md:row-span-1 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Web & App Design</h3>
              <p className="text-gray-600">
                User-centric digital experiences that combine beautiful design with data-driven UX principles. From responsive websites to mobile apps, Catalyst Creative Studio creates digital products that users love.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-6 text-lg">
        Ready to elevate your brand with Catalyst Creative Studio?
      </p>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        Start Your Project Today
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Client Success Stories
      </h2>
      <p className="text-xl text-purple-200 max-w-2xl mx-auto">
        See how Catalyst Creative Studio transforms brands with innovative marketing solutions
      </p>
    </div>

    {/* Modal Popup Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Testimonial 1 - Modal Popup Style */}
      <div className="group relative">
        {/* Trigger Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/50">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-4 border-purple-400 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-purple-300 text-sm">CMO, TechVision Inc.</p>
            </div>
          </div>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-white/90 text-sm line-clamp-3">
            &quot;Catalyst Creative Studio revolutionized our entire digital marketing strategy. Their data-driven approach increased our conversion rates by 340%...&quot;
          </p>
          <div className="mt-4 text-purple-300 text-sm font-semibold flex items-center">
            Click to read more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Modal Popup Overlay */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-3xl p-10 max-w-2xl w-full border-2 border-purple-400 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                alt="Sarah Mitchell"
                className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover"
              />
              <div className="ml-6">
                <h3 className="text-white font-bold text-2xl">Sarah Mitchell</h3>
                <p className="text-purple-300">CMO, TechVision Inc.</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-lg leading-relaxed mb-6">
              &quot;Catalyst Creative Studio revolutionized our entire digital marketing strategy. Their data-driven approach increased our conversion rates by 340% in just six months. The team&apos;s creativity combined with analytical precision is unmatched. They don&apos;t just execute campaigns—they become true partners in your growth journey.&quot;
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-purple-200 text-sm italic">
                &quot;Best marketing investment we&apos;ve ever made. The ROI speaks for itself.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Modal Popup Style */}
      <div className="group relative">
        {/* Trigger Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/50">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Rodriguez"
              className="w-16 h-16 rounded-full border-4 border-blue-400 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-white font-bold text-lg">Marcus Rodriguez</h3>
              <p className="text-blue-300 text-sm">Founder, GreenLeaf Organics</p>
            </div>
          </div>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-white/90 text-sm line-clamp-3">
            &quot;Working with Catalyst Creative Studio was a game-changer for our brand. They took our sustainable food company from local to national recognition...&quot;
          </p>
          <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center">
            Click to read more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Modal Popup Overlay */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-blue-800 to-cyan-900 rounded-3xl p-10 max-w-2xl w-full border-2 border-blue-400 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
                alt="Marcus Rodriguez"
                className="w-20 h-20 rounded-full border-4 border-blue-400 object-cover"
              />
              <div className="ml-6">
                <h3 className="text-white font-bold text-2xl">Marcus Rodriguez</h3>
                <p className="text-blue-300">Founder, GreenLeaf Organics</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-lg leading-relaxed mb-6">
              &quot;Working with Catalyst Creative Studio was a game-changer for our brand. They took our sustainable food company from local to national recognition through brilliant storytelling and targeted social media campaigns. Their understanding of our mission and values translated into authentic marketing that resonated with our audience. Sales tripled within the first year!&quot;
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-blue-200 text-sm italic">
                &quot;They didn&apos;t just market our products—they amplified our purpose.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Modal Popup Style */}
      <div className="group relative">
        {/* Trigger Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-pink-500/50">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Jennifer Chen"
              className="w-16 h-16 rounded-full border-4 border-pink-400 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-white font-bold text-lg">Jennifer Chen</h3>
              <p className="text-pink-300 text-sm">VP Marketing, Luxe Fashion</p>
            </div>
          </div>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-white/90 text-sm line-clamp-3">
            &quot;Catalyst Creative Studio&apos;s influencer marketing strategy was phenomenal. They connected us with the perfect brand ambassadors and created campaigns...&quot;
          </p>
          <div className="mt-4 text-pink-300 text-sm font-semibold flex items-center">
            Click to read more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Modal Popup Overlay */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-pink-800 to-rose-900 rounded-3xl p-10 max-w-2xl w-full border-2 border-pink-400 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
                alt="Jennifer Chen"
                className="w-20 h-20 rounded-full border-4 border-pink-400 object-cover"
              />
              <div className="ml-6">
                <h3 className="text-white font-bold text-2xl">Jennifer Chen</h3>
                <p className="text-pink-300">VP Marketing, Luxe Fashion</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-lg leading-relaxed mb-6">
              &quot;Catalyst Creative Studio&apos;s influencer marketing strategy was phenomenal. They connected us with the perfect brand ambassadors and created campaigns that generated over 50 million impressions. Their creative team produced stunning visual content that elevated our brand aesthetic. The attention to detail and strategic thinking exceeded all expectations.&quot;
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-pink-200 text-sm italic">
                &quot;A true creative powerhouse that delivers measurable results every time.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-white text-lg mb-6">Ready to transform your brand?</p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        Start Your Success Story
      </button>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Catalyst Creative Studio Pricing
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Choose the perfect plan to amplify your brand&apos;s creative impact
      </p>
    </div>

    {/* Pricing Grid */}
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Starter Tier */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-600">Perfect for small businesses</p>
        </div>
        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">$29</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">5 Social media campaigns/month</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Basic brand guidelines</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Email support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Monthly analytics report</span>
          </li>
        </ul>
        <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
          Get Started
        </button>
      </div>

      {/* Professional Tier - POPULAR */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 border-2 border-purple-400 transform md:scale-105 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            MOST POPULAR
          </span>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
          <p className="text-purple-100">For growing brands</p>
        </div>
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">$79</span>
          <span className="text-purple-100">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">