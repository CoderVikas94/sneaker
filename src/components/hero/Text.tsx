import {useState} from 'react'
import './hero.css'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import {setCart} from '../../Store/productSlice'



const Text = () => {
  const [count, setcount] = useState(0)
  const cartValue = useSelector((state:any)=>state?.product?.value)
const Dispatch = useDispatch();

const handleMinus = ()=> {
  if(count >0) {
  let newcount = count - 1
  setcount(newcount)
}
}
const handlePlus = ()=> {
  let newcount = count + 1
  setcount(newcount)

}


const handleCart = ()=> {
  Dispatch(setCart(count))
  setcount(0)
}

  return (
    <div className='text_box'>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition <br/>Sneakers
     </h1>
     <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer</p>
     <div className='price_box'><h2>$125.00</h2><h3>50%</h3></div>
     <del>$250.00</del>
     <div className='btn_box'>
     <span><button className='sub_btn' onClick={handleMinus} >-</button><input disabled value={count}/><button className='add_btn' onClick={handlePlus} >+</button></span>
     <button onClick={handleCart}><HiOutlineShoppingCart style={{fontSize:"18px"}}/>Add to cart</button></div>
    </div>
  )
}

export default Text