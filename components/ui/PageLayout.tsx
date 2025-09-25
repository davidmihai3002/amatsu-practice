"use client"

import React from 'react'
import MainLayout from '@/components/ui/MainLayout'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <section 
        data-testid="content-section"
        className="p-4 m-4 bg-card border rounded-md h-full flex flex-col"
      >
        {children}
      </section>
    </MainLayout>
  )
}
