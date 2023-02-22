import React from 'react'
import User from './User'
import './header.css'
import logo from '../../assets/images/logo.svg'
import { AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  return (
    <div className='header_container'>
        <nav>
        <AiOutlineMenu className='line_icon'/>

            <img src={logo} alt="logo"/>

            <ul className='media_list'>
                <li>Collections
                <div className='hover_box'></div>

                </li>
                <li>Men
                <div className='hover_box'></div>

                </li>

                <li>Women
                <div className='hover_box'></div>

                </li>
                <li>About
                <div className='hover_box'></div>

                </li>
                <li>Contact
                <div className='hover_box'></div>

                </li>
            </ul>
        </nav>
        <User/>
    </div>
  )
}

export default Header