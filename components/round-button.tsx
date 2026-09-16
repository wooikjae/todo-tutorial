import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function RoundButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return <Button className={cn("rounded-full", className)} {...props} />
}
