import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>NHL</title>
        <meta name="description" content="A better NHL stats website." />
        <link rel="icon" href="/hockey.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
