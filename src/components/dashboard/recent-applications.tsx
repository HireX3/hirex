"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

const applications = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Developer",
    status: "scheduled",
    interviewDate: "2024-03-20T10:00:00",
    avatar: "/avatars/01.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    status: "completed",
    interviewDate: "2024-03-19T14:30:00",
    avatar: "/avatars/02.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "UX Designer",
    status: "pending",
    interviewDate: null,
    avatar: "/avatars/03.png",
  },
]

const statusColors = {
  scheduled: "bg-blue-500",
  completed: "bg-green-500",
  pending: "bg-yellow-500",
}

const statusLabels = {
  scheduled: "Interview Scheduled",
  completed: "Interview Completed",
  pending: "Pending Review",
}

export function RecentApplications() {
  return (
    <div className="space-y-6">
      {applications.map((application) => (
        <div key={application.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src={application.avatar} alt={application.name} />
              <AvatarFallback>{application.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{application.name}</p>
              <p className="text-sm text-muted-foreground">{application.position}</p>
              {application.interviewDate && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(application.interviewDate).toLocaleDateString()}</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>{new Date(application.interviewDate).toLocaleTimeString()}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Badge 
              className={`${statusColors[application.status as keyof typeof statusColors]} text-[10px] px-2 py-0.5 min-w-[100px] text-center`}
            >
              {statusLabels[application.status as keyof typeof statusLabels]}
            </Badge>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
} 