import { Cart } from '@medusajs/medusa'
import Button from 'modules/common/components/button'
import CartTotals from 'modules/common/components/cart-totals'
import { Link, Stack } from 'design'
import { useRouter } from 'expo-router'

type SummaryProps = {
  cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>
}

const Summary = ({ cart }: SummaryProps) => {
  const { push } = useRouter()
  return (
    <Stack space={6}>
      <CartTotals cart={cart} />
      <Button onPress={() => push(`/checkout`)}>Go to checkout</Button>
    </Stack>
  )
}

export default Summary
