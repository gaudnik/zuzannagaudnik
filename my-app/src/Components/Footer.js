import React from "react";
import Facebook from "../Scss/Images/Facebook.svg";
import Git__hub from "../Scss/Images/Git__hub.png";
import LinkedIn from "../Scss/Images/LinkedIn.png";
import Codewars from "../Scss/Images/Codewars.png";

const Footer = () => {
    return (
    <section className="footer">
        <div className="footer_container">
            <div className="footer_item">Coded by Zuzanna Gaudnik</div>
            <div className="footer_logos">
                <a target="blank" href="https://github.com/gaudnik"
                    className="footer_logo"><img src={Git__hub} alt="github"/></a>
                <a target="blank" href="https://www.codewars.com/users/zuzanna.gaudnik@"
                    className="footer_logo"><img src={Codewars} alt="codewars"/></a>
                <a target="blank" href="https://www.linkedin.com/in/zuzanna-gaudnik/"
                    className="footer_logo"><img src={LinkedIn} alt="linkedin"/></a>
                <a target="blank" href="https://www.facebook.com/zuzanna.gaudnik/" 
                    className="footer_logo"><img src={Facebook} alt="facebook"/></a>
            </div>
        </div>
    </section>
    )
}

export default Footer;