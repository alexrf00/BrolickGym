import './globals.css';
import Header from '@/app/shared/components/header/Header';
import { Oswald, Montserrat } from 'next/font/google';

// Define font styles
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose font weights
  variable: '--font-oswald', // Custom CSS variable (optional)
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-montserrat',
});
export const metadata = {
  title: 'Brolick Gym',
  description: 'Your fitness journey starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
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
