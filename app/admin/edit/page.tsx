"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import { dataService, type Region } from "@/lib/data-service"
import { isAuthenticated } from "@/lib/auth"

export default function AdminEdit() {
  const [regions, setRegions] = useState<Region[]>([])
  const [editingRegion, setEditingRegion] = useState<Region | null>(null)
  const [formData, setFormData] = useState({ region: "", description: "" })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login")
      return
    }

    loadRegions()
  }, [router])

  const loadRegions = async () => {
    try {
      const data = await dataService.getRegions()
      setRegions(data)
    } catch (error) {
      console.error("Error loading regions:", error)
      setMessage({ type: "error", text: "Không thể tải dữ liệu địa phương" })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    try {
      if (editingRegion) {
        // Update existing region
        await dataService.updateRegion(editingRegion.id, formData)
        setMessage({ type: "success", text: "Cập nhật địa phương thành công!" })
      } else {
        // Create new region
        await dataService.createRegion(formData)
        setMessage({ type: "success", text: "Thêm địa phương mới thành công!" })
      }

      // Reset form and reload data
      setFormData({ region: "", description: "" })
      setEditingRegion(null)
      await loadRegions()
    } catch (error) {
      console.error("Error saving region:", error)
      setMessage({ type: "error", text: "Có lỗi xảy ra khi lưu dữ liệu" })
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (region: Region) => {
    setEditingRegion(region)
    setFormData({ region: region.region, description: region.description })
    setMessage(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa địa phương này?")) return

    try {
      await dataService.deleteRegion(id)
      setMessage({ type: "success", text: "Xóa địa phương thành công!" })
      await loadRegions()
    } catch (error) {
      console.error("Error deleting region:", error)
      setMessage({ type: "error", text: "Có lỗi xảy ra khi xóa địa phương" })
    }
  }

  const handleCancel = () => {
    setEditingRegion(null)
    setFormData({ region: "", description: "" })
    setMessage(null)
  }

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Chỉnh sửa địa phương</h1>
          <p className="text-gray-600 dark:text-gray-400">Quản lý danh sách các địa phương nổi bật</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {/* Form */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100 flex items-center">
                {editingRegion ? (
                  <>
                    <Edit className="h-5 w-5 mr-2 text-blue-600" />
                    Chỉnh sửa địa phương
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2 text-green-600" />
                    Thêm địa phương mới
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {editingRegion ? "Cập nhật thông tin địa phương đã chọn" : "Nhập thông tin để thêm địa phương mới"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="region" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Tên địa phương *
                  </Label>
                  <Input
                    id="region"
                    type="text"
                    placeholder="Ví dụ: Huế, Đà Lạt, Hà Giang..."
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    required
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Mô tả *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Mô tả ngắn gọn về đặc điểm nổi bật của địa phương..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  />
                </div>

                {message && (
                  <Alert variant={message.type === "error" ? "destructive" : "default"}>
                    {message.type === "success" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertDescription>{message.text}</AlertDescription>
                  </Alert>
                )}

                <div className="flex gap-3">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white" disabled={saving}>
                    <Save className="h-4 w-4 mr-2" />
                    {saving ? "Đang lưu..." : editingRegion ? "Cập nhật" : "Thêm mới"}
                  </Button>
                  {editingRegion && (
                    <Button type="button" variant="outline" onClick={handleCancel}>
                      Hủy
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Regions List */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100 flex items-center justify-between">
                <span className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-red-600" />
                  Danh sách địa phương
                </span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {regions.length} địa phương
                </Badge>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Nhấp vào địa phương để chỉnh sửa hoặc xóa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 md:max-h-96 overflow-y-auto scrollbar-thin">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className={`p-4 border rounded-lg transition-colors ${
                      editingRegion?.id === region.id
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{region.region}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{region.description}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(region)}
                          className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(region.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {regions.length === 0 && (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Chưa có địa phương nào được thêm</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
