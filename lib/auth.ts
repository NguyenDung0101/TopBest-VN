import { config } from "./config"

export interface User {
  email: string
  isAuthenticated: boolean
}

export const mockLogin = (email: string, password: string): boolean => {
  return email === config.mockUser.email && password === config.mockUser.password
}

export const setAuthSession = (user: User): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_session", JSON.stringify(user))
    // Also set a cookie for server-side access
    document.cookie = `auth_session=${JSON.stringify(user)}; path=/; max-age=86400`
  }
}

export const getAuthSession = (): User | null => {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("auth_session")
    return session ? JSON.parse(session) : null
  }
  return null
}

export const clearAuthSession = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_session")
    // Also clear the cookie
    document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }
}

export const isAuthenticated = (): boolean => {
  const session = getAuthSession()
  return session?.isAuthenticated || false
}
