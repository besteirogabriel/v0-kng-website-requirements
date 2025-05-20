import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#2D2F33] border-t border-gray-800 py-12 text-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/images/kng-logo.png" alt="KNG Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-white text-xl font-heading">KNG</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Specialized IT and network solutions firm offering cloud architecture, enterprise integrations and secure
              corporate VPN deployments.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cloud-architecture" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-infrastructure"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Network Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterprise-integrations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Enterprise Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-vpn" className="text-gray-400 hover:text-white transition-colors">
                  Corporate VPN
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-gray-400 hover:text-white transition-colors">
                  DevOps Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-gray-400">
              <p>123 Tech Plaza, Suite 400</p>
              <p>San Francisco, CA 94105</p>
              <p className="mt-4">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@kng-solutions.com" className="hover:text-white transition-colors">
                  info@kng-solutions.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} KNG Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
