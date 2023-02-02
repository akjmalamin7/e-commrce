import React from 'react'
import Items from './product/Items'
import { Container } from '../styled/components'
import styled from 'styled-components';
import { Section } from './../styled/components';
import { productItem } from '../../assets/data/product'
const ItemsWrapper = styled.div`
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:15px;
        @media(min-width:768px){
            grid-template-columns:repeat(4,1fr);
            gap:20px;
        }
        @media(min-width:1024px){
            grid-template-columns:repeat(5,1fr);
            gap:30px;
        }
`
const HomeProduct = () => {
    return (
        <Section>
            <Container>
                <ItemsWrapper>
                    {
                        productItem && productItem.map((item, index)=>{
                            return(
                                <Items key={index} item={item} />
                            )
                        })
                    }
                </ItemsWrapper>
            </Container>
        </Section>
    )
}

export default HomeProduct