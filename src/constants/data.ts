import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Admins",
    href: "/admins",
    icon: "admin",
    label: "admins",
  },
  // {
  //   title: "Statistics",
  //   href: "/statistics",
  //   icon: "statistics",
  //   label: "statistics",
  // },
  {
    title: "Users",
    href: "/users",
    icon: "users",
    label: "Users",
  },
  // {
  //   title: "Subscription",
  //   href: "/subscription",
  //   icon: "subscription",
  //   label: "Subscription",
  // },
  // {
  //   title: "Transection",
  //   href: "/transaction",
  //   icon: "transaction",
  //   label: "Transection",
  // },
  {
    title: "Profile",
    href: "/profile",
    icon: "user",
    label: "Profile",
  },
  // {
  //   title: "Settings",
  //   href: "/settings",
  //   icon: "settings",
  //   label: "settings",
  // },
  {
    title: "Log out",
    href: "/login",
    icon: "login",
    label: "Log out",
  },
];

export type User = {
  id: number;
  name: string;
  gmail: string;
  // role: string;
  role: "Admin" | "User" | "Editor";
  joinDate: string;
  subscriptions: string[];
};

export interface AdminUser {
  name: string;
  gmail: string;
  joinDate: string;
  role?: string;
  imageUrl?: string;
  phoneNumber?: string;
}
