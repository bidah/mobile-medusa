import { useAccount } from '@/lib/context/account-context'
import Register from '@/modules/account/components/register'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'design'
import Login from '../components/login'

const LoginTemplate = () => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push('/account')
    }
  }, [customer, retrievingCustomer, router])

  return (
    <View className="flex w-full justify-center py-24">
      {currentView === 'sign-in' ? <Login /> : <Register />}
    </View>
  )
}

export default LoginTemplate
