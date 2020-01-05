import React from 'react'
import './RequestAndContact.css'
import icon from './img/icon.svg'
import armchair from './img/armchair.svg'
import laptop from './img/laptop.svg'
import monitor from './img/monitor.svg'
import microwave from './img/microwave.svg'
const RequestAndContact = (props)=>{
    return (
        <div className="request-and-contact">
            <div className="request">
                <div className="req-content">
                    <h2>Couldn't found what are you looking for?</h2>
                    <center><span>
                        <img src={icon} alt="" height='20px' width='20px'/>
                        <img src={armchair} alt="" height='20px' width='20px'/>
                        <img src={laptop} alt="" height='20px' width='20px'/>
                        <img src={monitor} alt="" height='20px' width='20px'/>
                        <img src={microwave} alt="" height='20px' width='20px'/>
                    </span></center><br/>
                    <center><button>Request Product</button></center>
                </div>
            </div>
            
        </div>
    )
}

export default RequestAndContact