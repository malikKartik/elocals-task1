import React from 'react';
import './Product.css'

const Product = (props)=>{
    return(
        <div className="product">
            
            <img src={props.img} alt={props.title} height='100px' width='76px' className="product-img"/>
            <div className="details">
                <p className="product-title">{props.title}</p>
                <p>
                    <span className="selling-price">&#8377;{props.sellingPrice}&nbsp;&nbsp;</span>
                    <span className="price"><strike>&#8377;{props.price}</strike>&nbsp;&nbsp;</span>
                    <span className="discount">{props.discount}</span>
                </p>
                <p className='ratings'><span style={{color:'gold',opacity:'1'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><br/>Delivery in 24hrs</p>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            
        </div>
    )
}

export default Product