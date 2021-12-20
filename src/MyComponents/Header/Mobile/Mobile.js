import React from 'react'
import './Mobile.css'
export const Mobile = ({isOpen, setIsopen}) => {
    return (
        <div className="mobile">
            <div className="close-icon" onClick= {()=> setIsopen(!isOpen)}>
            <i class="fi fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                <a href="#Hobbies">Hobbies</a>
                </div>
                <div className="mobile-option">
                <a href="#Skills">Skills</a>
                </div>
                <div className="mobile-option">
                <a href="#Contact">Contact</a>
                </div>
                <div className="mobile-option" id="resume">
                    <a href="#">Resume</a>
                </div>
            </div>
        </div>
    )
}
