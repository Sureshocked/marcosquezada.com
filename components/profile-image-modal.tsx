"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import Image from "next/image"

interface ProfileImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
}

export function ProfileImageModal({ isOpen, onClose, imageUrl }: ProfileImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Profile Picture of Marcos Quezada</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl}
            alt="Marcos Quezada"
            fill
            className="object-cover object-[center_10%]"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}