import { Cloud, Code, Database, Lock, Server, Settings } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Services"
        description="Comprehensive IT and network solutions tailored to your enterprise needs"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cloud className="h-10 w-10" />}
              title="Cloud Architecture"
              description="Expert design, migration, and optimization services for AWS, Azure, and GCP environments. We help enterprises leverage the full potential of cloud computing with secure, scalable, and cost-effective solutions."
              slug="cloud-architecture"
            />
            <ServiceCard
              icon={<Server className="h-10 w-10" />}
              title="Network Infrastructure"
              description="Advanced routing, switching, and security hardening for enterprise networks. Our team designs and implements robust network solutions that ensure reliability, performance, and security for your business."
              slug="network-infrastructure"
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="Enterprise Integrations"
              description="Seamless API orchestration and data pipeline solutions for business continuity. We connect your critical systems and applications to create a unified ecosystem that enhances productivity and data flow."
              slug="enterprise-integrations"
            />
            <ServiceCard
              icon={<Lock className="h-10 w-10" />}
              title="Corporate VPN"
              description="Scalable WireGuard and IPsec solutions with comprehensive security controls. Our VPN solutions provide secure remote access for your workforce while maintaining the highest levels of data protection."
              slug="corporate-vpn"
            />
            <ServiceCard
              icon={<Settings className="h-10 w-10" />}
              title="DevOps Solutions"
              description="Streamline your development and operations with CI/CD pipelines and automation. Our DevOps practices accelerate software delivery while maintaining quality and reliability throughout the development lifecycle."
              slug="devops"
            />
            <ServiceCard
              icon={<Database className="h-10 w-10" />}
              title="Data Management"
              description="Secure, scalable data storage and analytics solutions for your business. We help you harness the power of your data with robust storage solutions, effective backup strategies, and insightful analytics."
              slug="data-management"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
