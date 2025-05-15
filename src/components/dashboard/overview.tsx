"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "Mon",
    scheduled: 5,
    completed: 3,
  },
  {
    name: "Tue",
    scheduled: 7,
    completed: 4,
  },
  {
    name: "Wed",
    scheduled: 4,
    completed: 2,
  },
  {
    name: "Thu",
    scheduled: 6,
    completed: 5,
  },
  {
    name: "Fri",
    scheduled: 3,
    completed: 1,
  },
  {
    name: "Sat",
    scheduled: 0,
    completed: 0,
  },
  {
    name: "Sun",
    scheduled: 0,
    completed: 0,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `${value}`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "#1f2937",
            border: "none",
            borderRadius: "8px",
            color: "#fff"
          }}
        />
        <Legend />
        <Bar
          dataKey="scheduled"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-blue-500"
          name="Scheduled"
        />
        <Bar
          dataKey="completed"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-green-500"
          name="Completed"
        />
      </BarChart>
    </ResponsiveContainer>
  )
} 