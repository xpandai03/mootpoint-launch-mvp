"use client"

import { AiOrb } from "@/components/ai-orb"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <h1 className="text-[clamp(1rem,4.2vw,2.625rem)] font-medium tracking-tight text-gray-900 text-center leading-tight mb-12 whitespace-nowrap">
        Practice oral argument with AI judges.
      </h1>
      <AiOrb />
    </section>
  )
}
