import './globals.css'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Atelier — apps with room to breathe', description: '一组独立、专注而有温度的应用。' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="zh-CN"><body><Header />{children}</body></html> }
