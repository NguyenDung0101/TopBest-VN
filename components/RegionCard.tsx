import { MapPin, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface RegionCardProps {
  region: string
  description: string
  imageUrl?: string
}

export default function RegionCard({ region, description, imageUrl }: RegionCardProps) {
  const defaultImageUrl = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(region)}`

  return (
    <Card className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-0 shadow-lg dark:shadow-gray-900/20 overflow-hidden bg-white dark:bg-gray-800 h-full">
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl || defaultImageUrl}
          alt={`${region} - Top Best Việt Nam`}
          width={300}
          height={200}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">
            <Star className="w-3 h-3 mr-1" />
            Top Best
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-3 px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-gray-100 flex items-center">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-500 dark:text-red-400 flex-shrink-0" />
          <span className="truncate">{region}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
