import './globals.css'
import { Nav } from './nav'
import { Inter } from '@next/font/google'

const inter = Inter()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>NHL</title>
        <meta name="description" content="A better NHL stats website." />
        <link rel="icon" href="/hockey.png" />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main style={{ marginTop: "var(--sp-xxl)" }}>
          {children}
        </main>
      </body>
    </html>
  )
}
