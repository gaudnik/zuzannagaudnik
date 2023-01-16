import React from "react";
import {Link} from "react-scroll";

const Menu = () => {
    
    return (
        <nav>
            <input type="checkbox" className="menu__btn" id="menu__btn"/>
                <label htmlFor="menu__btn" className="menu__toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul className="menu__nav">
                    <li className="nav__element"><Link to="home">Start</Link></li>
                    <li className="nav__element"><Link to="aboutme" >About Me</Link></li>
                    <li className="nav__element"><Link to="projects">Projects</Link></li>
                    <li className="nav__element"><Link to="tools">Tools</Link></li>
                    <li className="nav__element"><Link to="hobbies">Hobbies</Link></li>
                    <li className="nav__element"><Link to="contact">Contact</Link></li>
                </ul>
        </nav>      
    )
}

export default Menu;