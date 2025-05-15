import { useSession, signIn, signOut } from "next-auth/react"

export const useAuth = () => {
  const { data: session, status } = useSession()

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      return result
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  const loginWithGoogle = () => {
    return signIn("google", { callbackUrl: "/dashboard" })
  }

  const logout = () => {
    return signOut({ callbackUrl: "/" })
  }

  return {
    session,
    status,
    login,
    loginWithGoogle,
    logout,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
  }
} 