import React from 'react'
import './Products.css'
import Product from './Product/Product'

const Products = (props)=>{
    return(
        <div className="ra-products">
            <h3>Recently added</h3>
            <Product 
            discount={props.products[0].Discount} 
            img={props.products[0].productImg}
            title={props.products[0].productName}
            price={props.products[0].realPrice}
            sellingPrice={props.products[0].currentPrice}
            />
            <Product 
            discount={props.products[1].Discount} 
            img={props.products[1].productImg}
            title={props.products[1].productName}
            price={props.products[1].realPrice}
            sellingPrice={props.products[1].currentPrice}
            />
            <Product 
            discount={props.products[2].Discount} 
            img={props.products[2].productImg}
            title={props.products[2].productName}
            price={props.products[2].realPrice}
            sellingPrice={props.products[2].currentPrice}
            />
            <Product 
            discount={props.products[3].Discount} 
            img={props.products[3].productImg}
            title={props.products[3].productName}
            price={props.products[3].realPrice}
            sellingPrice={props.products[3].currentPrice}
            />
        </div>
    )
}

export default Products