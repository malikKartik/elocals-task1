import React from 'react'
import './Header.css'
import logo from './img/logo.png'
const Header = (props)=>{

    return(
        <div className='header'>
            <div className="content">
                <span id='logo'><img src={logo} alt="logo" width='60%' height='60%'/></span>
            </div>
        </div>
        
    )
}

export default Header