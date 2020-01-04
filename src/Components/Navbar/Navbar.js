import React from 'react'
import './Navbar.css'
import userBanner from './img/rajdeep-telecom.png'
import callIcon from "./img/call.svg"
import storeIcon from "./img/storefront.svg"
const Navbar = (props)=>{

    return(
        <div className='navbar'>
            <div className='route'>
                <div className="path">
                    Home > Mobiles >
                </div>
                <div className="number">
                    <img src={callIcon} alt="" className='icon'/>99762368
                </div>
                <div className='location'>
                    <img src={storeIcon} alt="" className='icon'/>Sayyad Mohammad Khalilulla Bagdadi Chowk,
                </div>
            </div>
            <div className="main-nav">
                <div className="nav-left">
                    <h1 className="seller-name">Rajdeep Telecom</h1>
                </div>
                <div className="nav-right">
                    <img src={userBanner} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Navbar