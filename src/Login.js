import React, { useEffect, useState } from "react";
import getToken from "./APIs/getToken";
import { useNavigate, useLocation } from "react-router-dom"

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (event) => {

        // get token => signin
        if (username.length > 0 && password.length > 0) {

            getToken(username, password).then(res => {
                let { token } = res?.data;

                if (token) {
                    localStorage.setItem("token", token);
                    const { redirect, blogIndex } = location?.state || {};

                    // we want to redirect to particular post
                    if (redirect)
                        navigate(`/blogs/${blogIndex}`, { replace: true });

                    // if nothing as such => show normal blogs
                    else
                        navigate("/blogs");
                }
                else {
                    alert("some error occured, see logs");
                    console.log('error', res);
                }
            })
        }

        else {
            alert("fill in details");
        }

        event.preventDefault();
    }

    return <form onSubmit={handleSubmit}>

        <div>Enter username</div>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />

        <div>Enter Password</div>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

        <br />
        <input type="submit" value="Submit" />
    </form>
}

export default Login;