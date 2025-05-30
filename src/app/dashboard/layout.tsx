"use client"

import { DashboardShell } from "@/components/dashboard/shell"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell>{children}</DashboardShell>
  )
}
