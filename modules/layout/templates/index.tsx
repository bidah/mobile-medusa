import Footer from '@/modules/layout/templates/footer'
import Nav from '@/modules/layout/templates/nav'
import React from 'react'
import { Text, View } from 'design'
import { Platform } from 'react-native'

const Layout: React.FC = ({ children }) => {
  return (
    <View>
      {Platform.OS === 'web' && <Nav />}
      <View className="relative">{children}</View>
      <Footer />
    </View>
  )
}

export default Layout
