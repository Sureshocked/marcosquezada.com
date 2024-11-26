"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Cloud, Code2, Network } from "lucide-react"

export function SkillsSection() {
  return (
    <div className="grid gap-4 md:gap-6">
      <SkillCategory
        icon={Shield}
        title="System Administration"
        skills={[
          "Active Directory", "DNS", "DHCP",
          "Exchange Server",
          "Single Sign-On (SSO) Implementation",
          "User Access Management",
          "Migration Tools (BitTitan, MigrationWiz)"
        ]}
      />
      <SkillCategory
        icon={Cloud}
        title="Cloud & Enterprise Applications"
        skills={[
          "Microsoft 365 Suite",
          "Exchange Online",
          "SharePoint",
          "Intune MDM",
          "Azure",
          "VMware Horizon",
          "Citrix",
          "RDS/VDI",
          "FreshDesk",
          "JIRA"
        ]}
      />
      <SkillCategory
        icon={Code2}
        title="Development & Database"
        skills={[
          "SQL (Complex Queries, Data Analysis)",
          "PowerShell Scripting",
          "Python Scripting",
          "API Integration (XML, JSON, CSV)",
          "Web Application Support",
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Git Version Control",
          "REST APIs",
          "Component-Based Architecture",
          "Modern JavaScript (ES6+)"
        ]}
      />
      <SkillCategory
        icon={Network}
        title="Network Infrastructure"
        skills={[
          "Cisco Routers & Switches",
          "VLAN Configuration",
          "Network Troubleshooting",
          "Sophos",
          "SonicWall"
        ]}
      />
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
    <div className="group rounded-lg border p-3 md:p-4 hover:bg-muted/50 transition-colors">
      <div className="flex gap-3 md:gap-4">
        <Icon className="h-5 w-5 mt-1 text-primary shrink-0" />
        <div className="space-y-2 min-w-0">
          <h3 className="font-semibold text-sm md:text-base">{title}</h3>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs md:text-sm whitespace-normal text-left h-auto py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}