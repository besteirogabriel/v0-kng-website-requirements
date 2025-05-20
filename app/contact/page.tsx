import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        description="Get in touch with our team to discuss your IT and network solutions needs"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your IT infrastructure? Contact our team to schedule a consultation or request a
                custom quote. We're here to help you with all your cloud, networking, and security needs.
              </p>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-[#006DF0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-muted-foreground">123 Tech Plaza, Suite 400, San Francisco, CA 94105</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#006DF0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="h-12 w-12 rounded-full bg-[#006DF0]/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#006DF0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">info@kng-solutions.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-[#F5F7FA] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What services does KNG offer?</h3>
                <p className="text-muted-foreground">
                  KNG offers a comprehensive range of IT and network solutions, including cloud architecture, network
                  infrastructure, enterprise integrations, corporate VPN, and DevOps solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How quickly can you implement a solution?</h3>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on project scope and complexity. Typically, our solutions can be
                  implemented within 2-12 weeks, with phased approaches for larger projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer ongoing support and maintenance?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer comprehensive managed services with 24/7 monitoring, regular maintenance, and dedicated
                  support to ensure your systems operate at peak performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What industries do you serve?</h3>
                <p className="text-muted-foreground">
                  We serve a wide range of industries, including financial services, healthcare, manufacturing, retail,
                  technology, and more. Our solutions are tailored to meet industry-specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
