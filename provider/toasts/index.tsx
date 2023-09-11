import { Toasts } from '@backpackapp-io/react-native-toast'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
export function ToastsProvider({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets()
  //   const tabBarHeight = useBottomTabBarHeight()
  const tabBarHeight = 150
  return (
    <>
      {children}
      <Toasts extraInsets={{ bottom: tabBarHeight, top: 60 }} />
    </>
  )
}
