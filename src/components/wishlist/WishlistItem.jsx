import React from 'react'
import styled from 'styled-components'
import { PBTN, TextButton } from '../styled/button'
import { P } from '../styled/typography'

const ItemWrapper = styled.div`
    display: flex;
    gap:10px;
    align-items:center;
        & .item_thumb{
            & img{
                width:70px;
                height:70px;
                @media(min-width:768px){
                    width:80px;
                    height: 80px;
                }
            }
        }
        & .item_content{
            width: calc(100% - 70px);
            display: flex;
            align-items:center;
            justify-content: space-between;
            @media(min-width:768px){
                    gap:20px;
                    width: calc(100% - 80px);
                }
            & .item_left_col{
                display: flex;
                flex-direction:column;
                width:50%;
                gap:5px;

                @media(min-width:768px){
                    flex-direction:row;
                    justify-content: space-between;
                }
                @media(min-width:1024px){
                 max-width: 340px;
                }
                & p{
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;  
                    overflow: hidden;
                }
            }
            & .item_right_col{
                display: flex;
                flex-direction:column;
                gap:10px;
                align-items: flex-end;
                width:50%;
                @media(min-width:768px){
                    flex-direction:row-reverse;
                    justify-content: space-between;
                    align-items: center;
                }
                @media(min-width:1024px){
                 max-width: 340px;
                }

            }
        }
`
const WishlistItem = () => {
    return (

        <ItemWrapper className='product_item'>
            <div className='item_thumb'>
                <img src="https://soppiya.com/media/images/62370cf11dbdd69de562a184/combo/63141181938c664d89c319a0/0.webp" alt="product-image" />
            </div>
            <div className='item_content'>
                <div className="item_left_col">
                    <P sm textTertiary regular>Sweet Pumpkin</P>
                    <P sm textPrimary regular>BDT 400</P>
                </div>
                <div className="item_right_col">
                    <TextButton sm regular>Remove</TextButton>
                    <PBTN primary textSecondary padding="0px 25px" height="32px" radius="2px" sm regular>Add to Cart</PBTN>
                </div>
            </div>
        </ItemWrapper>
    )
}

export default WishlistItem