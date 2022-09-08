import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Tools from "./Tools";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="home__page">
            <Menu/>
            <Header/>
            <AboutMe/>
            <Projects/>
            <Tools/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default Home;