import React from 'react'
import { PBTN } from '../styled/button'
import { H3, P, Text } from '../styled/typography'

const OrderSummery = () => {
  return (
    <>
        <H3 md bold textTertiary>Order Summery</H3>
        <div className='summery_items'>
            <P sm regular textTertiary className='summery_item'>
                <Text>Total Items</Text>
                <Text>8</Text>
            </P>
            <P sm regular textTertiary className='summery_item'>
                <Text>Total Amount</Text>
                <Text>BDT 4000</Text>
            </P>
        </div>
        <div>
            <PBTN primary textSecondary medium block width="100%">Proceed to Checkout</PBTN>
        </div>
    </>
  )
}

export default OrderSummery