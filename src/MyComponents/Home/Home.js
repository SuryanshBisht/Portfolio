import React from 'react'
import './Home.css'
import { SocialMedia } from '../common/SocialMedia/SocialMedia';
export const Home = () => {
    return (
        <>
        <div className='home'>
            <div className="info">
                Hi There, I'm <br/>
                <span className="name">Suryansh Singh Bisht</span><br/>
                and I love experimenting with the web<br/><br/>
                Second year at IIT Roorkee
            </div>
            
            <div >
                <img src={require("../../assets/Passport_size_photo.png")} className='photo' alt=""/>
            </div>
            
        </div>
        <div className="socialmedia">
            <SocialMedia/>
            </div>
        </>
    )
}

