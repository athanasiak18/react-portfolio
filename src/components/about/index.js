import React from 'react'
import profileImage from "../../assets/profile/profile.jpg";
function About() {

    return (
        <section className="my-5" >
            <h1 id="about">About Me</h1>
            <div className="flex-row">
                <img src={profileImage} className="my-2" style={{ width: "25%" }} alt="cover"  />
                <div className="my-2">
                    <p>
                        Aspiring Fullstack Developer with a background in Account Managment. I have spent most of my career
                        helping customers find value out of SaaS solutions. While I have enjoyed learning about what my customer's
                        needs are, I would love to gain the technical skills I need to start building solutions. I en

                    </p>
                </div>
            </div>
        </section>
    )
}

export default About