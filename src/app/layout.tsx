import './globals.css';
import Header from '@/app/shared/components/header/Header';
import { Oswald } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';

// Define font styles
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose font weights
  variable: '--font-oswald', // Custom CSS variable (optional)
});

export const metadata = {
  title: 'Brolick Gym',
  description: 'Your fitness journey starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.className} ${oswald.variable}`}>
        {/* <div className='home-container'>
          <img src="/assets/images/Untitled.png" alt="man training" />
        </div> */}
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
