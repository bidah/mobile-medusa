import { OrderConfirmedScreen } from 'modules/order/order-confirmed-screen'
import { Stack } from 'expo-router'

export default function ConfirmedPage() {
    return <>
        <Stack.Screen
            options={{
                title: `Order Confirmed`,
                presentation: 'modal',
            }}
        />
     <OrderConfirmedScreen />
    </>
}
