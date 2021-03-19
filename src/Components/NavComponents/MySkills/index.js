import React from 'react'
import Skill from './Skill'

const skills = [
    { id: 1, title: "HTML", progress: 75 },
    { id: 2, title: "CSS", progress: 40 },
    { id: 3, title: "JAVASCRIPT/REACT", progress: 80 },
    { id: 4, title: "PHP/LARAVEL", progress: 40 },
    { id: 5, title: "PYTHON/DJANGO", progress: 30 }
]


function MySkills() {
    return (
        <div className="my-skills">
            <div>
                <h1>My Skills</h1>
            </div>
            <div className="line"></div>
            {
                skills.sort((a,b)=>b.progress - a.progress).map(x => (
                    <Skill key={x.id} {...x} />
                ))
            }

        </div>
    )
}

export default MySkills
