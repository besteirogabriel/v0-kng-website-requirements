import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Corporate VPN: WireGuard vs. Traditional Solutions",
    excerpt:
      "Explore how WireGuard is revolutionizing corporate VPN deployments with superior performance and security.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 15, 2025",
    author: "Michael Chen",
    category: "VPN",
    tags: ["WireGuard", "Security", "Performance"],
    slug: "future-of-corporate-vpn",
  },
  {
    id: 2,
    title: "Implementing Zero Trust Architecture in Enterprise Networks",
    excerpt:
      "A comprehensive guide to implementing zero trust security principles in your enterprise network infrastructure.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 10, 2025",
    author: "Sarah Johnson",
    category: "Security",
    tags: ["Zero Trust", "Network Security", "Access Control"],
    slug: "implementing-zero-trust",
  },
  {
    id: 3,
    title: "Multi-Cloud Strategy: Benefits and Implementation Challenges",
    excerpt:
      "Learn about the advantages of a multi-cloud approach and how to overcome common implementation challenges.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 5, 2025",
    author: "John Smith",
    category: "Cloud",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP"],
    slug: "multi-cloud-strategy",
  },
  {
    id: 4,
    title: "DevOps Best Practices for Enterprise CI/CD Pipelines",
    excerpt: "Discover best practices for implementing and optimizing CI/CD pipelines in enterprise environments.",
    image: "/placeholder.svg?height=400&width=800",
    date: "April 28, 2025",
    author: "David Rodriguez",
    category: "DevOps",
    tags: ["CI/CD", "Automation", "Jenkins", "GitHub Actions"],
    slug: "devops-best-practices",
  },
  {
    id: 5,
    title: "Securing API Integrations in Enterprise Environments",
    excerpt: "Learn how to implement robust security measures for your enterprise API integrations.",
    image: "/placeholder.svg?height=400&width=800",
    date: "April 20, 2025",
    author: "Emily Wong",
    category: "Integrations",
    tags: ["API Security", "OAuth", "API Gateway"],
    slug: "securing-api-integrations",
  },
  {
    id: 6,
    title: "SD-WAN vs. Traditional WAN: Making the Right Choice",
    excerpt:
      "Compare software-defined WAN with traditional WAN solutions to determine the best fit for your organization.",
    image: "/placeholder.svg?height=400&width=800",
    date: "April 15, 2025",
    author: "Robert Johnson",
    category: "Networking",
    tags: ["SD-WAN", "WAN", "Network Infrastructure"],
    slug: "sd-wan-vs-traditional",
  },
]

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero title="Blog" description="Insights, guides, and industry perspectives from our team of experts" />

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#006DF0] transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {post.date} • by {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="text-[#006DF0] font-medium hover:underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
