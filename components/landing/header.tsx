"use client"

import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
          : ""
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium tracking-tight text-gray-900">
          MootPoint
        </span>
        <a
          href="#hero"
          className="text-xs px-3.5 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          Get Started
        </a>
      </nav>
    </header>
  )
}
