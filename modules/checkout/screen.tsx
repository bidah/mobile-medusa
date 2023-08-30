import CartTemplate from 'modules/cart/templates'
import { ScrollView, View, Text } from 'design'
import CheckoutTemplate from './templates'

export const CheckoutScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <CheckoutTemplate />
    </ScrollView>
  )
}
