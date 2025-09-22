import { Bell, Calendar, ClipboardList, ClipboardPenLine, Home, Inbox, Search, Settings, Store, WalletMinimal } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Updates",
    url: "#",
    icon: Bell,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ClipboardList,
  },
  {
    title: "Transactions",
    url: "#",
    icon: ClipboardPenLine,
  },
  {
    title: "Vendors",
    url: "#",
    icon: Store,
  },
  {
    title: "Wallets",
    url: "#",
    icon: WalletMinimal,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}