import React, { useEffect, useState } from 'react'
import { FiFilter } from "react-icons/fi"
import { BiSearch } from "react-icons/bi"
import ProductCard from './ProductCard'
import { productData } from './productData'

const Products = () => {
    const [initialProductData,setInitialProductData]=useState(productData);
    const [products,setProducts]=useState(productData);
    const [cost,setCost]=useState();
    const [productType,setProductType]=useState([]);

    function handleCostClick(selectedCost){
        setCost(selectedCost)
    }
    function handleproductType(product){
        if(productType.includes(product)){
            setProductType(productType.filter(eproduct=>eproduct!==product))
        }else{
            setProductType((prevData=>{
                return [...prevData,product]
            }))
        }
    }
    function handleFilter(){
        if(productType.length>0 || cost){
            let newProductData=initialProductData.filter(data=>{
                if(cost==="4000" && productType.length===0){
                    return data.price<cost
                }else if(cost==="7000" && productType.length===0){
                    return data.price<cost && data.price>4000
                }else if(cost==="7001" && productType.length===0){
                    return data.price>cost
                }
                if(productType.length>0 && !cost){
                    return productType.includes(data.category)
                }
                if(productType.length>0 && cost>=4000){
                    if(cost==="4000"){
                        return productType.includes(data.category) && data.price<cost
                    }else if(cost==="7000"){
                        return productType.includes(data.category) && data.price<cost && data.price>4000
                    }else if(cost==="7001"){
                        return productType.includes(data.category) && data.price>cost
                    }
                    return productType.includes(data.category)
                }
            })
            setProducts(newProductData)
        }else{
            setProducts(initialProductData)
        }
    }

    return (
        <>
            <div className="filter-section">
                <h2 className='storeSectionHeading'>FILTERS</h2>
                <FiFilter className='filterIcon' size={25} />
                <div className="cost">
                    <div>
                        <h2 className="storeSectionSubHeading">Cost</h2>
                        <section className="checkbox">
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" checked={cost === "4000"} value="4000" onClick={e=>handleCostClick("4000")} /> Rs. 1500-4000
                            </label>
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" checked={cost === "7000"} value="7000" onClick={e=>handleCostClick("7000")} /> Rs. 4001-7000
                            </label>
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox"  checked={cost === "7001"} value="7001" onClick={e=>handleCostClick("7001")} /> Rs. 7001+
                            </label>
                        </section>

                    </div>
                    <div>
                        <h2>Colour</h2>
                        <div className='colorBox colorBox1'></div>
                        <div className='colorBox colorBox2'></div>
                        <div className='colorBox colorBox3'></div>
                        <div className='colorBox colorBox4'></div>
                        <div className='colorBox colorBox5'></div>
                    </div>
                    <div>
                        <h2>Design templates</h2>
                        <section className="checkbox">
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" value="2" /> 2
                            </label>
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" value="3" /> 3
                            </label>
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" value="4" /> 3+
                            </label>
                        </section>
                    </div>
                    <div>
                        <h2>Type</h2>
                        <section className="checkbox">
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" value="loafers" onClick={e=>handleproductType("loafers")} /> Loafers
                            </label>
                            <label className='checkbox-title'>
                                <input className='check' type="checkbox" name="checkbox" value="sneakers" onClick={e=>handleproductType("sneakers")} /> Sneakers
                            </label>
                        </section>
                    </div>
                    <div className="applyBtn">
                        <button className="apply" onClick={handleFilter}>apply</button>
                    </div>
                </div>
            </div>
            <div className="product-section">
                <h2 className='storeSectionHeading'>SHOES</h2>
                <div className='cartSort'>
                    <BiSearch className='searchIcon' size={25} />
                    <button className='cartSortBtn'>sort by</button>
                </div>
                <div className="products">
                    {products.map(data => {
                        return (
                            <ProductCard data={data} key={data.id} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products