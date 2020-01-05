import React from 'react'
import './Footer.css'
import w from './img/whatsapp.svg'

const Footer = (props)=>{
    return(
        <div className="footer">
            <div className="contact">
                <h2>Any questions in mind ?</h2>
                <h3>Click here for quick support</h3>
                <br/>
                <center>
                    <span>
                        <img src={w} alt="" height='50px' width='50px'/>
                    </span>
                </center><br/>
            </div>
            <div className="info-footer">
                <div className="cities-we-are-in">

                </div>
                <div className="foot-nav">
                    
                </div>
            </div>
        </div>
    )
}

export default Footer