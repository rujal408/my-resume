import React from 'react'
import Skill from './Skill'

const skills = [
    { id: 1, title: "JAVASCRIPT/REACT", progress: 80 },
    { id: 2, title: "HTML", progress: 80 },
    { id: 3, title: "CSS", progress: 50 },
    { id: 4, title: "PHP/LARAVEL", progress: 45 },
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
                skills.map(x => (
                    <Skill key={x.id} {...x} />
                ))
            }

        </div>
    )
}

export default MySkills
