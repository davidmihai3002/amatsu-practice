import { Bell, Calendar, ClipboardList, ClipboardPenLine, Home, Inbox, Search, Settings, Store, SunMoon, WalletMinimal } from "lucide-react"

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

// Menu items.
const items = [
  {
    title: "Updates",
    url: "#",
    icon: Bell,
    badge: 3,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ClipboardList,
    badge: 0,
  },
  {
    title: "Transactions",
    url: "#",
    icon: ClipboardPenLine,
    badge: 1,
  },
  {
    title: "Vendors",
    url: "#",
    icon: Store,
    badge: 5,
  },
  {
    title: "Wallets",
    url: "#",
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
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge className="text-red-600">{item.badge > 0 ? item.badge : ""}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"ghost"}>
          <SunMoon />
          Change Theme
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}