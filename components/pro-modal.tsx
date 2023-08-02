'use client'

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { tools } from "@/constants"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import { Check, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

export const ProModal = () => {
    const ProModal = useProModal()
    const [loading, setLoading] = useState(false)
  
    const onSubscribe = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/stripe");
  
        window.location.href = response.data.url;
      } catch (error) {
        toast.error('Something went wrong')
      } finally {
        setLoading(false);
      }
    }

  return (
    <Dialog open={ProModal.isOpen} onOpenChange={ProModal.onClose}>
     <DialogContent>
        <DialogHeader>
        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pb-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
             <Card key={tool.href} className="flex p-3 border-black/5 gap-y-2 items-center justify-between">
               <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-6 h-6', tool.color)}/>  
                </div>
                <div className="font-semibold text-sm">
                    {tool.label}
                </div>
               </div>
               <Check className="text-primary w-5 h-5" />
             </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        <Button disabled={loading} onClick={onSubscribe} size="lg" variant="premium" className="w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
     </DialogContent>
    </Dialog>
  )
}
