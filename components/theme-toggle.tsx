"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
        <div className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 p-0 hover:bg-red-100 dark:hover:bg-red-900/20"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-red-600 dark:text-red-400" />
      ) : (
        <Sun className="h-4 w-4 text-red-600 dark:text-red-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
