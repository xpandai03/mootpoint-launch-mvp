const steps = [
  {
    number: "01",
    title: "Upload your brief",
    description: "Submit the case materials you want to argue.",
  },
  {
    number: "02",
    title: "Select a judge",
    description: "Choose from judges with distinct temperaments.",
  },
  {
    number: "03",
    title: "Argue your case",
    description: "Present your oral argument in real time.",
  },
  {
    number: "04",
    title: "Get feedback",
    description: "Receive a score and structured critique.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs tracking-widest uppercase text-gray-400 text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-xs text-gray-300 font-mono">
                {step.number}
              </span>
              <h3 className="text-sm font-medium text-gray-900 mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
