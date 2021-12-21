import React from 'react'
import './hobbies.css'
import {HobbyList} from "../../data/hobby_list.js"
import { Separator  } from "../../common/separator/Separator.js";
export const Hobbies = () => {
    const data = HobbyList;
    return (
        <div>
        <Separator/>
        <div className="heading" id= 'Hobbies'>Hobbies</div>
        <div className='hobbies'>
           {data.map(
               (item) => {
                return(
                    <div className="hobby" key={item.name}>
                    <div className="hobby_image_container">
                    <img src={item.pic} alt="" className="hobby_image"/>
                    </div>
                    <div className="hobby_name">
                        {item.name}
                    </div>
                    </div>
                );
            }
           )}
          
        </div>
        </div>
    )
}
