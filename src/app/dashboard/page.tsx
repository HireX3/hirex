"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentApplications } from "@/components/dashboard/recent-applications"
import { Button } from "@/components/ui/button"
import { CalendarDays, TrendingUp, Users, CheckCircle2, Clock } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [stats] = useState({
    totalApplicants: 156,
    pendingInterviews: 12,
    completedInterviews: 89,
    hiredCandidates: 23,
    monthlyChange: "+12%"
  })

  return (
      <div className="flex-1 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hiring Dashboard</h2>
          <Button className="w-full sm:w-auto">
            <CalendarDays className="mr-2 h-4 w-4" />
            Schedule Interview
          </Button>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applicants
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalApplicants}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                {stats.monthlyChange} from last month
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Interviews
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingInterviews}</div>
              <p className="text-xs text-muted-foreground">
                Next interview in 2 days
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Interviews
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedInterviews}</div>
              <p className="text-xs text-muted-foreground">
                {stats.monthlyChange} from last month
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Hired Candidates
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.hiredCandidates}</div>
              <p className="text-xs text-muted-foreground">
                {stats.monthlyChange} from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-4 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interview Schedule</CardTitle>
              <CardDescription>
                Upcoming interviews and their status
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Recent Applicants</CardTitle>
              <CardDescription>
                Latest applications and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentApplications />
            </CardContent>
          </Card>
        </div>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Interview Results</CardTitle>
            <CardDescription>
              View and manage interview feedback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>No interview results yet</span>
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  View All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    
  )
} 