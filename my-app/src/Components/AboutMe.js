import React from "react";

const AboutMe = () => {

    return (
        <section name="aboutme" className="aboutme">
            <div className="aboutme__image"></div>
            <div className="aboutme__description">
                <h1>About me</h1>
                <div className="separator"></div>
                <p className="aboutme__text">I'm a creative person who likes to take part in teamwork 
                to build new websites. Currently, I'm working as a freelancer on several projects, from minor 
                one-page sites to some larger modules from more extensive projects. 
                Last time I started considering changing from freelancing to a stable and long-term project.</p>
                <a  target="blank" className="btn" href="">
                    Download my CV</a>
            </div>
        </section>
    )
}

export default AboutMe;
