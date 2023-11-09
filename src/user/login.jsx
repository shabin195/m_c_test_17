import React from 'react';
import { loginValidateSave } from './validations'
import facebook from "../images/facebook.png"
import search from "../images/search.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import './style.css'
function Login() {
    const save = () => {
        var isValid = loginValidateSave()
        if (isValid === true) {

            window.location.href = '/profile'
        }
    }
    return (
        <div className="mainDiv">
            <div className="main-headdiv">
                <h1>Sign In</h1>
                <h3>New user? <a href="http://" target="_blank" rel="noopener noreferrer" className="a-create">Create an account</a></h3>
            </div>
            <div>
                <div className="fieldOuter">
                    <input type="text" className="formField" placeholder="Username or email" tabindex='1' autoComplete="off" name="txtEmail" id="txtEmail" autoFocus />
                </div>
                <div className="fieldOuter">
                    <input type="password" className="formField" placeholder="Password" tabindex='2' autoComplete="off" name="txtPassword" id="txtPassword" />
                </div>
                <div className="fieldOuter">
                    <input type="checkbox" />
                    <span className="checkbox-text">Keep me signed in</span>
                    <div className="fieldOuter">
                        <button className="signin-btn" onClick={save}>Sign In</button>
                    </div>
                    <div className="fieldOuter fieldOuter-line">
                        <div className="line"></div>
                        <div className="sign-text">Or Sign In With</div>
                        <div className="line"></div>
                    </div>
                    <div className="fieldOuter social-icon-center">
                        <div className="socialicon">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="socialicon">
                            <img src={search} alt="" />
                        </div>
                        <div className="socialicon">
                            <img src={linkedin} alt="" />
                        </div>
                        <div className="socialicon">
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;