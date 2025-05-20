import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Cloud, Code, Database, Lock, Server, Settings } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { ServiceCard } from "@/components/service-card"
import { SolutionCard } from "@/components/solution-card"

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#006DF0]/10 to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Enterprise-Grade Cloud, Networking & VPN Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Customizable, secure and fully managed by KNG's expert team
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006DF0]/20 to-[#00C4B4]/20 rounded-lg border border-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-6">
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <Cloud className="h-10 w-10 text-[#006DF0] mb-2" />
                      <span className="text-sm font-medium">Cloud Architecture</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <Server className="h-10 w-10 text-[#006DF0] mb-2" />
                      <span className="text-sm font-medium">Network Infrastructure</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <Code className="h-10 w-10 text-[#006DF0] mb-2" />
                      <span className="text-sm font-medium">Enterprise Integrations</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <Lock className="h-10 w-10 text-[#006DF0] mb-2" />
                      <span className="text-sm font-medium">Corporate VPN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive IT and network solutions tailored to your enterprise needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Cloud className="h-10 w-10" />}
              title="Cloud Architecture"
              description="Expert design, migration, and optimization services for AWS, Azure, and GCP environments."
              slug="cloud-architecture"
            />
            <ServiceCard
              icon={<Server className="h-10 w-10" />}
              title="Network Infrastructure"
              description="Advanced routing, switching, and security hardening for enterprise networks."
              slug="network-infrastructure"
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="Enterprise Integrations"
              description="Seamless API orchestration and data pipeline solutions for business continuity."
              slug="enterprise-integrations"
            />
            <ServiceCard
              icon={<Lock className="h-10 w-10" />}
              title="Corporate VPN"
              description="Scalable WireGuard and IPsec solutions with comprehensive security controls."
              slug="corporate-vpn"
            />
            <ServiceCard
              icon={<Settings className="h-10 w-10" />}
              title="DevOps Solutions"
              description="Streamline your development and operations with CI/CD pipelines and automation."
              slug="devops"
            />
            <ServiceCard
              icon={<Database className="h-10 w-10" />}
              title="Data Management"
              description="Secure, scalable data storage and analytics solutions for your business."
              slug="data-management"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world success stories from our enterprise clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/solutions">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#2D2F33] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose KNG</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#3A3C42] p-6 rounded-lg border border-gray-700">
              <div className="h-12 w-12 rounded-full bg-[#006DF0]/20 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#006DF0]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of certified professionals with decades of combined experience in enterprise IT.
              </p>
            </div>
            <div className="bg-[#3A3C42] p-6 rounded-lg border border-gray-700">
              <div className="h-12 w-12 rounded-full bg-[#006DF0]/20 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#006DF0]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Focus</h3>
              <p className="text-gray-300">
                ISO 27001 certified with rigorous security protocols and continuous compliance monitoring.
              </p>
            </div>
            <div className="bg-[#3A3C42] p-6 rounded-lg border border-gray-700">
              <div className="h-12 w-12 rounded-full bg-[#006DF0]/20 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#006DF0]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Success</h3>
              <p className="text-gray-300">
                98% client retention rate with ongoing partnerships and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-[#006DF0]/10 to-[#00C4B4]/10 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team today to schedule a consultation and discover how KNG can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">Explore Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
