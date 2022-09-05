import React from "react";
import {Link} from "react-scroll";
// import {Link as ReactLink} from 'react-router-dom'


const Header = () => {
    return (
        <div className="container">
            <div className="header"></div>
                <div className="header__elements">
                    <nav>
                        <input type="checkbox" className="menu__btn" id="menu__btn"/>
                            <label htmlFor="menu__btn" className="menu__toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        <ul className='header__nav'>
                            <li className="nav__element"><Link to="home">Start</Link></li>
                            <li className="nav__element"><Link to="aboutme" >About Me</Link></li>
                            <li className="nav__element"><Link to="projects">Projects</Link></li>
                            <li className="nav__element"><Link to="tools">Tools</Link></li>
                            <li className="nav__element"><Link to="contact">Contact</Link></li>
                        </ul>
                    </nav>
                    {/* <div className="header__mobile__baner"></div> */}
                </div>
            </div>
        
    )
}

export default Header;