import React from 'react'
import './skills.css'
import {SkillList} from "../../data/skill_list.js"
import { Separator  } from "../../common/separator/Separator.js";
export const Skills = () => {
    const data = SkillList;
    return (
        <> 
        <Separator/>
        <div className="heading">Skills</div>
        <div className='skills'>

           {data.map(
               (item) => {
                return(
                    <div className="skill" key = {item.name} >
                        <img src={item.logo} alt="" className="skill_logo"/>
                    <div className="skill_name">
                        {item.name}
                    </div>
                    </div>
                );
            }
           )}
          
        </div>
            </>
    )
}
