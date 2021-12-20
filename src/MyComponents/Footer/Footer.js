import React from 'react'
import { Separator } from '../common/separator/Separator'
import { SocialMedia } from '../common/SocialMedia/SocialMedia'
import './Footer.css'
export const Footer = () => {
    return (
        <>
        <Separator/>
        <div className="footer" id='#Contact'>
            <div className="contact" >
            <div className="desc" >
            Want to get in touch? 
            Contact me on any of the platform
            </div>
            <button className="contact-btn">
                Contact Me
            </button>
            Suryansh Singh Bisht &copy; 2021
            
            <SocialMedia/>
            </div>
            
        </div>

        </>
    )
}

