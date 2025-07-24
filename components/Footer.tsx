import Link from "next/link"
import { Award, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg md:text-xl text-red-400">Top Best Việt Nam</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md text-sm md:text-base leading-relaxed">
              Tôn vinh và lan tỏa những giá trị tốt đẹp nhất từ mọi miền đất nước Việt Nam. Kết nối cộng đồng, cổ vũ
              sáng tạo và ghi nhận những đóng góp nổi bật.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300 dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <span>info@topbestvietnam.vn</span>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-red-400">Về chúng tôi</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "Giới thiệu" },
                { href: "/mission", label: "Sứ mệnh" },
                { href: "/team", label: "Đội ngũ" },
                { href: "/news", label: "Tin tức" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-red-400">Liên hệ & Pháp lý</h3>
            <ul className="space-y-2">
              {[
                { href: "/contact", label: "Liên hệ" },
                { href: "/support", label: "Hỗ trợ" },
                { href: "/privacy", label: "Chính sách bảo mật" },
                { href: "/terms", label: "Điều khoản sử dụng" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
            © 2024 Top Best Việt Nam. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <Link
              href="/sitemap"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white text-sm transition-colors"
            >
              Sơ đồ trang web
            </Link>
            <Link
              href="/accessibility"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white text-sm transition-colors"
            >
              Khả năng tiếp cận
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
