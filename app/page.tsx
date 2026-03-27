import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { FooterCTA } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <FooterCTA />
      </main>
    </>
  )
}
