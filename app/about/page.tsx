import Image from "next/image"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About KNG"
        description="Specialized IT and network solutions firm founded by industry veterans"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KNG was founded in 2010 by a team of IT and networking experts with a vision to provide enterprise-grade
                technology solutions that are secure, scalable, and tailored to specific business needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the past decade, we've grown from a small team of consultants to a comprehensive IT solutions
                provider with expertise in cloud architecture, network infrastructure, enterprise integrations, and
                corporate VPN solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, KNG serves clients across various industries, from financial services and healthcare to
                manufacturing and technology, helping them navigate the complex world of IT infrastructure and security.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=1200" alt="KNG Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower organizations with secure, reliable, and innovative IT solutions that drive business growth
                  and digital transformation. We strive to be a trusted partner in our clients' success by delivering
                  exceptional service and technical expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of enterprise IT and network solutions, recognized for our technical
                  excellence, customer-centric approach, and commitment to innovation in an ever-evolving technology
                  landscape.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
                <p className="text-muted-foreground">
                  We are committed to maintaining the highest standards of technical expertise and staying at the
                  forefront of technology innovation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Client Partnership</h4>
                <p className="text-muted-foreground">
                  We build long-term relationships with our clients based on trust, transparency, and a deep
                  understanding of their business needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#006DF0]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Security First</h4>
                <p className="text-muted-foreground">
                  We prioritize security in everything we do, ensuring our clients' data and systems are protected
                  against evolving threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="John Smith" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-[#006DF0]">CEO & Founder</p>
              <p className="text-muted-foreground mt-2">
                20+ years of experience in enterprise IT and network infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-[#006DF0]">CTO</p>
              <p className="text-muted-foreground mt-2">
                Cloud architecture expert with extensive experience in AWS and Azure
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Michael Chen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-[#006DF0]">Security Director</p>
              <p className="text-muted-foreground mt-2">Cybersecurity specialist with CISSP and CISM certifications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-16 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="ISO 27001"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">Information Security</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-16 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="AWS Partner"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold">AWS Partner</h3>
              <p className="text-sm text-muted-foreground">Advanced Consulting</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-16 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Microsoft Gold"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold">Microsoft Gold</h3>
              <p className="text-sm text-muted-foreground">Cloud Platform</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-16 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="CMMC"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold">CMMC</h3>
              <p className="text-sm text-muted-foreground">Level 3 Certified</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
