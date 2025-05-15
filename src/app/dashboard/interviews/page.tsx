"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Plus, Search } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data for interviews
const interviews = [
  {
    id: 1,
    candidate: "John Doe",
    position: "Senior Developer",
    status: "scheduled",
    date: "2024-03-20T10:00:00",
    interviewers: ["Sarah Wilson", "Mike Brown"],
    type: "Technical",
  },
  {
    id: 2,
    candidate: "Jane Smith",
    position: "Product Manager",
    status: "completed",
    date: "2024-03-19T14:30:00",
    interviewers: ["Alex Johnson"],
    type: "Behavioral",
  },
  {
    id: 3,
    candidate: "Mike Johnson",
    position: "UX Designer",
    status: "pending",
    date: "2024-03-21T11:00:00",
    interviewers: ["Lisa Chen", "Tom Wilson"],
    type: "Portfolio Review",
  },
]

const statusColors = {
  scheduled: "bg-blue-500",
  completed: "bg-green-500",
  pending: "bg-yellow-500",
}

const statusLabels = {
  scheduled: "Scheduled",
  completed: "Completed",
  pending: "Pending",
}

export default function InterviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredInterviews = interviews.filter((interview) => {
    const matchesSearch = interview.candidate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || interview.status === statusFilter
    const matchesType = typeFilter === "all" || interview.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const handleCreateInterview = () => {
    // Generate deep link for the exe app
    const deepLink = `zoom://interview/create?timestamp=${Date.now()}`
    window.location.href = deepLink
    setIsCreateDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Interviews</h2>
          <p className="text-muted-foreground">
            Manage and schedule candidate interviews
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Interview
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Interview</DialogTitle>
              <DialogDescription>
                This will open the interview scheduling application to create a new interview.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateInterview}>
                Open Interview App
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interview List</CardTitle>
          <CardDescription>
            View and manage all scheduled interviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search candidates or positions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Technical">Technical</SelectItem>
                <SelectItem value="Behavioral">Behavioral</SelectItem>
                <SelectItem value="Portfolio Review">Portfolio Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Interviewers</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInterviews.map((interview) => (
                  <TableRow key={interview.id}>
                    <TableCell className="font-medium">{interview.candidate}</TableCell>
                    <TableCell>{interview.position}</TableCell>
                    <TableCell>{interview.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{new Date(interview.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                        <span>{new Date(interview.date).toLocaleTimeString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>{interview.interviewers.join(", ")}</TableCell>
                    <TableCell>
                      <Badge 
                        className={`${statusColors[interview.status as keyof typeof statusColors]} text-[10px] px-2 py-0.5`}
                      >
                        {statusLabels[interview.status as keyof typeof statusLabels]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 