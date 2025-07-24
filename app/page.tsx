import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Send, Search } from "lucide-react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RegionCard from "@/components/RegionCard"
import { dataService } from "@/lib/data-service"

export default async function Home() {
  // Fetch data directly in the server component
  const regions = await dataService.getRegions()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-red-50 via-yellow-50 to-red-50 dark:from-red-950/20 dark:via-yellow-950/20 dark:to-red-950/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_500px] xl:gap-12">
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="space-y-3 md:space-y-4">
                  <Badge
                    variant="secondary"
                    className="w-fit mx-auto lg:mx-0 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Tôn vinh tinh hoa địa phương
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-red-600 to-yellow-600 dark:from-red-400 dark:to-yellow-400 bg-clip-text text-transparent">
                    Top Best Việt Nam
                  </h1>
                  <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                    Khám phá và tôn vinh những điều tốt đẹp nhất đến từ mọi miền đất nước. Từ con người tài năng, sản
                    phẩm đặc sắc, đến các hoạt động cộng đồng đầy cảm hứng.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Gửi đề cử ngay
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/30 bg-transparent"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Khám phá các địa phương
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center order-first lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Top+Best+Vietnam"
                  width={500}
                  height={400}
                  alt="Top Best Việt Nam - Tôn vinh tinh hoa địa phương"
                  className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover shadow-2xl dark:shadow-gray-900/50 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                Các hạng mục vinh danh
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                Mỗi địa phương có thể được vinh danh trong các hạng mục đặc biệt phản ánh bản sắc và giá trị riêng biệt.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                {
                  title: "Con người truyền cảm hứng",
                  description: "Doanh nhân, nghệ sĩ, nhà giáo, nhà hoạt động xã hội",
                  icon: "👥",
                },
                {
                  title: "Sản phẩm đặc trưng",
                  description: "Đặc sản, sản phẩm OCOP, thủ công mỹ nghệ",
                  icon: "🏆",
                },
                {
                  title: "Hoạt động nổi bật",
                  description: "Sự kiện văn hóa, hoạt động cộng đồng, sáng kiến môi trường",
                  icon: "🎭",
                },
                {
                  title: "Doanh nghiệp tiêu biểu",
                  description: "Startup sáng tạo, doanh nghiệp bền vững",
                  icon: "🏢",
                },
                {
                  title: "Không gian đáng sống",
                  description: "Địa điểm nên đến, không gian văn hóa độc đáo",
                  icon: "🏛️",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="group p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:border-red-200 dark:hover:border-red-800"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-center">{category.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section id="regions" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                Địa phương nổi bật
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                Khám phá những vùng đất đặc sắc với bản sắc văn hóa riêng biệt và những giá trị tốt đẹp đáng tự hào.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {regions.map((region) => (
                <RegionCard key={region.id} region={region.region} description={region.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                Cách lựa chọn và đề cử
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                Quy trình đề cử và lựa chọn minh bạch, công bằng với sự tham gia của cộng đồng.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Đề cử",
                  description: "Người dân địa phương, cộng đồng mạng và các tổ chức có thể đề cử hoặc bình chọn.",
                },
                {
                  step: "02",
                  title: "Đánh giá",
                  description: "Tiêu chí rõ ràng, minh bạch và có hội đồng đánh giá địa phương cùng tham gia.",
                },
                {
                  step: "03",
                  title: "Vinh danh",
                  description: "Đăng ký đề cử trực tuyến – Tự hào giới thiệu điều 'best' của quê hương mình.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                Lợi ích khi được vinh danh
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                Những giá trị thiết thực mà chương trình mang lại cho các địa phương và cộng đồng.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
              {[
                {
                  title: "Quảng bá rộng rãi",
                  description: "Cơ hội quảng bá rộng rãi đến cộng đồng trong nước và quốc tế.",
                  icon: "🌍",
                },
                {
                  title: "Xây dựng thương hiệu",
                  description: "Hỗ trợ truyền thông, xây dựng thương hiệu địa phương mạnh mẽ.",
                  icon: "🏷️",
                },
                {
                  title: "Phát triển bền vững",
                  description: "Thúc đẩy tinh thần cộng đồng và sự phát triển bền vững.",
                  icon: "🌱",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg dark:shadow-gray-900/50"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                  Về Top Best Việt Nam
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="text-base md:text-lg">
                    "Top Best Việt Nam" là chiến dịch nhằm lan toả những giá trị tốt đẹp từ các tỉnh thành trên cả nước.
                  </p>
                  <p className="text-sm md:text-base">
                    Mỗi địa phương sẽ có một danh sách "Best" riêng – phản ánh bản sắc, sự phát triển và niềm tự hào
                    vùng miền.
                  </p>
                  <p className="text-sm md:text-base">
                    Đây là nơi kết nối cộng đồng, cổ vũ sáng tạo, và ghi nhận những đóng góp nổi bật ở cấp địa phương.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Vietnam+Map"
                  width={400}
                  height={300}
                  alt="Bản đồ Việt Nam"
                  className="rounded-lg shadow-lg dark:shadow-gray-900/50 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-r from-red-600 to-yellow-600 dark:from-red-700 dark:to-yellow-700"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
                Bạn tự hào về điều gì nhất ở quê hương mình?
              </h2>
              <p className="max-w-[600px] text-base md:text-lg lg:text-xl leading-relaxed text-white/90">
                Hãy cùng "Top Best Việt Nam" lan tỏa điều tốt đẹp đó!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <Send className="mr-2 h-5 w-5" />
                  Gửi đề cử ngay
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Khám phá các địa phương
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
