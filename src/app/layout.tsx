import './globals.css';
import Header from '@/app/shared/components/header/Header';
import { Inter, Oswald } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import LoginDialog from './shared/components/LoginDialog/LoginDialog';
import { Button } from '@/components/ui/button';

// Define font styles
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose font weights
  variable: '--font-oswald', // Custom CSS variable (optional)
});
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Brolick Gym',
  description: 'Your fitness journey starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
  );
}
