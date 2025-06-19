import '@/app/_styles/global.css';
import { ThemeProvider } from 'next-themes';
import LayoutClient from './layout-client';

export const metadata = {
  title: 'MyWebsite',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LayoutClient>{children}</LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
