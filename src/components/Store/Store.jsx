import React from 'react'
import { RiShoppingBag3Line } from "react-icons/ri"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineDateRange } from "react-icons/md"
import "./Store.css"
import Products from './Products'
import { useSelector } from 'react-redux'
import Product from './Product'
import CartData from './CartData'

const Store = () => {
    const showProducts=useSelector(state=>state.product.productIsVisible);
    const selectedProductdata=useSelector(state=>state.product.selectedProductData);
    const cartData=useSelector(state=>state.cart.items);
    console.log(cartData)
  return (
    <div className='store'>
        <div className="sections">
            {!showProducts &&  <Products />}
            {showProducts && <Product data={selectedProductdata} />}
            <div className="cart-section">
                <h2 className='storeSectionHeading'>CART</h2>
                <RiShoppingBag3Line className='cartIcon' size={25} />
                <div className="cart">
                    {/* <p className='cartPara1'>What's stopping you, designer?</p> */}
                    {cartData.map(data=>{
                        return <CartData data={data} />
                    })}
                    
                </div>
                <div className="details">
                    <CiLocationOn className='detailsIcon1' size={25} />
                    <p className={`${cartData.length>0 && 'cartPara2'}`}>Home</p>
                    <MdOutlineDateRange className='detailsIcon2' size={25} />
                    <p className={`${cartData.length>0 && 'cartPara2'}`}>Select date</p>
                    <div className="cartBtn">
                        <button className={`${cartData.length>0 && 'cartButtonCart'} cartButton`}>order now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store