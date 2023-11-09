import React from 'react';
import { loginValidateSave } from './validations'
import facebook from "../images/facebook.png"
import search from "../images/search.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import demo from "../images/login.png"
import './style.css'
function Login() {
    const save = () => {
        var isValid = loginValidateSave()
        if (isValid === true) {

            window.location.href = '/profile'
        }
    }
    return (
        <div className="row loginrow"  >
            <div className="col-md-6 centeralign">
                <div className="main-headdiv">
                    <h1>Sign In</h1>
                    <h4>New user? <a href="http://" target="_blank" rel="noopener noreferrer" className="a-create">Create an account</a></h4>
                </div>
                <div>
                    <div class="form-group">
                        <label for="txtEmail">Email address</label>
                        <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" placeholder="Enter email" name="txtEmail" />
                    </div>
                    <div class="form-group">
                        <label for="txtPassword">Password</label>
                        <input type="password" class="form-control" id="txtPassword" placeholder="Password" name="txtPassword" />
                    </div>
                    <input type="checkbox" />
                    <span className="checkbox-text">Keep me signed in</span>
                    <div className="fieldOuter fullwidthOverride">
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
            <div className="col-md-6 centeralign d-md-block d-none d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <img src={demo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;