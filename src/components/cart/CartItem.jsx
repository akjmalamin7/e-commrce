import React from 'react'
import styled from 'styled-components'
import { TextButton } from '../styled/button'
import { P, Text } from '../styled/typography'

const CounterButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:1px;
    width:94px;
    justify-content: flex-end;
    margin-left: auto;
    @media(min-width:768px){
         margin: 0 auto;
         justify-content: center;
    }
    & .count_btn{
        background-color: rgba(13,13,13,.03);
        height:27px;
        width: 31px;
        display: flex;
        align-items:center;
        justify-content:center;
        :not(:last-child){
            border-right:1px solid rgba(13,13,13,.05);
        }
       
        @media(min-width:768px){
            height:31px;
        }
    }
    & .number{
        border: none;
        outline:none;
        text-align: center;
    }
    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
   & input[type=number] {
        -moz-appearance: textfield;
    }
    & .plus:active, & .minus:active{
        box-shadow: inset 1px 1px 1px rgba(13,13,13,.5);
        transition: all .3s;
    }
    & .plus, & .minus{
        @media(min-width:768px){
          cursor:pointer;
        }
    }
`
const CartItem = () => {
  return (
    <div className='item_inner'>
            <div className='thumb'>
                <img src="https://soppiya.com/media/images/62370cf11dbdd69de562a184/combo/63141181938c664d89c319a0/0.webp" alt="product" />
            </div>
            <div className='item_content'>
                <div className="item_left_col">
                    <div className='name_wrapper'>
                        <P sm textTertiary regular className='product_name'>Sweet Pumpkin</P>
                    </div>
                    <CounterButtonWrapper>
                        <Text className='count_btn plus'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 9 16">
                                <text id="_" data-name="+" transform="translate(0 13)" fill="#0d0d0d" fontSize="12" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">+</tspan></text>
                            </svg>

                        </Text>
                        <input type="number" value="1" className='count_btn number' />
                        <Text className='count_btn minus'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="25" viewBox="0 0 5 16">
                                <text id="_-" data-name="-" transform="translate(0 13)" fill="#0d0d0d" fontSize="12" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">-</tspan></text>
                            </svg>

                        </Text>
                    </CounterButtonWrapper>
                    <div className='price_wrapper'>
                        <P sm textTertiary regular>BDT 500</P>
                    </div>
                    <div className='remove_button'>
                        <TextButton sm regular>Remove</TextButton>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartItem