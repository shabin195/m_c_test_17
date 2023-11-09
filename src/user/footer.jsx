import React from 'react';
import facebook from "../images/facebook.png"
import search from "../images/search.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

    function Footer() {   

        return (
            <div className="footer-wrpr">
                 <div className="social-icon-center">
                        <div className="footer-socialicon">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="footer-socialicon">
                            <img src={search} alt="" />
                        </div>
                        <div className="footer-socialicon">
                            <img src={linkedin} alt="" />
                        </div>
                        <div className="footer-socialicon">
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className="footertext">
                        <p>example@gmail.com</p>
                        <p>© Copyright 2022 Name. All rightd received </p>
                    </div>
                  
            </div>
        )
    }
    export default Footer;