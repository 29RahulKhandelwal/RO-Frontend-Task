import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice';

const ProductImage = (props) => {
    const dispatch=useDispatch();
    function handleRemoveCart(){
        dispatch(cartActions.removeItemToCart(props.deleteId))
    }
    return (
        <div className={props.divClass}>
            <img className={props.imgClass} src={props.imgsrc} alt="productimage" />
            {props.removeproduct && <AiOutlineCloseCircle size={20} className='removeProductCart' onClick={handleRemoveCart} />}
        </div>
    )
}

export default ProductImage