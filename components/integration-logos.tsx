import Image from "next/image"

const integrations = [
  { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Azure", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Terraform", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Ansible", logo: "/placeholder.svg?height=60&width=120" },
  { name: "WireGuard", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=120" },
]

export function IntegrationLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <Image
            src={integration.logo || "/placeholder.svg"}
            alt={`${integration.name} logo`}
            width={120}
            height={60}
            className="object-contain h-12"
          />
        </div>
      ))}
    </div>
  )
}
