import React from 'react';
import {Link} from "react-router-dom";

function RegistrationPage(props) {
    return (
        <div className="content-container">
            <form>
                <h3>CREATE ACCOUNT</h3>

                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <br/>

                <button className="inverted">CREATE</button>

                <br/>
                <small>or <Link to="/">Return to Store</Link></small>
            </form>

        </div>
    );
}

export default RegistrationPage;