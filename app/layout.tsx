import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.scss'
import Dashboard from '@/components/Layouts/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Generated by Kohei Nagamatsu',
}
type Layout = { children: React.ReactNode }
export default function RootLayout(props: Layout) {
  const { children } = props
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Dashboard>
          {children}
        </Dashboard>
      </body>
    </html>
  )
}
