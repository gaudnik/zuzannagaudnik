import React from "react";

const AboutMe = () => {
    return (
        <section name="aboutme" className="aboutme">
            <div className="aboutme__image"></div>

            <div className="aboutme__description">
                <h1>About me</h1>
                <div className="separator"></div>
                <p className="aboutme__text">I am a front-end developer who is looking 
                for new challenges and opportunities to develop programming skills. 
                During the last year of working as a freelancer, I realized that I need stabilization on my professional path.
                I enjoy learning new things, especially when it comes to things related to the Internet and computers.</p>
                <a  target="blank" className="btn" href="https://app.enhancv.com/share/b7193166/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" >
                    Download my CV</a>
            </div>
        </section>
    )
}

export default AboutMe;