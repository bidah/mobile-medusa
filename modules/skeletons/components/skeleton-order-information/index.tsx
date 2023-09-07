import SkeletonCartTotals from '@/modules/skeletons/components/skeleton-cart-totals'
import { View } from 'design'

const SkeletonOrderInformation = () => {
  return (
    <View>
      <View className="grid grid-cols-1 gap-4 border-b border-gray-200 py-10 lg:grid-cols-2">
        <View className="flex flex-col">
          <View className="mb-4 h-4 w-32 bg-gray-100"></View>
          <View className="h-3 w-2/6 bg-gray-100"></View>
          <View className="my-2 h-3 w-3/6 bg-gray-100"></View>
          <View className="h-3 w-1/6 bg-gray-100"></View>
        </View>
        <View className="flex flex-col">
          <View className="mb-4 h-4 w-32 bg-gray-100"></View>
          <View className="h-3 w-2/6 bg-gray-100"></View>
          <View className="my-2 h-3 w-3/6 bg-gray-100"></View>
          <View className="h-3 w-2/6 bg-gray-100"></View>
          <View className="mt-2 h-3 w-1/6 bg-gray-100"></View>
          <View className="my-4 h-4 w-32 bg-gray-100"></View>
          <View className="h-3 w-1/6 bg-gray-100"></View>
        </View>
      </View>
      <View className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-2">
        <View className="flex flex-col">
          <View className="mb-4 h-4 w-32 bg-gray-100"></View>
          <View className="h-3 w-2/6 bg-gray-100"></View>
          <View className="my-4 h-3 w-3/6 bg-gray-100"></View>
        </View>

        <SkeletonCartTotals />
      </View>
    </View>
  )
}

export default SkeletonOrderInformation
