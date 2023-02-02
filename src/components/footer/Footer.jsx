import React from 'react'
import { Container, FooterSection } from '../styled/components'
import Logo from '../../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <div className="footer_content">
                    <div className="footer_logo_wrapper">
                        <NavLink to="/" className="footer_logo">
                            <img src={Logo} alt="footer logo"/>
                        </NavLink>
                    </div>
                    <div className="footer_description">
                        <p className="footer_description_txt">
                            Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo
                            in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor
                            mollis augue, ut tincidunt ex interdum eu.
                        </p>
                    </div>


                    <nav className="footer_navbar">
                        <ul className="footer_navbar_list">
                            <li className="footer_navbar_item">
                                <NavLink to="/about-us" className="footer_navbar_link">About Us</NavLink>
                            </li>
                            <li className="footer_navbar_item">
                                <NavLink to="/privacy-policy" className="footer_navbar_link">Privacy Policy</NavLink>
                            </li>
                            <li className="footer_navbar_item">
                                <NavLink to="/terms-condition" className="footer_navbar_link">Terms & Conditions</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer_socket">
                        <p className="footer_socket_txt">© 2021 britkey. All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </FooterSection>
    )
}

export default Footer