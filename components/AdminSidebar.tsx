"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Edit, Settings, LogOut, Award } from "lucide-react";
import { clearAuthSession } from "@/lib/auth";
import { ThemeToggle } from "./theme-toggle";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    clearAuthSession();
    router.push("/admin/login");
  };

  const menuItems = [
    { href: "/admin", icon: Home, label: "Dashboard", exact: true },
    { href: "/admin/edit", icon: Edit, label: "Chỉnh sửa địa phương" },
    { href: "/admin/settings", icon: Settings, label: "Cài đặt" },
  ];

  return (
    <div className="w-64 bg-gray-900 dark:bg-gray-950 text-white min-h-screen flex flex-col border-r border-gray-800 dark:border-gray-700">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-red-400">Admin Panel</h2>
              <p className="text-xs text-gray-400">Top Best Việt Nam</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-600 dark:bg-red-700 text-white"
                      : "text-gray-300 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700 dark:border-gray-600">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 dark:text-gray-400 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white transition-colors w-full text-left"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}
