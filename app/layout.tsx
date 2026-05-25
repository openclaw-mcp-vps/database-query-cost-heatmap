import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Query Cost Heatmap — Visualize Expensive Database Queries',
  description: 'Connect your database, analyze query logs and execution plans, and see interactive heatmaps of your most expensive queries. Built for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="473e605f-aa02-4300-a841-1f3b95a77e09"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
