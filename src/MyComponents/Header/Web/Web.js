import React from 'react'
import './Web.css'

export const Web = () => {
    return (
       <div className="web">
           <div className="web-option">
               <a href="#Hobbies">Hobbies</a>
            </div>
            <div className="web-option">
               <a href="#Skills">Skills</a>
            </div>
            <div className="web-option">
               <a href="#Contact">Contact</a>
            </div>
            <div className="web-option" id="resume">
                <a href="#">Resume</a>
            </div>
       </div>
    )
}
