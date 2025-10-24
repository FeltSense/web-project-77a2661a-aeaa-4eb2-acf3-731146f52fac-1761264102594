'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            "Catalyst Creative Studio revolutionized our entire digital marketing strategy. Their data-driven approach increased our conversion rates by 340%..."
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
              "Catalyst Creative Studio revolutionized our entire digital marketing strategy. Their data-driven approach increased our conversion rates by 340% in just six months. The team's creativity combined with analytical precision is unmatched. They don't just execute campaigns—they become true partners in your growth journey."
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-purple-200 text-sm italic">
                "Best marketing investment we've ever made. The ROI speaks for itself."
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
            "Working with Catalyst Creative Studio was a game-changer for our brand. They took our sustainable food company from local to national recognition..."
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
              "Working with Catalyst Creative Studio was a game-changer for our brand. They took our sustainable food company from local to national recognition through brilliant storytelling and targeted social media campaigns. Their understanding of our mission and values translated into authentic marketing that resonated with our audience. Sales tripled within the first year!"
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-blue-200 text-sm italic">
                "They didn't just market our products—they amplified our purpose."
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
            "Catalyst Creative Studio's influencer marketing strategy was phenomenal. They connected us with the perfect brand ambassadors and created campaigns..."
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
              "Catalyst Creative Studio's influencer marketing strategy was phenomenal. They connected us with the perfect brand ambassadors and created campaigns that generated over 50 million impressions. Their creative team produced stunning visual content that elevated our brand aesthetic. The attention to detail and strategic thinking exceeded all expectations."
            </p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-pink-200 text-sm italic">
                "A true creative powerhouse that delivers measurable results every time."
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
        Choose the perfect plan to amplify your brand's creative impact
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">5 Social media campaigns/month</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Basic brand guidelines</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Email support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">20 Social media campaigns/month</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Complete brand identity package</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Priority support & strategy calls</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Advanced analytics dashboard</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Content calendar planning</span>
          </li>
        </ul>
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-white text-purple-600 py-4 px-6 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Start Creating Now
        </button>
        <div className="mt-4 flex items-center justify-center space-x-2 text-purple-100 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
          <span>Secure SSL Payment via Stripe</span>
        </div>
      </div>

      {/* Enterprise Tier */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
          <p className="text-gray-600">For established companies</p>
        </div>
        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">$199</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Unlimited campaigns</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Dedicated creative director</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">24/7 premium support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Custom integrations & API access</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Quarterly strategy workshops</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">White-label solutions</span>
          </li>
        </ul>
        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300">
          Contact Sales
        </button>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-16 text-center">
      <div className="flex items-center justify-center space-x-8 text-gray-500">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm font-medium">256-bit SSL Secure</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm font-medium">Money-back Guarantee</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm font-medium">Trusted by 500+ Brands</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget as HTMLFormElement;

    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      projectType: (form.querySelector('#projectType') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
      source: 'Catalyst Creative Studio Contact Form',
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.',
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">Let's Create Together</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Marketing Strategy?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Catalyst Creative Studio, we turn bold ideas into breakthrough campaigns. 
            Tell us about your project and let's ignite your brand's potential.
          </p>
        </div>

        {/* Full-Width Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Two Column Grid for Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Marketing-Specific Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select a service</option>
                  <option value="brand-strategy" className="bg-slate-900">Brand Strategy</option>
                  <option value="digital-marketing" className="bg-slate-900">Digital Marketing</option>
                  <option value="content-creation" className="bg-slate-900">Content Creation</option>
                  <option value="social-media" className="bg-slate-900">Social Media Management</option>
                  <option value="seo-sem" className="bg-slate-900">SEO & SEM</option>
                  <option value="video-production" className="bg-slate-900">Video Production</option>
                  <option value="web-design" className="bg-slate-900">Web Design & Development</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                  Project Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select budget range</option>
                  <option value="under-10k" className="bg-slate-900">Under $10,000</option>
                  <option value="10k-25k" className="bg-slate-900">$10,000 - $25,000</option>
                  <option value="25k-50k" className="bg-slate-900">$25,000 - $50,000</option>
                  <option value="50k-100k" className="bg-slate-900">$50,000 - $100,000</option>
                  <option value="100k-plus" className="bg-slate-900">$100,000+</option>
                  <option value="not-sure" className="bg-slate-900">Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* Message Field - Full Width */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Tell Us About Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Share your vision, goals, and any specific requirements..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl border ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                }`}
              >
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}

            {/* Submit Button - Full Width */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-sm text-gray-400">
                * Required fields. We respect your privacy and will never share your information.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Start Your Project'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">24-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No Obligation Quote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl">Catalyst Creative Studio</span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center gap-6 text-sm">
        <a href="mailto:hello@catalystcreative.com" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          hello@catalystcreative.com
        </a>
        <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (555) 123-4567
        </a>
      </div>

      {/* Social Media */}
      <div className="flex items-center gap-4">
        <a href="https://instagram.com" className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" className="w-9 h-9 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://behance.net" className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
          </svg>
        </a>
        <a href="https://twitter.com" className="w-9 h-9 bg-white/10 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} Catalyst Creative Studio. All rights reserved.
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}