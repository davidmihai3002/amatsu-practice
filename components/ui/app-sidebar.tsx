"use client"

import { Bell, ClipboardList, ClipboardPenLine, Store, SunMoon, WalletMinimal } from "lucide-react"
import { useCallback } from "react"

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
export const getSidebarContent = (itemTitle: string) => {
    switch (itemTitle) {
      case "Updates":
        return {
          title: "Updates",
          content: (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">System Update Available</h4>
                <p className="text-sm text-muted-foreground">Version 2.1.0 is now available</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">New Feature Added</h4>
                <p className="text-sm text-muted-foreground">Dark mode support has been added</p>
              </div>
            </div>
          ),
          actions: (
            <div className="flex flex-row gap-2">
              <Button variant={"secondary"}>All</Button>
              <Button variant={"secondary"}>Unread</Button>
            </div>
          )
        }
      case "Tasks":
        return {
          title: "Tasks",
          content: (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Complete Project Review</h4>
                <p className="text-sm text-muted-foreground">Due: Tomorrow</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Update Documentation</h4>
                <p className="text-sm text-muted-foreground">Due: Next Week</p>
              </div>
            </div>
          ),
          actions: (
            <div className="flex flex-row gap-2">
              <Button variant={"secondary"}>All Tasks</Button>
              <Button variant={"secondary"}>Pending</Button>
            </div>
          )
        }
      case "Transactions":
        return {
          title: "Transactions",
          content: (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Payment Received</h4>
                <p className="text-sm text-muted-foreground">+$1,200.00</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Subscription Fee</h4>
                <p className="text-sm text-muted-foreground">-$29.99</p>
              </div>
            </div>
          ),
          actions: (
            <div className="flex flex-row gap-2">
              <Button variant={"secondary"}>All</Button>
              <Button variant={"secondary"}>This Month</Button>
            </div>
          )
        }
      case "Vendors":
        return {
          title: "Vendors",
          content: (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Tech Solutions Inc.</h4>
                <p className="text-sm text-muted-foreground">Active - 5 products</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Design Studio</h4>
                <p className="text-sm text-muted-foreground">Active - 3 products</p>
              </div>
            </div>
          ),
          actions: (
            <div className="flex flex-row gap-2">
              <Button variant={"secondary"}>All Vendors</Button>
              <Button variant={"secondary"}>Active</Button>
            </div>
          )
        }
      case "Wallets":
        return {
          title: "Wallets",
          content: (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Main Wallet</h4>
                <p className="text-sm text-muted-foreground">Balance: $2,450.00</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Savings Wallet</h4>
                <p className="text-sm text-muted-foreground">Balance: $5,200.00</p>
              </div>
            </div>
          ),
          actions: (
            <div className="flex flex-row gap-2">
              <Button variant={"secondary"}>All Wallets</Button>
              <Button variant={"secondary"}>Active</Button>
            </div>
          )
        }
      default:
        return {
          title: "Menu",
          content: <p>Select a menu item to view details</p>,
          actions: null
        }
    }
}

type AppSidebarProps = {
  onSelectItem?: (itemTitle: string) => void
  className?: string
}

export function AppSidebar({ onSelectItem, className }: AppSidebarProps) {
  const handleClick = useCallback(
    (title: string) => {
      onSelectItem?.(title)
    },
    [onSelectItem]
  )

  return (
    <Sidebar collapsible="icon" side="left" className={className}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => handleClick(item.title)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge className="text-red-600">{item.badge > 0 ? item.badge : ""}</SidebarMenuBadge>
                </SidebarMenuItem>
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