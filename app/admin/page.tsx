"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Edit, Plus, BarChart3, TrendingUp } from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import { dataService, type Region } from "@/lib/data-service"
import { isAuthenticated } from "@/lib/auth"

export default function AdminDashboard() {
  const [regions, setRegions] = useState<Region[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login")
      return
    }

    const loadRegions = async () => {
      try {
        const data = await dataService.getRegions()
        setRegions(data)
      } catch (error) {
        console.error("Error loading regions:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRegions()
  }, [router])

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Tổng số địa phương",
      value: regions.length,
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Đề cử mới",
      value: "12",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Lượt xem tháng",
      value: "2.4K",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Quản lý hệ thống Top Best Việt Nam</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg dark:shadow-gray-900/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Regions */}
          <Card className="border-0 shadow-lg dark:shadow-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Địa phương gần đây</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Danh sách các địa phương đã được thêm
                </CardDescription>
              </div>
              <Button onClick={() => router.push("/admin/edit")} className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                Thêm mới
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regions.slice(0, 5).map((region) => (
                  <div
                    key={region.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">{region.region}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-xs">
                          {region.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Hoạt động
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg dark:shadow-gray-900/50">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Thao tác nhanh</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Các chức năng quản trị thường dùng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  onClick={() => router.push("/admin/edit")}
                  className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Edit className="h-4 w-4 mr-3" />
                  Chỉnh sửa địa phương
                </Button>
                <Button
                  onClick={() => router.push("/")}
                  className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Users className="h-4 w-4 mr-3" />
                  Xem trang công khai
                </Button>
                <Button
                  onClick={() => router.push("/admin/settings")}
                  className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <BarChart3 className="h-4 w-4 mr-3" />
                  Cài đặt hệ thống
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
