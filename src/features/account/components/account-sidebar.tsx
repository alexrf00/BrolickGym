"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, CreditCard, LogOut, Settings, User } from "lucide-react"
import { useAuth } from "@/lib/providers/auth-provider"
import { useState } from "react"

export function AccountSidebar() {
  const { signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (error) {
      console.error("Error signing out:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <aside className="md:w-64">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="flex flex-col">
            <Link href="/account" className="flex items-center gap-2 px-4 py-2 bg-muted">
              <User className="h-4 w-4" />
              <span>Membership</span>
            </Link>
            <Link href="/account/billing" className="flex items-center gap-2 px-4 py-2 hover:bg-muted">
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </Link>
            <Link href="/account/schedule" className="flex items-center gap-2 px-4 py-2 hover:bg-muted">
              <CalendarDays className="h-4 w-4" />
              <span>Class Schedule</span>
            </Link>
            <Link href="/account/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-muted">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </CardContent>
        <CardFooter className="flex justify-between pt-4">
          <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut} disabled={isLoading}>
            <LogOut className="h-4 w-4 mr-2" />
            {isLoading ? "Signing out..." : "Sign Out"}
          </Button>
        </CardFooter>
      </Card>
    </aside>
  )
}
