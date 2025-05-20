import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Server, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"

export default function NetworkInfrastructurePage() {
  return (
    <PageLayout>
      <PageHero
        title="Network Infrastructure"
        description="Advanced routing, switching, and security hardening for enterprise networks"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Network Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Build a Robust Network Foundation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KNG's network infrastructure services provide the foundation for your digital transformation. We design,
                implement, and manage enterprise-grade networks that deliver reliability, performance, and security for
                your business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Network Design & Architecture</h3>
                    <p className="text-muted-foreground">
                      Custom network designs that align with your business requirements and growth plans
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">SD-WAN Implementation</h3>
                    <p className="text-muted-foreground">
                      Software-defined networking for improved performance, visibility, and control
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Network Security</h3>
                    <p className="text-muted-foreground">
                      Comprehensive security solutions including firewalls, IDS/IPS, and zero-trust architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Network Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Networking</h3>
                <p className="text-muted-foreground">
                  Comprehensive enterprise network solutions including LAN/WAN design, implementation, and optimization
                  for maximum performance and reliability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">SD-WAN & SASE</h3>
                <p className="text-muted-foreground">
                  Next-generation networking with software-defined WAN and Secure Access Service Edge for improved
                  agility, security, and performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Network Security</h3>
                <p className="text-muted-foreground">
                  Protect your network with advanced security solutions including next-gen firewalls, intrusion
                  detection/prevention, and zero-trust architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Network Assessment & Optimization</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive network assessment identifies performance bottlenecks, security vulnerabilities, and
                opportunities for optimization. We provide actionable recommendations to improve your network's
                reliability, performance, and security.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Performance analysis and bottleneck identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Security vulnerability assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Capacity planning and scalability analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Network documentation and diagram creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Detailed recommendations and implementation roadmap</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Request a Network Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Network Assessment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D2F33] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Network Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to schedule a consultation and discover how KNG can help your business build a
              robust, secure, and high-performance network foundation.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Network Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
