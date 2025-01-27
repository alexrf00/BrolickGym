import './globals.css';
import Header from '@/app/shared/components/Header';

export const metadata = {
  title: 'Brolick Gym',
  description: 'Your fitness journey starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
