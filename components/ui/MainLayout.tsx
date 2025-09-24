"use client"

import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'

import { AppSidebar, getSidebarContent } from '@/components/ui/app-sidebar'
import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showUpdates, setShowUpdates] = useState(false)

  const updates = useMemo(() => getSidebarContent('Updates'), [])

  const handleSelectItem = useCallback((title: string) => {
    if (title === 'Updates') {
      setShowUpdates((prev) => !prev)
    } else {
      setShowUpdates(false)
    }
  }, [])

  return (
    <SidebarProvider className="grid min-h-svh w-full grid-rows-[auto_1fr] grid-cols-[auto_auto_1fr] bg-background">
      <header className="row-start-1 col-span-3 grid grid-cols-[var(--sidebar-width)_auto_1fr] items-center border-b border-b-accent gap-4 bg-white px-4 py-3">
        <div className="col-start-1 flex items-center gap-3">
          <Image src="/sky-coin.png" alt="Logo" width={36} height={36} />
          <h1 className="text-2xl font-bold text-red-500">Amatsu</h1>
        </div>
        <div className="col-span-2 col-start-2 flex items-center justify-start">
          <h1 className="text-xl font-bold my-4">Dashboard</h1>
          <SidebarTrigger />
        </div>
      </header>
      <div className="row-start-2 col-start-1 h-full relative">
        <AppSidebar onSelectItem={handleSelectItem} className="!absolute !inset-0 !h-full !w-full border-r border-r-accent" />
      </div>

      <aside
        id="updates"
        className={cn(
          'row-start-2 col-start-2 h-full transition-all duration-300 ease-in-out',
          showUpdates
            ? 'opacity-100 translate-x-0 w-80 md:w-96'
            : 'opacity-0 -translate-x-4 w-0 overflow-hidden'
        )}
      >
        <div className="bg-gray-50 h-full p-4 shadow-sm flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between border-b pb-3">
            <p className="text-2xl font-semibold">{updates.title}</p>
            <div className="flex flex-row gap-2 items-center">
              {updates.actions}
              <Button variant={"outline"} size={"sm"} onClick={() => setShowUpdates(false)}>
                Close
              </Button>
            </div>
          </div>
          <div className="flex-1">{updates.content}</div>
        </div>
      </aside>

      <main className="row-start-2 col-start-3 flex min-w-0 flex-col gap-6 p-4">
        {children}
      </main>
    </SidebarProvider>
  )
}

export default MainLayout
