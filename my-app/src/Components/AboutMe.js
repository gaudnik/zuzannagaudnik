import React from "react";

const AboutMe = () => {
    return (
        <section className="aboutme" id="aboutme">
            <div className="aboutme__image"></div>
            <div className="aboutme__description">
                <h2>About Me</h2>
                <div className="separator"></div>
                <p className="aboutme__text">
                    I'm a creative person who likes to take part in teamwork to build new
                    websites. Currently, I'm working as a freelancer on several projects,
                    ranging from minor one-page sites to larger modules for more extensive
                    projects. Recently, I've started considering transitioning from
                    freelancing to a more stable, long-term position.
                </p>
                <a
                    className="btn"
                    href="https://example.com/my-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download my CV
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
