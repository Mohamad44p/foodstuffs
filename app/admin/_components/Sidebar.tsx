"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HomeIcon,
  UsersIcon,
  GlobeIcon,
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  useKindeBrowserClient,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const closeSidebar = () => setOpen(false);

  const SidebarContent = () => {
    const pathname = usePathname();

    return (
      <div className="flex h-full flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="flex items-center h-20 px-6 border-b border-gray-700/50">
          <LayoutDashboardIcon className="h-8 w-8 mr-2 text-blue-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Dashboard
          </h1>
        </div>
        <div className="flex flex-col items-center py-6 border-b border-gray-700/50">
          <Avatar className="h-20 w-20 mb-2">
            <AvatarImage
              src={user?.picture ?? "/UserPLacholder.jpg"}
              alt={user?.family_name ?? "User"}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">
            {user?.given_name} {user?.family_name}
          </h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-2 py-4">
            <h2 className="mb-2 px-4 text-xs font-semibold tracking-wider uppercase text-gray-400">
              Menu
            </h2>
            <NavItem
              href="/admin"
              icon={<HomeIcon className="mr-2 h-4 w-4" />}
              onClick={closeSidebar}
              active={pathname === "/"}
            >
              Home
            </NavItem>
            <NavItem
              href="/admin/clients"
              icon={<UsersIcon className="mr-2 h-4 w-4" />}
              onClick={closeSidebar}
              active={pathname  === "/clients"}
            >
              Brands
            </NavItem>
            <NavItem
              href="/settings"
              icon={<SettingsIcon className="mr-2 h-4 w-4" />}
              onClick={closeSidebar}
              active={pathname === "/settings"}
            >
              Settings
            </NavItem>
          </div>
          <div className="py-4">
            <h2 className="relative px-4 text-xs font-semibold tracking-wider uppercase text-gray-400">
              External Links
            </h2>
            <div className="mt-3">
              <NavItem
                href="/"
                icon={<GlobeIcon className="mr-2 h-4 w-4" />}
                external
              >
                Return to Website
              </NavItem>
            </div>
          </div>
        </ScrollArea>
        <div className="mt-auto p-4 border-t border-gray-700/50">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200"
            variant="destructive"
          >
            <LogoutLink className="flex items-center justify-center">
              <LogOutIcon className="mr-2 h-4 w-4" />
              Log out
            </LogoutLink>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <aside className="hidden h-screen w-64 flex-col lg:flex shadow-lg">
        <SidebarContent />
      </aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-40 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
  active?: boolean;
}

function NavItem({
  href,
  icon,
  children,
  onClick,
  external,
  active,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
        active ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700/50"
      }`}
    >
      {icon}
      <span>{children}</span>
      {external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      )}
    </Link>
  );
}
