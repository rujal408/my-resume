import React from 'react'

const details = [
    {
        id: 1,
        company: "Datalytics Pvt Ltd",
        location: "Kathmandu, Nepal",
        position: "Technical Supervisor",
        date: "March 2018 - January 2020",
        responsibilities: [
            { id: 1, description: "Reviewing and Qualifying Engineering Project" },
            { id: 2, description: "Identifying the issues in academic and workbased project" },
            { id: 3, description: "Correcting incoming issues" }
        ]
    },
    {
        id:2,
        company:"Arati Tech Pvt. Ltd",
        location:"Kathmandu, Nepal",
        position:"Internship in React JS",
        date:"July 2020 - January 2021",
        responsibilities:[
            {id:1, description:"Developed user interface using React and Redux"},
            {id:2 , description:"Used React router to turn web application into SPA"}
        ]
    }
]

function Projects() {
    return (
        <div className="projects">
            <div>
                <h1>Works</h1>
            </div>
            <div className="line"></div>

        </div>
    )
}

export default Projects
