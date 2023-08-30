import { Stack } from 'expo-router'
import Layout from 'modules/layout/templates'
import { Text, View } from 'design'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor: 'black' }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="products/[handle]" />
    </Stack>
  )
}

export default HomeLayout
