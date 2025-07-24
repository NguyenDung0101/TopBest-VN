"use client"

import Link from "next/link"
import { Award, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "#regions", label: "Địa phương" },
    { href: "#about", label: "Về chúng tôi" },
    { href: "#contact", label: "Liên hệ" },
  ]

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50 border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
          <Award className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-xl text-red-600 dark:text-red-400 hidden sm:block">Top Best Việt Nam</span>
        <span className="font-bold text-lg text-red-600 dark:text-red-400 sm:hidden">Top Best VN</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 lg:gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors text-gray-700 dark:text-gray-300"
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-9 h-9 p-0">
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors text-gray-700 dark:text-gray-300 py-2 border-b border-gray-200 dark:border-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
