export const metadata = {
  title: 'Foldcraft',
  description: 'Foldcraft MVP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
