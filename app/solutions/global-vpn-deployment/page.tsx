import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Lock, Shield, Users } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"

export default function GlobalVPNDeploymentPage() {
  return (
    <PageLayout>
      <PageHero
        title="Global VPN Deployment for Tech Company"
        description="Secure remote access solution for 5,000+ employees across 20 countries"
      >
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge>VPN</Badge>
          <Badge variant="outline">WireGuard</Badge>
          <Badge variant="outline">Zero Trust</Badge>
          <Badge variant="outline">Multi-factor Authentication</Badge>
        </div>
      </PageHero>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Global VPN Deployment"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Client Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A global technology company with 5,000+ employees across 20 countries needed a secure, scalable VPN
                solution to support their remote workforce. Their existing VPN infrastructure was struggling with
                performance issues, limited scalability, and security concerns.
              </p>
              <p className="text-lg text-muted-foreground mb-6">Key challenges included:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Supporting 5,000+ concurrent users across multiple time zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Ensuring high performance for bandwidth-intensive applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Meeting strict security and compliance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Simplifying user experience while maintaining security</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KNG designed and implemented a comprehensive VPN solution based on WireGuard technology, integrated with
                zero-trust security principles and multi-factor authentication.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-[#006DF0]" />
                    <h3 className="text-xl font-bold">WireGuard VPN</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Deployed WireGuard VPN for its superior performance, security, and simplicity, with distributed
                    gateways across global regions for optimal performance.
                  </p>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-[#006DF0]" />
                    <h3 className="text-xl font-bold">Zero-Trust Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Implemented zero-trust architecture with continuous verification of user identity, device health,
                    and access privileges for enhanced security.
                  </p>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-[#006DF0]" />
                    <h3 className="text-xl font-bold">Multi-Factor Authentication</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integrated robust MFA with biometric, token-based, and push notification options to ensure secure
                    user authentication.
                  </p>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#006DF0]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <h3 className="text-xl font-bold">Advanced Monitoring</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive monitoring and analytics for real-time visibility into VPN performance, usage
                    patterns, and security events.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Implementation Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team followed a phased implementation approach to minimize disruption and ensure a smooth
                transition:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#006DF0] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assessment & Design</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assessment of existing infrastructure and user requirements, followed by detailed
                      solution design and architecture planning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#006DF0] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pilot Deployment</h3>
                    <p className="text-muted-foreground">
                      Initial deployment with a select group of users across different regions to validate performance,
                      security, and user experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#006DF0] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Rollout</h3>
                    <p className="text-muted-foreground">
                      Phased global deployment with regional cutover plans, comprehensive user training, and dedicated
                      support during transition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#006DF0] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimization & Monitoring</h3>
                    <p className="text-muted-foreground">
                      Continuous monitoring, performance optimization, and security enhancements based on real-world
                      usage patterns and feedback.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Results & Benefits</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                  <h3 className="text-4xl font-bold text-[#006DF0] mb-2">99.99%</h3>
                  <p className="text-muted-foreground">VPN Service Uptime</p>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                  <h3 className="text-4xl font-bold text-[#006DF0] mb-2">65%</h3>
                  <p className="text-muted-foreground">Reduction in Support Tickets</p>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg text-center">
                  <h3 className="text-4xl font-bold text-[#006DF0] mb-2">3x</h3>
                  <p className="text-muted-foreground">Improvement in Connection Speed</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">Additional benefits included:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Enhanced security posture with zero security incidents since deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Simplified user experience with seamless authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Improved IT visibility and control over remote access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <span>Scalable infrastructure that can grow with the company's needs</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-[#F5F7FA] p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-muted-foreground">Industry</h4>
                    <p>Technology</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">Company Size</h4>
                    <p>5,000+ employees</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">Geographic Scope</h4>
                    <p>20 countries across North America, Europe, and Asia</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">WireGuard</Badge>
                      <Badge variant="outline">Zero Trust</Badge>
                      <Badge variant="outline">MFA</Badge>
                      <Badge variant="outline">Cloud Infrastructure</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">Project Duration</h4>
                    <p>4 months</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Need a Similar Solution?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact our team to discuss how we can help your organization implement a secure, scalable VPN
                    solution.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              title="Financial Services Network Security"
              description="Comprehensive network security implementation for a global financial institution."
              image="/placeholder.svg?height=300&width=600"
              category="Networking"
              slug="financial-network-security"
              tags={["Security", "Compliance", "Zero Trust"]}
            />
            <SolutionCard
              title="Healthcare Remote Access Solution"
              description="Secure remote access for healthcare providers with strict HIPAA compliance."
              image="/placeholder.svg?height=300&width=600"
              category="VPN"
              slug="healthcare-remote-access"
              tags={["Healthcare", "Compliance", "Security"]}
            />
            <SolutionCard
              title="Manufacturing Zero Trust Implementation"
              description="Zero trust security architecture for a global manufacturing company."
              image="/placeholder.svg?height=300&width=600"
              category="Security"
              slug="manufacturing-zero-trust"
              tags={["Zero Trust", "OT Security", "Access Control"]}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

// Import the SolutionCard component at the top of the file
import { SolutionCard } from "@/components/solution-card"
