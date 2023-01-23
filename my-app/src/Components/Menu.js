import React from "react";
import {Link} from "react-scroll";

const menuStyle = {
    width : '15%',
    height : '100vh',
    position : 'fixed'
}

const Menu = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <nav>
            <input type="checkbox" className="menu__btn" id="menu__btn"/>
                <label htmlFor="menu__btn" className="menu__toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="menu__nav" onMouseLeave={() => setVisible(false)}>
                {!visible && <div style={menuStyle} onMouseEnter={() => setVisible(true)}></div>}
                <ul style={visible ? {width:'250px', transition: '0.4s'}: {width: '0px',transition: '0.3s'}}>
                    <li className="nav__element"><Link to="home">Start</Link></li>
                    <li className="nav__element"><Link to="aboutme" >AboutMe</Link></li>
                    <li className="nav__element"><Link to="projects">Projects</Link></li>
                    <li className="nav__element"><Link to="tools">Tools</Link></li>
                    <li className="nav__element"><Link to="hobbies">Hobbies</Link></li>
                    <li className="nav__element"><Link to="contact">Contact</Link></li>
                </ul>
                </div>
        </nav>  
    )
}    
    

export default Menu;