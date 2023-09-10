import { LoginScreen } from '@/modules/account/login-screen'
import { Stack } from 'expo-router'

export default function LoginPage() {
  return (
    <>
      <Stack.Screen options={{ headerBackVisible: false }} />
      <LoginScreen />
    </>
  )
}
