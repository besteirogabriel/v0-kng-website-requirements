import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"
import { SolutionCard } from "@/components/solution-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero title="Client Solutions" description="Real-world success stories from our enterprise clients" />

      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid grid-cols-6 max-w-2xl mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="vpn">VPN</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Global Financial Firm Network Overhaul"
                  description="Complete network infrastructure redesign for a Fortune 500 financial services company."
                  image="/placeholder.svg?height=300&width=600"
                  category="Networking"
                  slug="financial-network-overhaul"
                  tags={["SD-WAN", "Security", "High Availability"]}
                />
                <SolutionCard
                  title="Healthcare Provider Cloud Migration"
                  description="Secure migration of sensitive patient data to a HIPAA-compliant cloud environment."
                  image="/placeholder.svg?height=300&width=600"
                  category="Cloud"
                  slug="healthcare-cloud-migration"
                  tags={["AWS", "Compliance", "Data Security"]}
                />
                <SolutionCard
                  title="Manufacturing DevOps Transformation"
                  description="Implementing CI/CD pipelines and containerization for a global manufacturer."
                  image="/placeholder.svg?height=300&width=600"
                  category="DevOps"
                  slug="manufacturing-devops"
                  tags={["Kubernetes", "Docker", "CI/CD"]}
                />
                <SolutionCard
                  title="Retail Enterprise API Integration"
                  description="Seamless integration of e-commerce platforms with inventory and fulfillment systems."
                  image="/placeholder.svg?height=300&width=600"
                  category="Integrations"
                  slug="retail-api-integration"
                  tags={["API Gateway", "Microservices", "Data Pipelines"]}
                />
                <SolutionCard
                  title="Global VPN Deployment for Tech Company"
                  description="Secure remote access solution for 5,000+ employees across 20 countries."
                  image="/placeholder.svg?height=300&width=600"
                  category="VPN"
                  slug="global-vpn-deployment"
                  tags={["WireGuard", "Zero Trust", "Multi-factor Authentication"]}
                />
                <SolutionCard
                  title="Financial Services Multi-Cloud Strategy"
                  description="Hybrid cloud architecture leveraging AWS and Azure for a financial services firm."
                  image="/placeholder.svg?height=300&width=600"
                  category="Cloud"
                  slug="multi-cloud-strategy"
                  tags={["Hybrid Cloud", "AWS", "Azure"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="networking" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Global Financial Firm Network Overhaul"
                  description="Complete network infrastructure redesign for a Fortune 500 financial services company."
                  image="/placeholder.svg?height=300&width=600"
                  category="Networking"
                  slug="financial-network-overhaul"
                  tags={["SD-WAN", "Security", "High Availability"]}
                />
                <SolutionCard
                  title="Healthcare Network Segmentation"
                  description="Implementation of network segmentation for enhanced security in a hospital network."
                  image="/placeholder.svg?height=300&width=600"
                  category="Networking"
                  slug="healthcare-network-segmentation"
                  tags={["Micro-segmentation", "Zero Trust", "Compliance"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Healthcare Provider Cloud Migration"
                  description="Secure migration of sensitive patient data to a HIPAA-compliant cloud environment."
                  image="/placeholder.svg?height=300&width=600"
                  category="Cloud"
                  slug="healthcare-cloud-migration"
                  tags={["AWS", "Compliance", "Data Security"]}
                />
                <SolutionCard
                  title="Financial Services Multi-Cloud Strategy"
                  description="Hybrid cloud architecture leveraging AWS and Azure for a financial services firm."
                  image="/placeholder.svg?height=300&width=600"
                  category="Cloud"
                  slug="multi-cloud-strategy"
                  tags={["Hybrid Cloud", "AWS", "Azure"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="devops" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Manufacturing DevOps Transformation"
                  description="Implementing CI/CD pipelines and containerization for a global manufacturer."
                  image="/placeholder.svg?height=300&width=600"
                  category="DevOps"
                  slug="manufacturing-devops"
                  tags={["Kubernetes", "Docker", "CI/CD"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Retail Enterprise API Integration"
                  description="Seamless integration of e-commerce platforms with inventory and fulfillment systems."
                  image="/placeholder.svg?height=300&width=600"
                  category="Integrations"
                  slug="retail-api-integration"
                  tags={["API Gateway", "Microservices", "Data Pipelines"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="vpn" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                  title="Global VPN Deployment for Tech Company"
                  description="Secure remote access solution for 5,000+ employees across 20 countries."
                  image="/placeholder.svg?height=300&width=600"
                  category="VPN"
                  slug="global-vpn-deployment"
                  tags={["WireGuard", "Zero Trust", "Multi-factor Authentication"]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  )
}
