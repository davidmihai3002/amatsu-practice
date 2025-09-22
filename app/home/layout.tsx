import { AppSidebar } from '@/components/ui/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
        <SidebarProvider>
          <AppSidebar />
          <main className='w-full flex flex-col px-12 py-6 gap-6'>
            <div className='flex flex-row gap-1 items-center'>
              <SidebarTrigger/>
              Dashboard
            </div>
            {children}
          </main>
        </SidebarProvider>
  )
}

export default layout
