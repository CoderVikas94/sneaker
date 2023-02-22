import React from 'react'
import avatar from '../../assets/images/image-avatar.png'
import './header.css'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { Popover } from 'antd';
import Cart from './Cart'
import {Badge } from 'antd';
import { useSelector } from 'react-redux'


const User = () => {

  const cartValue = useSelector((state:any)=>state?.product?.value)

  return (
         
    <div className='user_box'>
        <Popover placement="bottom"  content={<Cart/>} trigger="click">
        <Badge count={cartValue}>
          <HiOutlineShoppingCart className="cart_icon"/>
        </Badge>

    </Popover>
        <img className="avatar" src={avatar} alt="avatar" />
    </div>
  

  )
}

export default User