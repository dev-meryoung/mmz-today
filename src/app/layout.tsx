import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '오늘 뭐 먹지?',
  description: '오늘 뭐 먹을까 고민될 때, 오늘 뭐 먹지?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
