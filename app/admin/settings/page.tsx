"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Database, Shield, Bell, Globe } from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import { isAuthenticated } from "@/lib/auth"
import { config } from "@/lib/config"

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    useSupabase: config.useSupabase,
    notifications: true,
    publicAccess: true,
    autoBackup: false,
  })
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login")
      return
    }
  }, [router])

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const settingsGroups = [
    {
      title: "Cơ sở dữ liệu",
      icon: Database,
      items: [
        {
          key: "useSupabase",
          label: "Sử dụng Supabase",
          description: "Kết nối với cơ sở dữ liệu Supabase thay vì dữ liệu mock",
          value: settings.useSupabase,
        },
        {
          key: "autoBackup",
          label: "Tự động sao lưu",
          description: "Tự động sao lưu dữ liệu hàng ngày",
          value: settings.autoBackup,
        },
      ],
    },
    {
      title: "Bảo mật",
      icon: Shield,
      items: [
        {
          key: "publicAccess",
          label: "Truy cập công khai",
          description: "Cho phép truy cập trang chủ mà không cần đăng nhập",
          value: settings.publicAccess,
        },
      ],
    },
    {
      title: "Thông báo",
      icon: Bell,
      items: [
        {
          key: "notifications",
          label: "Thông báo email",
          description: "Nhận thông báo qua email khi có đề cử mới",
          value: settings.notifications,
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cài đặt hệ thống</h1>
          <p className="text-gray-600">Quản lý cấu hình và tùy chọn hệ thống</p>
        </div>

        <div className="space-y-6">
          {settingsGroups.map((group, groupIndex) => (
            <Card key={groupIndex} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <group.icon className="h-5 w-5 mr-2 text-red-600" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {group.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Label htmlFor={item.key} className="font-medium text-gray-900">
                            {item.label}
                          </Label>
                          {item.key === "useSupabase" && (
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                              Sắp có
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <Switch
                        id={item.key}
                        checked={item.value}
                        onCheckedChange={(checked) => handleSettingChange(item.key, checked)}
                        disabled={item.key === "useSupabase"} // Disable Supabase toggle for now
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* System Info */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-red-600" />
                Thông tin hệ thống
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Phiên bản</h4>
                  <p className="text-sm text-gray-600">v1.0.0</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Cơ sở dữ liệu</h4>
                  <p className="text-sm text-gray-600">{settings.useSupabase ? "Supabase" : "Mock Data"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Trạng thái</h4>
                  <Badge className="bg-green-100 text-green-700">Hoạt động</Badge>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Lần cập nhật cuối</h4>
                  <p className="text-sm text-gray-600">{new Date().toLocaleDateString("vi-VN")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Settings className="h-4 w-4 mr-2" />
              Lưu cài đặt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
