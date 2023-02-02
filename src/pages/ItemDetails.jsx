import React from 'react'
import { useLocation } from 'react-router-dom';
import { H3, P } from '../components/styled/typography';
import { Container, Section } from './../components/styled/components';
import styled from 'styled-components';
import { PBTN } from '../components/styled/button';

const DetailsWrapper = styled.div`
    display:flex;
    gap:30px;
    flex-direction:column;
    & .left_col{
        max-width:400px;
        width:100%;
        margin:0 auto;
        border:1px solid rgba(13,13,13,.1);
        background: rgba(13,13,13,.07);

        & img{
            width:100%;
            display:block;
        }

        @media(min-width:1024px){
            margin:unset;
        }
    }
    & .right_col{
        display:flex;
        flex-direction:column;
        gap:15px;
        @media(min-width:1024px){
            width:calc(100% - 400px);
        }
        & .description{
            margin-top:20px;
        }
    }

    @media(min-width:1024px){
        gap:30px;
        flex-direction:row;
    
    }
`
const ItemDetails = () => {
    let location = useLocation();
    let navText = location.pathname.split('/')
    return (
        <Section>
            <Container>
                <DetailsWrapper>
                    <div className='left_col'>
                        <img src="https://www.soppiya.com/media/images/6304a9b78da5dfa6ec049a54/item/6305bfb16aa739c3c1800a75/image1.webp" alt="" />
                    </div>
                    <div className='right_col'>
                        <H3 md bold textTertiary>Women-GG0832s-001 {navText[navText.length - 1]}</H3>
                        <P sm regular textTertiary>BDT 30403</P>
                        <div>
                            <PBTN primary padding="0px 50px" height="32px" textSecondary radius="1px" sm regular>Add to cart</PBTN>
                        </div>
                        <div className='description'>
                            <P sm regular textTertiary sml>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae eos numquam maiores saepe placeat a officia deleniti illo! Asperiores nam itaque deserunt perferendis veniam voluptate quaerat quas dicta odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae eos numquam maiores saepe placeat a officia deleniti illo! Asperiores nam itaque deserunt perferendis veniam voluptate quaerat quas dicta odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae eos numquam maiores saepe placeat a officia deleniti illo! Asperiores nam itaque deserunt perferendis veniam voluptate quaerat quas dicta odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae eos numquam maiores saepe placeat a officia deleniti illo! Asperiores nam itaque deserunt perferendis veniam voluptate quaerat quas dicta odit.
                            </P>
                        </div>
                    </div>
                </DetailsWrapper>
            </Container>
        </Section>
    )
}

export default ItemDetails