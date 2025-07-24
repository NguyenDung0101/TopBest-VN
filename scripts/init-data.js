// This script can be used to initialize the project with sample data
// Run with: node scripts/init-data.js

const fs = require("fs")
const path = require("path")

const sampleRegions = [
  {
    id: "1",
    region: "Huế",
    description: "Cố đô với di sản văn hóa thế giới, ẩm thực cung đình tinh tế và kiến trúc hoàng gia độc đáo.",
  },
  {
    id: "2",
    region: "Đà Lạt",
    description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm, cảnh quan thơ mộng và nông sản đặc trưng.",
  },
  {
    id: "3",
    region: "Hà Giang",
    description:
      "Vùng đất địa đầu Tổ quốc với ruộng bậc thang hùng vĩ, văn hóa dân tộc đa dạng và cảnh quan núi non kỳ vĩ.",
  },
  {
    id: "4",
    region: "Cần Thơ",
    description: "Trái tim đồng bằng sông Cửu Long với chợ nổi độc đáo, vườn trái cây tươi ngon và văn hóa miệt vườn.",
  },
  {
    id: "5",
    region: "Hội An",
    description: "Phố cổ với kiến trúc độc đáo, đèn lồng rực rỡ và ẩm thực đường phố phong phú.",
  },
  {
    id: "6",
    region: "Sa Pa",
    description: "Thị trấn miền núi với ruộng bậc thang tuyệt đẹp, khí hậu mát mẻ và văn hóa dân tộc thiểu số.",
  },
  {
    id: "7",
    region: "Phú Quốc",
    description: "Đảo ngọc với bãi biển trong xanh, hải sản tươi ngon và khu nghỉ dưỡng đẳng cấp thế giới.",
  },
  {
    id: "8",
    region: "Ninh Bình",
    description: "Vịnh Hạ Long trên cạn với cảnh quan karst hùng vĩ, di tích lịch sử và văn hóa tâm linh.",
  },
]

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, "..", "data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Write sample data to regions.json
const regionsFile = path.join(dataDir, "regions.json")
fs.writeFileSync(regionsFile, JSON.stringify(sampleRegions, null, 2))

console.log("✅ Sample data initialized successfully!")
console.log(`📁 Data file created at: ${regionsFile}`)
console.log(`📊 Added ${sampleRegions.length} sample regions`)
