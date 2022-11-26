import React from 'react'
import { MdArrowBackIos } from "react-icons/md"
import "./Store.css"
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/productSlice'
import ProductImage from './ProductImage'
import ProductRating from './ProductRating'
import ProductDesign from './ProductDesign'
import { cartActions } from '../../store/cartSlice'
import RateProduct from './RateProduct'

const Product = (props) => {
    const dispatch=useDispatch();
    function handleProductBackClick(){
        dispatch(productActions.toggle())
    }
    function handleAddToCart(data){
        dispatch(cartActions.addItemToCart(data))
    }
    return (
        <div className="singleproduct">
            <div className='productBackBtn' onClick={handleProductBackClick}>
                <MdArrowBackIos className='productBackIcon' size={25} />
                <h2 className='productHeading'>your design space</h2>
            </div>
            <div className="productInfos">
                <ProductImage divClass="productImageDiv" imgClass="productImage" imgsrc={props.data.imageURL} />
                <div className="productSmallImg">
                    <ProductImage divClass="productImageDivSmall" imgClass="productImageSmall" imgsrc={props.data.imageURL} />
                    <ProductImage divClass="productImageDivSmall" imgClass="productImageSmall" imgsrc={props.data.imageURL} />
                    <ProductImage divClass="productImageDivSmall" imgClass="productImageSmall" imgsrc={props.data.imageURL} />
                </div>
                <div className="productInfo">
                    <h2 className='productTitle'>{props.data.name}</h2>
                    <p className='productFontBig'>{props.data.desc}</p>
                    <ProductRating class="productRating" />
                    <p className='productFontSmall'>{props.data.reviews}</p>
                    <p className='productFontBigSecond'>Rs. {props.data.price}/-</p>
                    <p className='productFontSmall'>Get an exlusive 20% off shopping with HDDFC bank</p>
                    <div className="productDesign">
                        <ProductDesign title="Front" designTitleClass="designTitleClass1" />
                        <ProductDesign title="Middle" designTitleClass="designTitleClass2" />
                        <ProductDesign title="Back" designTitleClass="designTitleClass3" />
                        <ProductDesign title="Sole" designTitleClass="designTitleClass4" />
                        <div className="productSize">
                            <h3 className="productSizeTitle">Size</h3>
                            <div className="productDesignBox">7</div>
                            <div className="productDesignBox">8</div>
                            <div className="productDesignBox">9</div>
                            <div className="productDesignBox">10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <h3 className='productRate'>Rate product</h3>
                {/* <ProductRating class="rateProduct" /> */}
                <RateProduct />
                <div className="productBtn">
                    <button className='productShare'>share design</button>
                    <button className='productToCart' onClick={e=>handleAddToCart(props.data)}>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product