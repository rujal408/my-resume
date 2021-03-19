import React from 'react'

function Skill({ title, progress }) {
    
    const [progressBar, setProgressBar] = React.useState(0)

    React.useEffect(() => {
        if (progress !== progressBar) {
            setTimeout(() => {
                setProgressBar(pr => pr + 1)
            }, 10)
        }

    }, [progressBar, progress])

    return (
        <div className="skills">
            <div>
                {title}
            </div>
            <div className="progress">
                <div className="progress-bar" style={{ width: `${progressBar}%` }}>
                    {progressBar}%
            </div>
            </div>
        </div>
    )
}

export default Skill
