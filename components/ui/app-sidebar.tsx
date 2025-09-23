import { Bell, ClipboardList, ClipboardPenLine, Store, SunMoon, WalletMinimal, X } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"
import { div } from "framer-motion/client"

// Menu items.
const items = [
  {
    title: "Updates",
    url: "",
    icon: Bell,
    badge: 3,
  },
  {
    title: "Tasks",
    url: "",
    icon: ClipboardList,
    badge: 0,
  },
  {
    title: "Transactions",
    url: "",
    icon: ClipboardPenLine,
    badge: 1,
  },
  {
    title: "Vendors",
    url: "",
    icon: Store,
    badge: 5,
  },
  {
    title: "Wallets",
    url: "",
    icon: WalletMinimal,
    badge: 0,
  },
]

export function AppSidebar() {
  return (
    <div>

    <Sidebar collapsible="icon" side="left">
      <SidebarHeader className="text-2xl font-bold text-red-500 border-b border-b-accent">
        Amatsu
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu> 
              {items.map((item) => (
                <DrawerTrigger key={item.title} asChild>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="text-red-600">{item.badge > 0 ? item.badge : ""}</SidebarMenuBadge>
                  </SidebarMenuItem>
                </DrawerTrigger>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenuItem>
            <SunMoon />
            Change Theme
          </SidebarMenuItem>
      </SidebarFooter>

    </Sidebar>

            <DrawerContent className="fixed top-10 left-1/2 transform translate-x-[300px] w-80">
              <DrawerTitle>Hello</DrawerTitle>
              <DrawerHeader className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <DrawerClose>
                    <X size={18} className="cursor-pointer"/>
                  </DrawerClose>
                  <p className="text-2xl font-semibold">Updates</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Button variant={"secondary"}>All</Button>
                  <Button variant={"secondary"}>Unread</Button>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>

                </div>
    
  )
}