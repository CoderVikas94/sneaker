import React from 'react'
import './header.css'
import hero1 from '../../assets/images/image-product-1.jpg'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import {deleteCart} from '../../Store/productSlice'




const Cart = () => {
    const cartValue = useSelector((state:any)=>state?.product?.value)
    const Dispatch = useDispatch();

    return (
    <div className='cart_box'>
        <span>Cart</span>
        <hr/>
        <div className='cart_item'>
            {cartValue===0 &&<p>Your cart is Empty</p>}
        
           {cartValue !==0 &&
            <>
            <div className='cart_item_img'>
            <img src={hero1} alt='thumbnail-image'/>
            <span><p>Fall Limited Editions Sneakers</p>
            <p>$125.00 * {cartValue}    <b style={{color:'black'}}>  ${`${cartValue*125}.00`}</b></p>
            </span>
            <RiDeleteBin6Line onClick={()=>Dispatch(deleteCart())} className="del_icon"/>
             </div>
            <button className='checkout_btn'>Checkout</button>
            </>}
        </div>
        </div>
  )
}

export default Cart