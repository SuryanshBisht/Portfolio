import React from 'react'
import { Separator } from '../common/separator/Separator'
import { SocialMedia } from '../common/SocialMedia/SocialMedia'
import './Footer.css'
export const Footer = () => {
    return (
        <div id="Contact">
        <Separator/>
        <div className="footer" >
            <div className="contact" >
            <div className="desc" >
            <div className="name">
                Want to get in touch? <br/>
            </div>
            Contact me on any of the platform
            </div>
            <button className="contact-btn">
                Contact Me
            </button>
            <br/>
            Suryansh Singh Bisht &copy; 2021
            
            <SocialMedia/>
            </div>
            
        </div>

        </div>
        
    
    )
}

