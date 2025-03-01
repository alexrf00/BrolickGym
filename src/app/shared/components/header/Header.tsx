import Link from "next/link"
import LoginDialog from "@/app/shared/components/LoginDialog/LoginDialog"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#classes", label: "Classes" },
  { href: "#trainers", label: "Trainers" },
  { href: "#location", label: "Location" },
]

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-red-500">GymFlex</h1>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white hover:text-red-500 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <LoginDialog />
        </div>
      </div>
    </header>
  )
}

