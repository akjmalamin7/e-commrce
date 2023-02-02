import React from 'react'
import { NavLink } from 'react-router-dom'
import { headerNav } from '../../assets/data/menu'
const Nav = () => {
    return (
        <ul className='menu'>

            {
                headerNav.map((item, index) => {
                    return (
                        <li className='menu_item' key={index}>
                            <NavLink className='menu_item_link' key={index} to={item.path}>{item.title}</NavLink>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Nav