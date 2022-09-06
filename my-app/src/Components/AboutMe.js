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
                During the last year of working as a freelancer, I realized that I need stabilization on my professional path.</p>
                <a  target="blank" className="btn" href="https://drive.google.com/file/d/1NcrcO5DTHo8GC_40yum4ZsChvhrIqFER/view?usp=sharing" >
                    Download my CV</a>
            </div>
        </section>
    )
}

export default AboutMe;