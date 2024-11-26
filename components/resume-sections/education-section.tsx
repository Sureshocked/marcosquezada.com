"use client"

import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <div className="grid gap-4 md:gap-6">
      <EducationItem
        degree="Associate of Science (AS) in Computer Programming"
        school="Mt. San Antonio College (Mt. SAC)"
        period="June 2017"
        description="Walnut, CA"
      />
    </div>
  )
}

function EducationItem({ degree, school, period, description }: {
  degree: string
  school: string
  period: string
  description: string
}) {
  return (
    <div className="group rounded-lg border p-3 md:p-4 hover:bg-muted/50 transition-colors">
      <div className="flex gap-3 md:gap-4">
        <GraduationCap className="h-5 w-5 mt-1 text-primary shrink-0" />
        <div className="space-y-2 min-w-0">
          <div>
            <h3 className="font-semibold text-sm md:text-base">{degree}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{school} • {period}</p>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}