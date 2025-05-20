"use client"

import { useEffect, useRef } from "react"

interface GeometricBackgroundProps {
  className?: string
}

export function GeometricBackground({ className }: GeometricBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create hexagon pattern
    const drawHexagons = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      ctx.clearRect(0, 0, width, height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(0, 109, 240, 0.05)")
      gradient.addColorStop(1, "rgba(0, 196, 180, 0.05)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const hexSize = 50
      const hexHeight = hexSize * Math.sqrt(3)
      const cols = Math.ceil(width / (hexSize * 1.5)) + 1
      const rows = Math.ceil(height / hexHeight) + 1

      ctx.strokeStyle = "rgba(0, 109, 240, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * hexSize * 1.5
          const y = i * hexHeight + (j % 2 === 0 ? 0 : hexHeight / 2)

          ctx.beginPath()
          for (let k = 0; k < 6; k++) {
            const angle = ((2 * Math.PI) / 6) * k
            const xPos = x + hexSize * Math.cos(angle)
            const yPos = y + hexSize * Math.sin(angle)

            if (k === 0) {
              ctx.moveTo(xPos, yPos)
            } else {
              ctx.lineTo(xPos, yPos)
            }
          }
          ctx.closePath()
          ctx.stroke()
        }
      }
    }

    drawHexagons()
    window.addEventListener("resize", drawHexagons)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", drawHexagons)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
