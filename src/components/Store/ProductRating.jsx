import React from 'react'

const ProductRating = (props) => {
    return (
        <div className={props.class}>
            <label className="starCheck rated">
                <input type="checkbox" className='starCheckBox' />
            </label>
            <label className="starCheck rated">
                <input type="checkbox" className='starCheckBox' />
            </label>
            <label className="starCheck rated">
                <input type="checkbox" className='starCheckBox' />
            </label>
            <label className="starCheck rated">
                <input type="checkbox" className='starCheckBox' />
            </label>
            <label className="starCheck">
                <input type="checkbox" className='starCheckBox' />
            </label>
        </div>
    )
}

export default ProductRating