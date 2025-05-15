import { NextResponse } from "next/server"
import { AppDataSource } from "@/lib/db/database"
import { User } from "@/lib/db/entities/User"
import bcrypt from "bcryptjs"
import { sign } from "jsonwebtoken"

// Initialize TypeORM
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const userRepository = AppDataSource.getRepository(User)

    // Find user
    const user = await userRepository.findOne({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1d" }
    )

    return NextResponse.json(
      { token, user: { id: user.id, name: user.name, email: user.email } },
      { status: 200 }
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Error during login" },
      { status: 500 }
    )
  }
} 