import React from 'react'
function Aboutme() {
    return (
        <div className="about-me">
            <div>
                <h1>About Me</h1>
            </div>
            <div className="about-info">
                27 years &nbsp;&nbsp;/&nbsp;&nbsp; Freelance
            </div>
            <div className="about-description">
                An Engineer with positive, determined and flexible characters having Bachelors Degree in Electronics
                and Communication seeking for an opportunity to grow in a motivating and relevant platform with a sound
                vision.
            </div>
            <div className="about-line"></div>
            <div className="about-services">
                <div className="service-header">
                    <h2>My Services</h2>
                </div>
                <div className="service-info">
                    <div className="web-site">
                        <i className="fas fa-globe"></i>
                        <h4>Web Sites</h4>
                    </div>
                    <div className="web-app">
                        <i className="fas fa-cubes"></i>
                        <h4>Web Applications</h4>
                    </div>
                    <div className="pwa">
                        <i className="fas fa-laptop-code"></i>
                        <h4>Progressive Web Apps</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutme
