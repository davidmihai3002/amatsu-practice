import { AppSidebar } from '@/components/ui/app-sidebar'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import React from 'react'
// import { motion } from 'framer-motion'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
        <SidebarProvider>
          {/* add relative-left direction prop */}
          <Drawer direction='left' modal={false}>
            <AppSidebar/>
          <main className='w-full flex flex-col px-12 py-6 gap-6'>
            <div className='flex flex-row gap-1 items-center'>
              <SidebarTrigger/>
              Dashboard
            </div>
            {children}
          </main>
          </Drawer>
        </SidebarProvider>
  )
}

export default layout
