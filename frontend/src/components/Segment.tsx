"use client"
import React, { useRef } from "react"
import gsap from "gsap"

const Segment: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Larger width → start at 20, end at 800
  const initialPath = `M 20 100 Q 400 100 800 100`
  const finalPath = `M 20 100 Q 400 100 800 100`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Control point relative to container size for smoother animation
    const dampedX = 200 + (x / rect.width) * 400 // stays within ~200-600
    const dampedY = 100 + (y / rect.height) * 80 - 50 // oscillates around 100

    const newPath = `M 20 100 Q ${dampedX} ${dampedY} 800 100`

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.25,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = () => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="absolute mx-auto string h-[150px] w-full flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG width updated */}
      <svg width="820" height="200">
        <path
          ref={pathRef}
          d={initialPath}
          className="stroke-amber-500 dark:stroke-white  stroke-2 fill-transparent"
        />
      </svg>
    </div>
  )
}

export default Segment
