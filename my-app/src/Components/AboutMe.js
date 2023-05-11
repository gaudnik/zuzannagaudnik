import React from "react";

const AboutMe = () => {
    return (
        <section className="aboutme" id="aboutme">
            <div className="aboutme__image"></div>
            <div className="aboutme__description">
                <h2>About Me</h2>
                <div className="separator"></div>
                <p className="aboutme__text">
                    I am a creative person who likes to participate in teamwork and likes 
                    to learn new things. I am currently working as a freelancer on several 
                    projects but I am considering a change from freelancing to a long-term project, 
                    and preferably permanent employment.
                    I am characterized by creativity, high personal culture, resistance to stress.
                </p>
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/zuzanna-gaudnik/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open my LinkedIn
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
