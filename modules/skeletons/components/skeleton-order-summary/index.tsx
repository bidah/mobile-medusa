import SkeletonButton from 'modules/skeletons/components/skeleton-button'
import SkeletonCartTotals from 'modules/skeletons/components/skeleton-cart-totals'
import { View } from 'design'

const SkeletonOrderSummary = () => {
  return (
    <View className="grid-cols-1">
      <SkeletonCartTotals header={false} />
      <View className="mt-4">
        <SkeletonButton />
      </View>
    </View>
  )
}

export default SkeletonOrderSummary
