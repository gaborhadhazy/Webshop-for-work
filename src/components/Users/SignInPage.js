import React from 'react';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'

function SignInPage(props) {
    return (
        <div className="content-container">
            <form>
                <h3>LOGIN</h3>

                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <small><Link to="/users/password-reset">Forgot your password?</Link></small>
                <br/>

                <motion.button className="inverted"

                >SIGN IN</motion.button>

                <br/>
                <small>or <Link to="/">Return to Store</Link></small>
            </form>

        </div>
    );
}

export default SignInPage;