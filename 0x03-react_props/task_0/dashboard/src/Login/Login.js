import React, {Fragment} from "react";
import './Login.css'

function Login(){

    return (
        <Fragment className="App-login">
        <p>
        Login to access the full dashboard
        </p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type="button">OK</button>
        </Fragment>
    );
}

export default Login;