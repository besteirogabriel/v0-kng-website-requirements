import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"

export default function CloudArchitecturePage() {
  return (
    <PageLayout>
      <PageHero
        title="Cloud Architecture"
        description="Expert design, migration, and optimization services for AWS, Azure, and GCP environments"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Business with Cloud Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KNG's cloud architecture services help enterprises leverage the full potential of cloud computing with
                secure, scalable, and cost-effective solutions. Our team of certified cloud experts designs and
                implements cloud infrastructures that align with your business goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Cloud Strategy & Consulting</h3>
                    <p className="text-muted-foreground">
                      Develop a comprehensive cloud roadmap aligned with your business objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Cloud Migration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly transition your workloads to AWS, Azure, or Google Cloud
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#006DF0] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Cloud Optimization</h3>
                    <p className="text-muted-foreground">
                      Enhance performance while reducing costs through efficient resource utilization
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Cloud Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Architecture Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <span className="text-[#006DF0] font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  We analyze your current infrastructure, applications, and business requirements to develop a
                  comprehensive cloud strategy and migration plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <span className="text-[#006DF0] font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Design & Implementation</h3>
                <p className="text-muted-foreground">
                  Our team designs and builds your cloud infrastructure using Infrastructure as Code (IaC) principles
                  for consistency, scalability, and security.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center mb-4">
                  <span className="text-[#006DF0] font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Optimization & Management</h3>
                <p className="text-muted-foreground">
                  We continuously monitor, optimize, and manage your cloud environment to ensure performance, security,
                  and cost-efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud Technologies We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="AWS"
                width={120}
                height={60}
                className="object-contain h-12 mb-4"
              />
              <h3 className="font-medium text-center">Amazon Web Services</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Microsoft Azure"
                width={120}
                height={60}
                className="object-contain h-12 mb-4"
              />
              <h3 className="font-medium text-center">Microsoft Azure</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Google Cloud"
                width={120}
                height={60}
                className="object-contain h-12 mb-4"
              />
              <h3 className="font-medium text-center">Google Cloud</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Kubernetes"
                width={120}
                height={60}
                className="object-contain h-12 mb-4"
              />
              <h3 className="font-medium text-center">Kubernetes</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D2F33] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to schedule a consultation and discover how KNG can help your business leverage the
              full potential of cloud computing.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a Cloud Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
