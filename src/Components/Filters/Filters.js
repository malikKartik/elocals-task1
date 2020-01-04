import React from 'react'
import './Filters.css'

const Filters = (props)=>{
    
    return(
        <div className="filters">
            <div className="filter-head">
                <span>Filter</span><span style={{cursor:'pointer'}}>Reset All</span>
            </div>
            <br/>
            <div id="all-filters">
                <table className="Filter offer-filter">
                    <tr>
                        <td>Show only offers</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                </table>
                
                <table className="Filter category-filter">
                    <tr>
                        <th align="left">Category</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Home Appliance</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Electronics</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Furniture</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Home Decor</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                </table>
                
                <table className="Filter brand-filter">
                    <tr>
                        <th align="left">Brand</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>One Plus</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Asus</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Vivo</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>oppo</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                    <tr>
                        <td>Real me</td>
                        <td align="right"><input type="checkbox"/><span class="checkmark"></span></td>
                    </tr>
                </table>
                
                <table className="Filter price-filter">
                    <tr>
                        <th align="left">Your budget</th>
                    </tr>
                    <tr>
                        <td>scale</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Filters