import React from 'react'
import styled from 'styled-components'
import { H3 } from '../components/styled/typography'
import { Container, Section } from './../components/styled/components';
import WishlistItem from './../components/wishlist/WishlistItem';
const WishlistItemsWrapper = styled.div`
    margin-top:15px;
    display: flex;
    flex-direction:column;
    gap:15px;
    @media(min-width:768px){
        margin-top: 20px;
    }
`

const Wishlist = () => {
  return (
    <Section>
        <Container>
            <H3 md bold>Wishlist</H3>
            <WishlistItemsWrapper >
                <WishlistItem />
                <WishlistItem />
            </WishlistItemsWrapper>
        </Container>
    </Section>
  )
}

export default Wishlist