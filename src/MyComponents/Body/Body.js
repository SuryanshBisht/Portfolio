import React from 'react'
import { Hobbies } from "./hobbies/Hobbies.js";
import { Projects } from "./projects/Projects.js";
import { Skills } from "./skills/Skills.js";
import './Body.css'
export const Body = () => {
    return (
        <div className="body">
            <section id="Skills">
                <Skills/>
            </section>
            <section id="Projects">
                <Projects/>
            </section>
            <section id="Hobbies">
                <Hobbies/>
            </section>
        </div>
    )
}

