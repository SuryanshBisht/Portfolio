import React,{ useState } from 'react'
import './Header.css'
import { Web } from "./Web/Web.js";
import { Mobile } from "./Mobile/Mobile.js";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="buffer">

        <div className="header">
            <div className="logo">SSB</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick = {()=> setIsOpen(!isOpen)}>
                    <i className="fi fi-rr-list menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsopen={setIsOpen}/>}
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

