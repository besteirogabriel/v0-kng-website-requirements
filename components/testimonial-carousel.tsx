"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "KNG transformed our network infrastructure, reducing downtime by 99% and improving overall performance by 40%.",
    author: "Sarah Johnson",
    title: "CIO, Global Financial Services",
    logo: "/placeholder.svg?height=40&width=120",
    metrics: ["99% reduction in downtime", "40% performance improvement", "6-month ROI"],
  },
  {
    id: 2,
    quote:
      "The VPN solution implemented by KNG allowed our remote workforce to securely access company resources with zero security incidents.",
    author: "Michael Chen",
    title: "IT Director, Healthcare Solutions",
    logo: "/placeholder.svg?height=40&width=120",
    metrics: ["Zero security incidents", "100% remote workforce coverage", "3-month deployment"],
  },
  {
    id: 3,
    quote:
      "KNG's cloud architecture expertise helped us migrate our legacy systems to AWS, resulting in a 30% cost reduction and improved scalability.",
    author: "David Rodriguez",
    title: "VP of Engineering, E-commerce Platform",
    logo: "/placeholder.svg?height=40&width=120",
    metrics: ["30% cost reduction", "Improved scalability", "Seamless migration"],
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.author}'s company logo`}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                    <Quote className="h-10 w-10 text-[#006DF0]/20" />
                  </div>
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                      {testimonial.metrics.map((metric, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-[#006DF0]/10 text-[#006DF0] text-sm rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="h-10 w-10 rounded-full">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full p-0 ${index === activeIndex ? "bg-[#006DF0]" : "bg-gray-300"}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextSlide} className="h-10 w-10 rounded-full">
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
