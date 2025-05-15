"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-[60]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 h-screen z-50
        transform transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isSidebarCollapsed ? 'w-[80px]' : 'w-[240px]'}
      `}>
        <Sidebar onCollapse={setIsSidebarCollapsed} isCollapsed={isSidebarCollapsed} />
      </aside>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <main className={`
        flex-1 min-h-screen overflow-y-auto w-full
        transition-all duration-300 ease-in-out
        
      `}>
        <div className="p-4 md:p-8 pt-16 md:pt-6">
          {children}
        </div>
      </main>
    </div>
  )
} 