export function FooterCTA() {
  return (
    <>
      <section className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 leading-snug">
            Sharpen your argument before the courtroom does.
          </h2>
          <a
            href="#hero"
            className="inline-block mt-10 text-xs px-3.5 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
      <footer className="px-6 py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <span>&copy; 2026 MootPoint</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
