import React from 'react'
import "./socialmedia.css"
import { SocialData } from "../../data/social.js";
export const SocialMedia = () => {
    const data=SocialData;
    return ( 
    <div className='socialmedia'>
    {
    data.map(
    (item)=>{
            return(
            <a href={item.link}>
                <div className="social-icon-div">
                    <img src={item.icon} key={item.sno}className="social-icon" alt="" />
                </div>
            </a>
        );
    }
    )
    }
    </div>
    )
}
