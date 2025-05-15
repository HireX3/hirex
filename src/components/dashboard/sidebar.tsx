"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  onCollapse: (collapsed: boolean) => void
  isCollapsed: boolean
}

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Interviews",
    icon: Calendar,
    href: "/dashboard/interviews",
    color: "text-violet-500",
  },
  {
    label: "Applicants",
    icon: Users,
    href: "/dashboard/applicants",
    color: "text-pink-700",
  },
  {
    label: "Results",
    icon: FileText,
    href: "/dashboard/results",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-emerald-500",
  },
]

export function Sidebar({ onCollapse, isCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "h-full flex flex-col bg-[#111827] text-white transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-[240px]"
    )}>
      <div className="flex-1 px-3 py-4">
        <div className="flex items-center justify-between mb-14">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold">
              HireX
            </h1>
          )}
          <Button
            onClick={() => onCollapse(!isCollapsed)}
            variant="ghost"
            className="h-8 w-8 p-0 hover:bg-white/10 hidden md:flex"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                isCollapsed && "justify-center"
              )}
            >
              <div className={cn(
                "flex items-center",
                isCollapsed ? "justify-center" : "flex-1"
              )}>
                <route.icon className={cn("h-5 w-5", !isCollapsed && "mr-3", route.color)} />
                {!isCollapsed && route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-3">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-zinc-400 hover:text-white hover:bg-white/10",
            isCollapsed && "justify-center"
          )}
        >
          <LogOut className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
          {!isCollapsed && "Logout"}
        </Button>
      </div>
    </div>
  )
} 