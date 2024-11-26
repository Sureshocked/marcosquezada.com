"use client"

import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <div className="grid gap-4 md:gap-6">
      <ExperienceItem
        title="Application Support Analyst"
        company="Aya Healthcare"
        period="March 2022 - Present"
        description={[
          "Provide technical support for external websites (AyaConnect, Optimizer, MyAya, Hiring Ops, DocCafe) and mobile apps",
          "Leverage SQL expertise for complex queries, data retrieval, and table modifications while ensuring data integrity",
          "Configure and manage automated job import systems including XML/JSON/CSV feed integration via HTTPS/FTP",
          "Collaborate with Product Management, Development, and QA teams for issue resolution",
          "Document and track customer software issues using FreshDesk and JIRA"
        ]}
      />
      <ExperienceItem
        title="System Administrator"
        company="Aya Healthcare"
        period="May 2019 - March 2022"
        description={[
          "Assisted in the migration of 600+ users from private cloud VDI to Office 365 with Intune MDM",
          "Executed Office 365 tenant-to-tenant migrations and implemented SSO for multiple services",
          "Designed and implemented Microsoft Deployment Toolkit server for system deployments",
          "Deployed Cisco enterprise network equipment in HQ and satellite offices",
          "Collaborated with Microsoft Premier Support for complex issue resolution"
        ]}
      />
      <ExperienceItem
        title="IT Support Specialist II"
        company="SACA Technologies"
        period="May 2017 - May 2019"
        description={[
          "Supported large-scale RDS/VDI solutions for IronOrbit Workspaces clients",
          "Provided L2/L3 support for on-premise, remote, and cloud environments",
          "Managed virtual desktop environments and Windows Servers",
          "Administered Exchange environments and cloud solutions",
          "Led client onboarding process from initial setup to going live"
        ]}
      />
    </div>
  )
}

function ExperienceItem({ title, company, period, description }: {
  title: string
  company: string
  period: string
  description: string[] 
}) {
  return (
    <div className="group rounded-lg border p-3 md:p-4 hover:bg-muted/50 transition-colors">
      <div className="flex gap-3 md:gap-4">
        <Briefcase className="h-5 w-5 mt-1 text-primary shrink-0" />
        <div className="space-y-2 min-w-0">
          <div>
            <h3 className="font-semibold text-sm md:text-base">{title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{company} • {period}</p>
          </div>
          <ul className="text-xs md:text-sm text-muted-foreground list-disc pl-4 space-y-1">
            {description.map((item, index) => (
              <li key={index} className="break-words">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}