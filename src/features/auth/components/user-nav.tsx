"use client"

import { useState } from "react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/providers/auth-provider"

export function UserNav() {
  const { user, signOut } = useAuth()
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

  const userInitials = user?.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
    : user?.email?.substring(0, 2).toUpperCase() || "U"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || "User"} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.displayName || "User"}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/billing">Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} disabled={isLoading}>
          {isLoading ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
