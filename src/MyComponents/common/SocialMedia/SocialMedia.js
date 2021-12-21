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
            <a href={item.link} target = "_blank" key={item.platform}>
                <div className="social-icon-div">
                    <img src={item.icon} className="social-icon" alt="" />
                </div>
            </a>
        );
    }
    )
    }
    </div>
    )
}
