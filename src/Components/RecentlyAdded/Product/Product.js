import React from 'react'
import './Product.css'
import backArrow from './img/arrow_back.svg'
const Product = (props)=>{
    return(
        <div className="product">
            
            <img src={props.img} alt={props.title} height='100px' width='76px' className="product-img"/>
            <div className="details">
                <p className="product-title">{props.title}</p>
                <p>
                    <span className="selling-price">&#8377;{props.sellingPrice}&nbsp;&nbsp;</span>
                </p>
                <div className="add-to-cart-btn"><img src={backArrow} alt=""/></div>
            </div>
            
        </div>
    )
}

export default Product