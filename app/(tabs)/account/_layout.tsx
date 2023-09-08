import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'

const AccountLayout = () => {
  return (
    <BottomSheetModalProvider>
      <Stack screenOptions={{ headerTintColor: 'black' }}>
        <Stack.Screen name="index" options={{ headerTitle: 'Account' }} />
      </Stack>
    </BottomSheetModalProvider>
  )
}

export default AccountLayout
