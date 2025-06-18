import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '오늘 뭐 먹지?',
  description: '오늘 뭐 먹을까 고민될 때, 오늘 뭐 먹지?',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ko'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
