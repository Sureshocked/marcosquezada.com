"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Github, MapPin, Mail, Phone } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { ExperienceSection } from "@/components/resume-sections/experience-section"
import { EducationSection } from "@/components/resume-sections/education-section"
import { SkillsSection } from "@/components/resume-sections/skills-section"
import { ProfileImageModal } from "@/components/profile-image-modal"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const profileImage = "https://i.imgur.com/feMI5EC.jpg"

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 right-0 p-4 z-50">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[40vh] md:min-h-[35vh] bg-gradient-to-r from-primary/10 via-primary/5 to-background flex items-center justify-center py-12 px-4">
        <div className="flex flex-col items-center space-y-6 max-w-full">
          <button
            onClick={() => setIsImageModalOpen(true)}
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Image
              src={profileImage}
              alt="Marcos Quezada"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </button>
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Marcos Quezada</h1>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Remote • California</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground break-all">marcosquezada90@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">909-538-2662</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Sureshocked/marcosquezada.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Card className="p-4 md:p-6 shadow-lg">
          <Tabs defaultValue="experience" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="p-1">
              <ExperienceSection />
            </TabsContent>

            <TabsContent value="skills" className="p-1">
              <SkillsSection />
            </TabsContent>

            <TabsContent value="education" className="p-1">
              <EducationSection />
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <ProfileImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={profileImage}
      />
    </main>
  )
}