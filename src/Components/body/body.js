import React from 'react'
import './body.css'
import Filters from '../Filters/Filters'
import Products from '../Products/Products'

const Body = (props)=>{
    return(
        <div className="body">
            <Filters/>
            <Products/>
        </div>
    )
}

export default Body