import { ScrollView, Text } from 'design'
import AddressesTemplate from './templates/addresses-template'

export const AddressesScreen = () => {
  return (
    <ScrollView
      className={'ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <AddressesTemplate />
    </ScrollView>
  )
}
