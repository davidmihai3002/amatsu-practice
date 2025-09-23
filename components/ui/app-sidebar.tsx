import { Bell, ClipboardList, ClipboardPenLine, Store, SunMoon, WalletMinimal } from "lucide-react"

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
import { DrawerTrigger } from "./drawer"

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
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader className="text-2xl font-bold text-red-500">
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
  )
}