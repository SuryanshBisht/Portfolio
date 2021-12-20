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
                    <div className="hobby">
                        <img src={item.logo} key={item.sno}alt="" className="hobby_image"/>
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
