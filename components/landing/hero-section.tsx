"use client"

import { AiOrb } from "@/components/ai-orb"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-gray-900 text-center leading-tight mb-12">
        Practice oral argument with AI judges.
      </h1>
      <AiOrb />
    </section>
  )
}
