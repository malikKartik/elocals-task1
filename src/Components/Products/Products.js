import React from 'react'
import Product from './Product/Product'
import './Products.css'

const Products = (props)=>{
    const products = props.products.map(product=>{
        return(
            <Product 
            discount={props.products[0].Discount} 
            img={props.products[0].productImg}
            title={props.products[0].productName}
            price={props.products[0].realPrice}
            sellingPrice={props.products[0].currentPrice}
            />
        )
    })
    return(
        <div className="products">
            {products}
        </div>
    )
}

export default Products