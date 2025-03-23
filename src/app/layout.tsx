import { AuthProvider } from "@/contexts/firebase-auth-context"
import './globals.css';

export const metadata = {
  title: 'Brolick Gym',
  description: 'Your fitness journey starts here.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

