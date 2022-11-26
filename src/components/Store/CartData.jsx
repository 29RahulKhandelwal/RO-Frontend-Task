import React from 'react'
import ProductImage from './ProductImage'

const CartData = (props) => {
    return (
        <div className="cartData" key={props.data.id}>
            <ProductImage divClass="productImageDivCart" imgClass="productImageSmall" imgsrc={props.data.imageURL} removeproduct="remove" deleteId={props.data.id} />
            <div className="cartProductDetails">
                <h4 className='cartProductName'>{props.data.name}</h4>
                <p className='cartProductBy'>{props.data.desc}</p>
                <p className='cartProductPrice'>Rs. {props.data.price}/-</p>
            </div>
        </div>
    )
}

export default CartData