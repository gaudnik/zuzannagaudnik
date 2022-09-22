import React from "react";

const Projects = () => {
    return (
        <>
            <section className="projects">
                <div className="projects__description">
                    <h1>Projects</h1>
                    <div className="separator"></div>
                    <p>In this project written with the React.js framework, I used react-create-app,
                         JSON server and Syntactically Awesome Style Sheets (Sass). I made this 
                         project in my free time because I like Harry Potter :). If you are too, 
                         test your knowledge!</p>
                    <a target="blank" className="btn btn__projects" href="https://github.com/gaudnik">
                        Open my GitHub
                    </a>
                </div>
                <a target="blank" href="https://harrypotter-quiz.netlify.app/">
                    <div className="projects__image">
                        <h2 className="projects__harrypotter">Harry Potter<br/> Quiz</h2>
                    </div>
                </a>
                
            </section>        
        </>
    )
}

export default Projects;