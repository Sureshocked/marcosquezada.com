"use client"

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Cloud, Code2, Network } from "lucide-react"
import { Search } from "lucide-react"

export function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = [
    {
      icon: Cloud,
      title: "Cloud & Systems",
      skills: [
        "Docker",
        "Azure",
        "Microsoft 365",
        "VMware Horizon",
        "Citrix",
        "RDS/VDI",
        "Active Directory",
        "SSO",
        "Intune MDM",
        "Linux (Debian/RHEL)",
        "Google Cloud Platform (GCP)",
        "Kubernetes"
      ]
    },
    {
      icon: Code2,
      title: "Development & Data",
      skills: [
        "React.js",
        "Next.js",
        "Nginx",
        "Apache",
        "REST APIs",
        "SQL",
        "Bash Scripting",
        "PowerShell Scripting",
        "Python",
        "Git",
        "XML/JSON Integration",
        "JIRA",
        "FreshDesk"
      ]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      skills: [
        "Cisco Routers/Switches",
        "DNS",
        "DHCP",
        "VLANs",
        "Sophos",
        "SonicWall"
      ]
    }
  ]

  const filteredCategories = categories.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0)

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full p-2 pl-10 rounded-lg border bg-background hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="grid gap-4 md:gap-6">
        {filteredCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  )
}

function SkillCategory({ 
  icon: Icon,
  title, 
  skills 
}: { 
  icon: React.ElementType
  title: string
  skills: string[] 
}) {
  return (
    <div className="group rounded-lg border p-3 md:p-4 hover:bg-muted/50 transition-all duration-300 hover:shadow-md">
      <div className="flex gap-3 md:gap-4">
        <Icon className="h-5 w-5 mt-1 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <div className="space-y-2 min-w-0">
          <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-xs md:text-sm whitespace-normal text-left h-auto py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection