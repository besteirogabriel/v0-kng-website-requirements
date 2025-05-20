import { CheckCircle } from "lucide-react"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  features: string[]
}

export function ProcessStep({ number, title, description, features }: ProcessStepProps) {
  return (
    <div className="relative p-6 bg-[#3A3C42] rounded-lg border border-gray-700 h-full">
      <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-[#006DF0] flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <div className="pt-4">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#00C4B4]" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
