import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(()=> import("../pages/Home"))
const About = React.lazy(()=> import("../pages/AboutUs"))
const Header = React.lazy(()=> import("../components/header/Header"))
const Footer = React.lazy(()=> import("../components/footer/Footer"))
const PrivacyPolicy = React.lazy(()=> import("../pages/PrivacyPolicy"))
const TermsCondition = React.lazy(()=> import("../pages/TermsCondition"))
const Cart = React.lazy(()=> import("../pages/Cart"))
const Wishlist = React.lazy(()=> import("../pages/Wishlist"))
const ItemDetails = React.lazy(()=> import("../pages/ItemDetails"))
const Routing = () => {
    return (
        <>
            <Header />
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/item/:id' element={<ItemDetails />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/terms-condition' element={<TermsCondition />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    )
}

export default Routing