import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Lock, Shield, Users, Zap, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"

export default function CorporateVPNPage() {
  return (
    <PageLayout>
      <PageHero
        title="Corporate VPN Solutions"
        description="Scalable WireGuard and IPsec solutions with comprehensive security controls"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Secure Remote Access for Your Enterprise</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KNG's corporate VPN solutions provide secure, reliable remote access for your workforce. We implement
                modern VPN technologies like WireGuard and IPsec with comprehensive security controls to protect your
                sensitive data and resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Next-Gen VPN Technologies</h3>
                    <p className="text-muted-foreground">
                      Modern VPN solutions using WireGuard, OpenVPN, and IPsec for optimal security and performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Zero-Trust Integration</h3>
                    <p className="text-muted-foreground">
                      VPN solutions integrated with zero-trust security principles for enhanced protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Scalable Deployment</h3>
                    <p className="text-muted-foreground">
                      Highly scalable VPN infrastructure that grows with your business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Corporate VPN" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits of Our VPN Solutions</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Military-grade encryption and advanced security features to protect your data in transit
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Performance</h3>
                <p className="text-muted-foreground">
                  Optimized for speed and reliability, ensuring a seamless experience for remote workers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalability</h3>
                <p className="text-muted-foreground">
                  Easily scale your VPN infrastructure to accommodate growing remote workforce needs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements with comprehensive logging, monitoring, and access controls
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our VPN Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">WireGuard VPN</h3>
                <p className="text-muted-foreground mb-4">
                  Modern, high-performance VPN protocol with state-of-the-art cryptography and minimal attack surface.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Extremely fast and efficient</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Simple configuration and deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Modern cryptographic standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">IPsec VPN</h3>
                <p className="text-muted-foreground mb-4">
                  Industry-standard VPN protocol with broad compatibility and robust security features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Wide compatibility with devices and platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Mature and well-tested implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Supports site-to-site and remote access VPNs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">OpenVPN</h3>
                <p className="text-muted-foreground mb-4">
                  Versatile, open-source VPN solution with strong security and cross-platform support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Highly configurable and flexible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Works on virtually all platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#006DF0] mt-0.5" />
                    <span>Robust security with OpenSSL encryption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D2F33] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Remote Workforce</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to schedule a consultation and discover how KNG can help your business implement a
              secure, reliable VPN solution for your remote workforce.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a VPN Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
