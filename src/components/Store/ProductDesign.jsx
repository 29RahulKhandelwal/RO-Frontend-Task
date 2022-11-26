import React from 'react'

const ProductDesign = (props) => {
    return (
        <div className='design'>
            <h3 className={props.designTitleClass}>{props.title}</h3>
            <div className='designBox first'></div>
            <div className='designBox second'></div>
            <div className='designBox third'></div>
        </div>
    )
}

export default ProductDesign