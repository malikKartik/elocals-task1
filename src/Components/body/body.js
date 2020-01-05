import React from 'react'
import './body.css'
import Filters from '../Filters/Filters'
import Products from '../Products/Products'
import RecentlyAdded from '../RecentlyAdded/Products'
import RequestAndContact from '../RequestAndContact/RequestAndContact'
const Body = (props)=>{
    return(
        <div className="body">
            <Filters/>
            <Products products={props.products}/><br/><br/>
            <RecentlyAdded products={props.products}/>
            <RequestAndContact/>
        </div>
    )
}

export default Body