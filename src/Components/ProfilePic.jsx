import React, { Component } from 'react'
import '../Styles/ProfilePic.css'

export default class ProfilePic extends Component {
    render() {

        return (
            <div className="profile-pic">
                <div
                    style={{
                        background: `url('${process.env.PUBLIC_URL}/images/banner.jpg')`,
                    }}
                    className="cover-pic"
                    >
                        {/* <img src={`${process.env.PUBLIC_URL}/images/banner.jpg`} alt=""/> */}
                    </div>

                <div className="picture-container">
                <div className="picture"
                    style={{
                        background: `url('${process.env.PUBLIC_URL}/images/profile-pic.jpg')`,
                        backgroundSize: 'cover'
                    }}
                ></div>
                </div>

                <div className="my-info">
                    <h2 style={{ fontSize: "2.5rem" }}>Rujal Sapkota</h2>
                    <h4>React Developer</h4>
                    <p>
                        <i className="fab fa-facebook"></i> &nbsp;
                        <i className="fab fa-linkedin"></i> &nbsp;
                        <i className="fab fa-instagram-square"></i>
                    </p>
                </div>

            </div>
        )
    }
}
