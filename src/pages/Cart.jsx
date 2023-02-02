import React from 'react'
import styled from 'styled-components'
import CartItem from '../components/cart/CartItem'
import OrderSummery from '../components/cart/OrderSummery';
import { H3 } from '../components/styled/typography';
import { Container, Section } from './../components/styled/components';
const CartWrapper = styled.div`
    margin-top:15px;
    display:flex;
    gap:30px;
    flex-direction:column;
    align-items: center;
    @media(min-width:1024px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    & .items{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        & .item_inner{
            display: flex;
            gap:10px;
            align-items: center;
            & .thumb{
                width: 80px;
                height: 80px;
                & img{
                    width: 80px;
                    height: 80px;
                }
            }
            & .item_content{
                width:calc(100% - 80px);
                & .item_left_col{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    align-items: center;
                    gap:15px;
                    @media(min-width:768px){
                        grid-template-columns: repeat(4, 1fr);
                    }
                    & .remove_button{
                        display: grid;
                        justify-content:flex-end;
                        grid-column: 2/-1;
                        grid-row: 1;
                        @media(min-width:768px){
                            grid-column: 4/-1;
                        }
                    }
                    & .price_wrapper{
                        display: grid;
                        justify-content:flex-start;
                        grid-column: 1/2;
                        grid-row: 2;
                        @media(min-width:768px){
                            grid-column: 3/4;
                            grid-row: 1;
                            justify-content: center;
                        }
                    }
                    & .product_name{
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;  
                        overflow: hidden;
                        
                    }
                }
            }
        }
        @media(min-width:1024px){
            width: calc(100% - 420px);
        }
    }
    & .order_summery{
        max-width: 320px;
        width:100%;
        background:rgba(13,13,13,.02);
        padding:20px;
        & .summery_items{
            display: flex;
            flex-direction: column;
            margin:25px 0px;
            gap:15px;
            & .summery_item{
                display: flex;
                align-items:center;
                justify-content:space-between;
            }
        }
        @media(min-width:768px){
            max-width: 420px;
            padding: 30px;
        }
    }
`
const Cart = () => {
    return (
        <Section>
            <Container>
                <H3 md bold>Cart</H3>
                <CartWrapper>
                    <div className='items'>
                        <CartItem />
                    </div>
                    <div className='order_summery'>
                        <OrderSummery />
                    </div>
                </CartWrapper>
            </Container>
        </Section>
    )
}

export default Cart