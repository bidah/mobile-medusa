import { View, ScrollView, Stack } from 'design'

import Hero from './components/hero'
import FeaturedProducts from '@/modules/home/components/featured-products'

export function HomeScreen() {
  
  return (
    <ScrollView className={'bg-white'}>
      <Hero />
      <FeaturedProducts />
      {/*<View className="h-[400px] bg-red-400" />*/}
    </ScrollView>
  )
}
