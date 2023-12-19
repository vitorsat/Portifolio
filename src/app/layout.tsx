import StyledComponentsRegistry from '@/lib/registry';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/alien.svg" />
        <title>Vitor Saturnino</title>
      </head>
      <body className={merriweather.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}
