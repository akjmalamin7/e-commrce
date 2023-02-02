import React from 'react'
import { productItem } from '../../../assets/data/product'
import { H4, P } from '../../styled/typography'
import { Item } from "../../styled/components"
import { PBTN } from '../../styled/button'
import { useNavigate } from 'react-router-dom'
import { ViewIcon } from '../../../assets/icons/icon'
const Items = ({ item }) => {
    const navigate = useNavigate();
    return (
        <>
            <Item>
                <div className='top_col' onClick={() => { navigate(`/item/${item.id}`) }}>
                    <div className='product_img_wrapper'>
                        <img src={item.img} alt="product image" />
                    </div>
                    <div className='view_details'>
                        <PBTN className='view_btn'><ViewIcon /></PBTN>
                    </div>
                </div>
                <div className='bottom_col'>
                    <H4 md medium>{item.name}</H4>
                    <P sm regular textTertiary smL className='description'>BDT {item.price}</P>
                    <div className='add_to_cart_btn_wrapper'>
                        <PBTN radius="0px" className='add_to_cart_btn' primary textSecondary padding="0px 25px" height="32px" width='100%'>Add to cart</PBTN>
                    </div>
                </div>
            </Item>
        </>
    )
}

export default Items