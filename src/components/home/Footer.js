import React from "react";
import { FaPhoneSquareAlt, FaRegEnvelope, FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "./Home"


function Footer () {
    return (
        
        <div className="footer">
            <div className="section1">
                <h2>Contacts</h2>
                <div className="footer-contact">
                    <p><FaPhoneSquareAlt/>0714244241</p>
                    <FaRegEnvelope />
                    <p>info@bookreview</p>
                </div>
            </div>

            <div className="section2">
                <h2>Socials</h2>
                <div className="socials">
                    <FaInstagram /> <FaFacebookSquare /> <FaTwitterSquare />
                </div>
            </div>
        </div>
    )
}

export default Footer;