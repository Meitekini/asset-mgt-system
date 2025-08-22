import { Navigation } from '@/components/header/navigation'
import React from 'react'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navigation />    
      <div>{children}</div>
    </div>
  )
    
}