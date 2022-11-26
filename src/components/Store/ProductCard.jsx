import React from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/productSlice';
import ProductRating from './ProductRating';

const ProductCard = (props) => {
    const dispatch=useDispatch();
    function handleProductClick(data){
        dispatch(productActions.toggle())
        dispatch(productActions.selectedProduct(data))
    }
    return (
        <div className="product" key={props.key} onClick={e=>handleProductClick(props.data)}>
            <div className="productImgDiv">
                <img src={props.data.imageURL} alt="product-img" className="productImg" />
            </div>
            <h2 className='productName'>{props.data.name}</h2>
            <p className='productPrice'>Rs. {props.data.price}/-</p>
            <ProductRating class="rating" />
        </div>
    )
}

export default ProductCard