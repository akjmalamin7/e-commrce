import React from 'react'
import { HeaderSection, Container } from '../styled/components'
import Nav from './Nav'
import Img from '../../assets/img/logo.svg'
import { CartIcon, SearchIcon, WishlistIcon } from './../../assets/icons/icon';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <HeaderSection>
            <div className='header_top'>
                <Container>
                    <div className='header_top_content'>
                        <div className='logo_wrapper'>
                            <NavLink to="/"><img className='logo' src={Img} alt="header logo" /></NavLink>
                        </div>
                        <div className='header_top_icon_wrapper'>
                            <div className='icon_wrapper'>
                                <SearchIcon/>
                            </div>
                            <div className='icon_wrapper'>
                               <NavLink to="/wishlist"> <WishlistIcon /></NavLink>
                            </div>
                            <div className='icon_wrapper'>
                               <NavLink to='/cart'> <CartIcon /></NavLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='header_bottom'>
                <Container>
                    <Nav />
                </Container>
            </div>

        </HeaderSection>
    )
}

export default Header